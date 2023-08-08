import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {

  constructor(private loginService:LoginService,
               private router:Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.loginService.checkToken();

    return this.loginService.token$.pipe(
      take(1),
      map((token:string) => {
        if(token === "" || token === null){
          this.router.navigate(['/auth/signin'])
          return false
        }else{
          return true;
        }
        // token == "" ? false :true
      })
    )
  
  }
  // if(!this.loginService.checkToken()){

  // }
  // //efecto secundario  
  // if(!estaAutenticado){
  //     this.router.navigateByUrl('/login')
  //   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.loginService.checkToken();
    //validar el token  
    return this.loginService.token$.pipe(
      take(1),
      map((token:string) => {
        if(token === "" || token === null){
          this.router.navigate(['/auth/signin'])
          return false;
        }else{
          return true;
        }
        // token == "" ? false :true
      })
    )
  }
  
}
