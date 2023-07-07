import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SigninComponent } from "../../auth/signin/signin.component";
import { LoginService } from "src/app/service/login.service";
import { AlertsService } from '../../../service/alerts.service';

@Component({
  selector: "app-dialog-signin",
  templateUrl: "./dialog-signin.component.html",
  styleUrls: ["./dialog-signin.component.scss"],
})
export class DialogSigninComponent implements OnInit {
  //Se difine la variable del formGrup
  codeAuthForm: FormGroup;
  fields: FormControl[];
  errorInput: boolean = false;
  textErrorCode = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SigninComponent>,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertsService: AlertsService,
    private loginService: LoginService,
    private matDialogRef: MatDialogRef<DialogSigninComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    // Formulario de 8 caracteres para nuestro token de 8 caracteres 
    this.codeAuthForm = this.formBuilder.group({
      code1: ["", [Validators.required]],
      code2: ["", [Validators.required]],
      code3: ["", [Validators.required]],
      code4: ["", [Validators.required]],
      code5: ["", [Validators.required]],
      code6: ["", [Validators.required]],
      code7: ["", [Validators.required]],
      code8: ["", [Validators.required]],
    })   
    //Se difinen los campos del formulario y sus restricciones.
    this.codeAuthForm = this.formBuilder.group({
      code1: ["", [Validators.required, Validators.minLength(8)]],
    });

    //Funcion para validar si se cumple la condiciones del formulario
    this.codeAuthForm.valueChanges.subscribe(() => {
      this.checkFormCompletion();
    });
  }

  //Metodo que nos permite evaluar y dirigir si se cumple el formulario
  checkFormCompletion() {

    if (this.codeAuthForm.valid) {
      // Obtenemos cada caracter del modal
      const { code1, code2, code3, code4, code5, code6, code7, code8 } = this.codeAuthForm.value
      // Contruimos el token
      const token = `${code1}`
      console.log(token)
      const checkSendToken = {
        email: this.data.email,
        multi_factor_authentication: token
      };
      // Lo enviemos al backend
      this.loginService.doubleAuthentication(checkSendToken).subscribe(data => {
        console.log(data)
        if (!data.ok) {
          this.alertsService.warningMessage(data.msg);
          return;
        }
        if (data.ok) {
          // Si esta bien cerramos el modal y lo redirigimos al login
          this.closeDialog();
          this.router.navigateByUrl("/home");
          this.errorInput = false;
          this.textErrorCode = "";
        }
      })  


      this.router.navigateByUrl("/home");
      this.errorInput = false;
      this.textErrorCode = " ";
      this.closeDialog();
    } else {
      // Mandamos el mensaje de que debe ingresar los 8 caracteres
      this.errorInput = true;
      this.textErrorCode = "Agrega los 8 dígitos del código ";
    }
  }

  //Metodo para cerrar este dialog
  closeDialog() {
    this.matDialogRef.close();
  }
  handlePaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData("text");

    // Verificar si el texto pegado solo contiene números    
    if (/^\d+$/.test(pastedText) && pastedText.length === 7) {
      // Rellenar los campos del formulario
      this.codeAuthForm.patchValue({
        code1: pastedText.charAt(0),
        code2: pastedText.charAt(1),
        code3: pastedText.charAt(2),
        code4: pastedText.charAt(3),
        code5: pastedText.charAt(4),
        code6: pastedText.charAt(5),
        code7: pastedText.charAt(6),
        code8: pastedText.charAt(7),
      });
    }
  }
  handleInput(
    currentInput: HTMLInputElement,
    nextInput: HTMLInputElement | null
  ) {
    const inputValue = currentInput.value;

    if (inputValue.length === 1 && nextInput) {
      nextInput.focus();
    }
  }

  handleBackspace(
    event: KeyboardEvent,
    prevInput: HTMLInputElement | null,
    currentInput: HTMLInputElement
  ) {
    if (currentInput.value === "") {
      event.preventDefault();
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  //Balida el campo que cumpla con las restricciones
  requerido(id: string): boolean {
    if (this.errorInput) {
      const control = this.codeAuthForm.get(id);
      const hasValue =
        control && control.value !== null && control.value !== "";
      if (hasValue) {
        const hasRequiredError = control?.hasError("required");
        const hasPatternError = control?.value.length !== 8;

        return !hasRequiredError && !hasPatternError;
      }
    }
    return true;
}
}
