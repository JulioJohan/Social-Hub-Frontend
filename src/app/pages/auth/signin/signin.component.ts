import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { LoginService } from '../../../service/login.service';
import { AlertsService } from '../../../service/alerts.service';
import { DialogSigninComponent } from "../../dialogs/dialog-signin/dialog-signin.component";

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
    private loginService:LoginService,
    private alertsService:AlertsService
    
  ) {
    super();
  }

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;


  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["", [Validators.required,Validators.email, Validators.pattern(this.emailPattern)]],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  // adminSet() {
  //   this.authForm.get("username").setValue("admin@software.com");
  //   this.authForm.get("password").setValue("admin@123");
  // }
  // employeeSet() {
  //   this.authForm.get("username").setValue("employee@software.com");
  //   this.authForm.get("password").setValue("employee@123");
  // }
  // clientSet() {
  //   this.authForm.get("username").setValue("client@software.com");
  //   this.authForm.get("password").setValue("client@123");
  // }
  onSubmit() {
    // Estas variables son para que se muestre el spiner
    this.submitted = true;
    this.loading = true;

    // Nos comunicamos con el backend
    this.loginService.login(this.authForm.value.email, this.authForm.value.password).subscribe(data=>{
      if(!data.ok){
        this.alertsService.warningMessage(data.msg);
        this.loading = false;
        return;
      }
      if(data.ok){
        this.alertsService.succesMessage('El código de verificación se envió a tu correo!',data.msg);
        this.loading = false;
        this.openDialogC()  
      }
      this.loading = false;
  },error =>{
    console.log(error)
    this.loading = false;
  })
  // this.openDialogC()  


    // this.submitted = true;
    // this.loading = true;

    // this.openDialogC()

    // this.loading = false;
  }

  //Open dialogo de code signin
  openDialogC(){
    const dialogConfig: MatDialogConfig<any> = {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
    };
    dialogConfig.disableClose = true;
    dialogConfig.data = this.authForm.value;
    // Example usage
    this.matDialog.open(DialogSigninComponent, dialogConfig);
  }
}
