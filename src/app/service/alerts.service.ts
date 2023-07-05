import { Injectable } from "@angular/core"
import Swal from "sweetalert2"

@Injectable({
    providedIn: 'root'
  })
  export class AlertsService {
  
    constructor() { }

    public static succesMessage(title:string,message:string){
      Swal.close();
      Swal.fire({
        icon: 'success',
        title:title,        
        text: message,
        showConfirmButton: false,
        timer:2000
      })        }

    public static errorMessage(title:string,message:string){
      Swal.close();
      Swal.fire({
        icon: 'error',
        title:title,        
        text: message,
        showConfirmButton: false,
        timer:2000
      })    
    }

    public static warningMessage(mensaje:string){
      Swal.close();
      Swal.fire({
        icon: 'warning',
        text: mensaje,
        showConfirmButton: false,
        timer:2000
      })
    }    
   
  }
  