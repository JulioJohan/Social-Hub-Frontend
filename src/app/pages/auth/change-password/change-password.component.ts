import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
 
import { LoginService } from '../../../service/login.service';
import { AlertsService } from '../../../service/alerts.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  public tokenPassword:string = '';  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog:MatDialog,
    private loginService:LoginService,
    private alertsService:AlertsService
  ) {}
  ngOnInit() {
    // Formulario para la nueva contraseña
    this.authForm = this.formBuilder.group(
      {
        password: ['', Validators.required,this.validatePassword],
        cpassword: ['', Validators.required,this.checkPasswords],
      });
    // get return url from route parameters or default to '/'
    // Totma los parametros de nuestr URL
    this.tokenPassword = this.route.snapshot.paramMap.get('tokenPassword')!;
    // Verificamos en el Backend
    this.checkTokenPassword(this.tokenPassword);
  }

  // Metodo para checar el token 
  checkTokenPassword(token:string){
    this.loginService.checkTokenPassword(token).subscribe(data=>{
      console.log(data)
      if(!data.ok){
        // Si no esta bien lo redirigimos al inicio de sesion
        this.alertsService.errorMessage('Token!','Token No valido');
        this.router.navigateByUrl('/auth/signin')
      }
    })
  }

  // Checa si la contraseña es igual o no -
  validatePassword(control: FormControl): Promise<any> | Observable<any> {
    const password = control.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;    
    return new Promise((resolve) => {
      if (passwordRegex.test(password)) {
        resolve(null);
      } else {
        resolve({ invalidPassword: true });
      }
    });
  }


  checkPasswords(control: FormControl): Promise<any> | Observable<any> {
    const password = control.root.get('password')?.value;
    const confirmPassword = control.value;
    console.log(password)
    console.log(confirmPassword)
    return new Promise((resolve) => {
      if (password === confirmPassword) {
        resolve(null);
      } else {        
        resolve({ invalidPassword: true });
      }
    });

  }


  // checkPasswords(group: FormGroup) {
  //   let pass = group.get("password")?.value;
  //   let confirmPass = group.get("cpassword")?.value;
  //   return pass === confirmPass ? null : { notSame: true };
  // }

  get f() {
    return this.authForm.controls;
  }
  // Enviamos la nueva contraseña
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.valid) {   
      // Enviamos la peticion al back 
      this.loginService.newPassword(this.tokenPassword,this.authForm.value).subscribe(data=>{
        if(data){
          this.alertsService.succesMessage('Felicidades',data.msg);
          this.router.navigateByUrl('/auth/signin');
        }
      })      
      // this.openDialog()

  }


  }
}
