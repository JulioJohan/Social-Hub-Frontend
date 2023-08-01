import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Respuesta } from '../models/respuesta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Contructor para para la comunicación en el back ademas del router para derigirse a otra pagina
  constructor(private http: HttpClient, private router: Router) { }

  private token = new BehaviorSubject<string>("");
  private tokenData = new BehaviorSubject<any>({});
  public url: string = environment.servLogin

  get token$():Observable<string>{
    return this.token.asObservable();
  }
  get tokenData$():Observable<any>{
    return this.tokenData.asObservable();
  }

  // public fechaExpiracion: any;

  public guardarLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  public checkToken(){
    const token:string = localStorage.getItem('token');
    console.log(token)
    if(!token){
      this.logout();
    }   
    this.token.next(token!);
    console.log(this.token$)

  }


  // Busqueda con el id para el usuario comunicaión con el back 
  public findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/users/findById/${id}`)
  }

  // Comunicación para guardar el usuario con node
  public createUser(user: User):  Observable<Respuesta> {
    return this.http.post<Respuesta>(`${this.url}/users/createUser`, user);
  }

    // Comunicación para actualizar el usuario con node
  public updateUser( user: User): Observable<User> {

    let headers = new HttpHeaders();
  headers = headers.append('enctype', 'multipart/form-data');
    const id = this.decodeToken()
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirmed', user.confirmed);
    formData.append('email_verified', user.email_verified);
    formData.append('multi_factor_authentication', user.multi_factor_authentication);
    formData.append('father_last_name', user.father_last_name);
    formData.append('mother_last_name', user.mother_last_name);
    formData.append('age', user.age);
    formData.append('date_birth', user.date_birth);
    formData.append('avatar', user.avatar);
    
    return this.http.put<User>(`${this.url}/users/updateUser/${id}`, formData,{headers:headers});
  }

  // Comunicación para eliminar el usuario con node
  public deletUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/users/deleteUser/${id}`,);
  }

  // Comunicación para la implementación del login 
  public login(email: string, password: string) {
    const formularioData = {
      email: email,
      password: password
    }
    return this.http.post(`${this.url}/login/`, formularioData).pipe(tap((resp:any)=>{

    }))
}

  // Comunicación para la implementación del login 
  public doubleAuthentication(usuario: any) {
    return this.http.post(`${this.url}/login/checkDoubleAuthentication`, usuario).pipe(tap((resp: any) => {
      // this.fechaExpiracion = jwt_decode(resp.msg)
      // localStorage.setItem('fechaExpiracion', this.fechaExpiracion.exp);
      //guardando token
      this.token.next(resp.msg);
      this.guardarLocalStorage(resp.msg)
    }))
  }
  // Confirmación para el correo electronico con node js 
  confirmEmail(email_verified: string): Observable<any> {
    return this.http.get<any>(`${this.url}/login/confirmEmail/${email_verified}`);
  }

  //Comunicación para olvidar password  con node js 
  forgetPassword(email:any):Observable<Respuesta>{
    console.log(email)
    return this.http.post<Respuesta>(`${this.url}/login/forget-password`,email);
  }

  //Checar el token de password para olvidar password  con node js 
  checkTokenPassword(tokenPassword:any):Observable<Respuesta>{
    return this.http.get<Respuesta>(`${this.url}/login/new-password/${tokenPassword}`);
  }

  //nuevo password con node js 
  newPassword(tokenPassword:any, password:any):Observable<Respuesta>{
    // console.log(nuevoPassword.password);
    return this.http.post<Respuesta>(`${this.url}/login/new-password/${tokenPassword}`,password);
  }

  //Salir de la sesión con node js 
  logout() {
    //Remover el correo
    this.token.next("");
    this.tokenData.next(null);
    // localStorage.removeItem('token');
    localStorage.removeItem('token');
    // Cambiar la ruta 
    this.router.navigateByUrl('/auth/signin');
  }

  //decodificar token
  decodeToken():number{
    const token =localStorage.getItem('token')
    const decodedToken: any = jwt_decode.default(token);
    return decodedToken.uid

  }

}


