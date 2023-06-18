import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/core/service/auth.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { DialogSigninComponent } from "../../Dialog/dialog-signin/dialog-signin.component";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog ,
    private router: Router,
    
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["admin@software.com", Validators.required],
      password: ["admin@123", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get("username").setValue("admin@software.com");
    this.authForm.get("password").setValue("admin@123");
  }
  employeeSet() {
    this.authForm.get("username").setValue("employee@software.com");
    this.authForm.get("password").setValue("employee@123");
  }
  clientSet() {
    this.authForm.get("username").setValue("client@software.com");
    this.authForm.get("password").setValue("client@123");
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.openDialogC()

    this.loading = false;
  }

  //Open dialogo de code signin
  openDialogC(){
    const dialogConfig: MatDialogConfig<any> = {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
    };
    dialogConfig.disableClose = true;
    // Example usage
    this.matDialog.open(DialogSigninComponent, dialogConfig);
  }
}
