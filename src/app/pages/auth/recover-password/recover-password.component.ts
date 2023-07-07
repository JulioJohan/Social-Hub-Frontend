import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogRecoverPassComponent } from "../../Dialog/dialog-recover-pass/dialog-recover-pass.component";
import { LoginService } from '../../../service/login.service';
import { AlertsService } from '../../../service/alerts.service';

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
    private loginService:LoginService,
    private alertsService:AlertsService,
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
  // Enviamos la petición al backend para que nos envie el correo
  onSubmit() {   
    this.loginService.forgetPassword(this.authForm.value).subscribe(data=>{
      if(data.ok){
        this.alertsService.succesMessage('',data.msg);  
      }
      if(!data.ok){
        this.alertsService.warningMessage(data.msg);
      }
    })
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.authForm.valid) {
    //   this.openDialog();
    // }


  }

  openDialog() {
    const dialogConfig: MatDialogConfig<any> = {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "full-screen-dialog",
    };
    dialogConfig.disableClose = true;
    this.matDialog.open(DialogRecoverPassComponent,dialogConfig)
  }
}
