import { DOCUMENT } from "@angular/common";
import { Component, OnInit,HostListener, Inject, Renderer2, ViewChild } from "@angular/core";
import { LoginService } from "src/app/service/login.service";
import { MenuService } from "src/app/service/menu.service";
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
    
 

  openMenu = true;
  iniciarAnimacion = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private serviceMenu: MenuService,
    private authService: LoginService
  ) {
    //Optiene si se dio clic en el menu para extender el menu
    this.serviceMenu.listen().subscribe((event: any) => {
      this.closeMenu()
    });
    
  }



 
  ngOnInit(): void {
  }
  //Nos permite salir de la aplicacion
  onLogut() {
    this.authService.logout();
  }
  //Nos permite esconder el menú cuando está en un telefono
  closeMenu() {
    this.drawer.toggle();
  }
}
