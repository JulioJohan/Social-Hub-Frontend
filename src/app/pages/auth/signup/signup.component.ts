import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogSignupComponent } from "../../Dialog/dialog-signup/dialog-signup.component";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog:MatDialog,
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
        password: ['', Validators.required],
        cpassword: ['', Validators.required],
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }


  checkPasswords(group: FormGroup) {
    let pass = group.get("password")?.value;
    let confirmPass = group.get("cpassword")?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.valid) {
      this.openDialog()
    } 
  }

  openDialog(){
    const dialogConfig: MatDialogConfig<any> = {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
    };
    this.matDialog.open(DialogSignupComponent,dialogConfig)
  }
}
