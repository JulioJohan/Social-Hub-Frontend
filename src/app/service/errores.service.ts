import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor() { }

  error(error:any):string{
      if(error === 'Bad Request'){
        return "Ya existe un usuario con ese email"
      }
    return
  }
}
