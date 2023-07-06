import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

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
    private formBuilder: FormBuilder,
    private router: Router,
    private matDialogRef: MatDialogRef<DialogSigninComponent>
  ) {}

  ngOnInit(): void {
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
      this.router.navigateByUrl("/home");
      this.errorInput = false;
      this.textErrorCode = " ";
      this.closeDialog();
    } else {
      this.errorInput = true;
      this.textErrorCode = "Agrega los 8 dígitos del código ";
    }
  }

  //Metodo para cerrar este dialog
  closeDialog() {
    this.matDialogRef.close();
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
