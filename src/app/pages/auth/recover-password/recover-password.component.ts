import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.component.html",
  styleUrls: ["./recover-password.component.scss"],
})
export class RecoverPasswordComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
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
      
    }
  }


}
