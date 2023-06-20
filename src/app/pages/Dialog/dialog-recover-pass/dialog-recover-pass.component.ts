import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-dialog-recover-pass",
  templateUrl: "./dialog-recover-pass.component.html",
  styleUrls: ["./dialog-recover-pass.component.scss"],
})
export class DialogRecoverPassComponent implements OnInit {
  codeAuthForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private matDialogRef: MatDialogRef<DialogRecoverPassComponent>
  ) {}

  ngOnInit(): void {
    this.codeAuthForm = this.formBuilder.group({
      code1: ["", Validators.required],
      code2: ["", Validators.required],
      code3: ["", Validators.required],
      code4: ["", Validators.required],
      code5: ["", Validators.required],
    });

    this.codeAuthForm.valueChanges.subscribe(() => {
      this.checkFormCompletion();
    });
  }

  checkFormCompletion() {
    if (this.codeAuthForm.valid) {
      this.router.navigateByUrl("/auth/change-pass");
      this.closeDialog();
    }
  }
  closeDialog() {
    this.matDialogRef.close();
  }
}
