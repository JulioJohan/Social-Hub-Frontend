import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-dialog-signin",
  templateUrl: "./dialog-signin.component.html",
  styleUrls: ["./dialog-signin.component.scss"],
})
export class DialogSigninComponent implements OnInit {
  codeAuthForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router, private matDialogRef:MatDialogRef<DialogSigninComponent>) {}

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
      this.closeDialog()
      this.router.navigateByUrl("/home")
    } 
  }
  closeDialog(){
    this.matDialogRef.close()
    
  }
}
