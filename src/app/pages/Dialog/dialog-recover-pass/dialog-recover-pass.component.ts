import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-dialog-recover-pass",
  templateUrl: "./dialog-recover-pass.component.html",
  styleUrls: ["./dialog-recover-pass.component.scss"],
})
export class DialogRecoverPassComponent implements OnInit {
  codeAuthForm: FormGroup;
  fields: FormControl[];
  errorInput: boolean = false;
  textErrorCode = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private matDialogRef: MatDialogRef<DialogRecoverPassComponent>
  ) {}

  ngOnInit(): void {
    this.codeAuthForm = this.formBuilder.group({
      code1: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      code2: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      code3: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      code4: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      code5: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
    });

    this.codeAuthForm.valueChanges.subscribe(() => {
      this.checkFormCompletion();
    });
  }

  checkFormCompletion() {
    if (this.codeAuthForm.valid) {
      this.closeDialog();
      this.router.navigateByUrl("/auth/change-pass");
      this.errorInput = false;
      this.textErrorCode = " ";
    } else {
      this.errorInput = true;
      this.textErrorCode = "Agrega los 5 dígitos del código ";
    }
  }
  closeDialog() {
    this.matDialogRef.close();
  }
  handlePaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData("text");

    // Verificar si el texto pegado solo contiene números
    if (/^\d+$/.test(pastedText) && pastedText.length === 5) {
      // Rellenar los campos del formulario
      this.codeAuthForm.patchValue({
        code1: pastedText.charAt(0),
        code2: pastedText.charAt(1),
        code3: pastedText.charAt(2),
        code4: pastedText.charAt(3),
        code5: pastedText.charAt(4),
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

  requerido(id: string): boolean {
    if (this.errorInput) {
      const control = this.codeAuthForm.get(id);
      const hasValue =
        control && control.value !== null && control.value !== "";
      if (hasValue) {
        const hasRequiredError = control?.hasError("required");
        const hasPatternError = control?.hasError("pattern");
        return !hasRequiredError && !hasPatternError;
      } 
    }
    return true;
  }
}
