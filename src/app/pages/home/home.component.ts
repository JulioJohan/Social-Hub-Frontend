import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/service/login.service";
import { MenuService } from "src/app/service/menu.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  openMenu = true;
  iniciarAnimacion = false;

  constructor(
    private serviceMenu: MenuService,
    private authService: LoginService
  ) {}

  
  ngOnInit(): void {
    //Optiene si se dio clic en el menu para extender el menu
    this.serviceMenu.listen().subscribe((event: any) => {
      this.openMenu = event.event;
      this.iniciarAnimacion = true;
    });
  }
  //Nos permite salir de la aplicacion
  onLogut() {
    this.authService.logout();
  }
  //Nos permite esconder el menú cuando está en un telefono
  closeMenu() {
    this.serviceMenu.emit(true);
  }
}
