import { Injectable } from "@angular/core"
import Swal from "sweetalert2"

@Injectable({
    providedIn: 'root'
  })
  export class AlertsService {
  
    // Alerta para el exito de un proceso
    public succesMessage(title:string,message:string){
      Swal.close();
      // Creación de la alerta 
      Swal.fire({      
        icon: 'success',
        title:title,        
        text: message,
        showConfirmButton: false,
        timer:2000
      })        
    }

    // Alerta para un error de un proceso
    public errorMessage(title:string,message:string){
      Swal.close();
      // Creación de la alerta 
      Swal.fire({
        icon: 'error',
        title:title,        
        text: message,
        showConfirmButton: false,
        timer:2000
      })    
    }

    // Alerta para un advertir de un proceso
    public warningMessage(mensaje:string){
      Swal.close();
      // Creación de la alerta 
      Swal.fire({
        icon: 'warning',
        text: mensaje,
        showConfirmButton: false,
        timer:2000
      })
    }    
   
  }
  