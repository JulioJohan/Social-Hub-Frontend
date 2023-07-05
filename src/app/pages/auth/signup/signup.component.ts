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
import { User } from "src/app/models/user";
import { Observable } from "rxjs";
import { LoginService } from "src/app/service/login.service";
import { DialogSignupErrorComponent } from "../../Dialog/dialog-signup-error/dialog-signup-error.component";
import {HttpResponse } from "@angular/common/http";
import { ErroresService } from "src/app/service/errores.service";
import { Respuesta } from "src/app/models/respuesta";
import Swal from "sweetalert2";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {

  authForm: FormGroup; // nombre del formulario group
  submitted = false;
  hide = true;
  chide = true;
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog:MatDialog,
    private servSignup:LoginService,
    private erres:ErroresService
  ) {}
  ngOnInit() {

    // Funcion que permite esta evaluando los campos en tiempo real
    this.authForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email, Validators.pattern(this.emailPattern),],
        ],
        password: ['', Validators.required, this.validatePassword,],
        cpassword: ['', Validators.required,this.checkPasswords],
      });
    // get return url from route parameters or default to '/'
    
  }

  // Metodo que nos permite saber si a contraseña cumpre con las politicas 
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
  
  // Metodo que nos ayuda a saber si las contraseñas coinseiden 
  checkPasswords(control: FormControl): Promise<any> | Observable<any> {
    const password = control.root.get('password')?.value;
    const confirmPassword = control.value;
    return new Promise((resolve) => {
      if (password === confirmPassword) {
        resolve(null);
      } else {
        resolve({ invalidPassword: true });
      }
    });

  }
  
  
  // Metodo que se llama al dar clic de crear usuario
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.valid) {
      const newUser = this.getFormData()
      console.log(newUser)
      this.servSignup.createUser(newUser).subscribe(data=>{
        if(data.ok){

          return Swal.fire('',data.msg,'success');
        }else {

          return Swal.fire('',data.msg,'error');
        }         
      })               
          
    }
  }   
  
  // Metodo que nos permite mostrar el dialogo de confirmacion
  openDialog(msg:string){
    const dialogConfig: MatDialogConfig<any> = {
      data:msg,
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
    };
    this.matDialog.open(DialogSignupComponent,dialogConfig)
  }

  openDialogError(msg:string){
    const dialogConfig: MatDialogConfig<any> = {
      data:msg,
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
    };
    this.matDialog.open(DialogSignupErrorComponent,dialogConfig)
  }

  // Metodo que nos permite optener los datos del formulario y los retorna en un objeto User
  getFormData():User{
    const username = this.authForm.get('username')?.value;
    const e_mail = this.authForm.get('email')?.value;
    const password = this.authForm.get('password')?.value;

    const newUser:User={
      name: username,
      email: e_mail,
      password: password,
    }
    return newUser
  }
}
