import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { LoginService } from "src/app/service/login.service";

import { MenuService } from "src/app/service/menu.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { EditUserComponent } from "../edit-user/edit-user.component";
const document: any = window.document;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit{
  data: User= new User();
  public config: any = {};
  userImg: string;
  homePage: string;
  isNavbarCollapsed = true;
  flagvalue;
  countryName;
  langStoreValue: string;
  defaultFlag: string;
  isOpenSidebar: boolean;
  menuOpen = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: LoginService,
    private serviseMenu: MenuService,
    private matDialog: MatDialog ,
  ) {
    
  }
  listLang = [
    { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
    { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
    { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
  ];
 
  ngOnInit() {
    //Optiene si se dio clic en el menu para extender el menu
    this.serviseMenu.listen().subscribe((event: any) => {
      this.menuOpen = event.event;
    });
    this.uId()
  }

  // ngAfterViewInit() {
  //   // set theme on startup
  //   if (localStorage.getItem("theme")) {
  //     this.renderer.removeClass(this.document.body, this.config.layout.variant);
  //     this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
  //   } else {
  //     // this.renderer.addClass(this.document.body, this.config.layout.variant);
  //   }

  //   if (localStorage.getItem("menuOption")) {
  //     this.renderer.addClass(
  //       this.document.body,
  //       localStorage.getItem("menuOption")
  //     );
  //   } else {
  //     this.renderer.addClass(
  //       this.document.body,
  //       "menu_" + this.config.layout.sidebar.backgroundColor
  //     );
  //   }

  //   if (localStorage.getItem("choose_logoheader")) {
  //     this.renderer.addClass(
  //       this.document.body,
  //       localStorage.getItem("choose_logoheader")
  //     );
  //   } else {
  //     this.renderer.addClass(
  //       this.document.body,
  //       "logo-" + this.config.layout.logo_bg_color
  //     );
  //   }

  //   if (localStorage.getItem("sidebar_status")) {
  //     if (localStorage.getItem("sidebar_status") === "close") {
  //       this.renderer.addClass(this.document.body, "side-closed");
  //       this.renderer.addClass(this.document.body, "submenu-closed");
  //     } else {
  //       this.renderer.removeClass(this.document.body, "side-closed");
  //       this.renderer.removeClass(this.document.body, "submenu-closed");
  //     }
  //   } else {
  //     if (this.config.layout.sidebar.collapsed === true) {
  //       this.renderer.addClass(this.document.body, "side-closed");
  //       this.renderer.addClass(this.document.body, "submenu-closed");
  //     }
  //   }
  // }
  callFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    this.menuOpen = !this.menuOpen;
    this.serviseMenu.emit(this.menuOpen);

  }

  //Metodo para salir de la web
  logout() {
    this.authService.logout();
  }

  //optener los datos del usuario desde el token
  uId(){
    const uid = this.authService.decodeToken();
    this.authService.findById(uid).subscribe((data:any) => {
      this.data = data.data
    });
  }

  //Abrir el dialogo de editar usuario
  openEdirUser(){
    
      const dialogConfig: MatDialogConfig<any> = {
        maxWidth: '100vw',
        maxHeight: '100vh',
        panelClass: 'full-screen-dialog-edit-user',
      };
      dialogConfig.disableClose = true;
      // Example usage
      const result =this.matDialog.open(EditUserComponent, dialogConfig);
      result.afterClosed().subscribe((result) => {
        if(result){
          this.uId()
        }
      })
  }
}
