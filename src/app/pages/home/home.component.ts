import {  Component, OnInit} from "@angular/core";
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
    private serviceMenu:MenuService
  ) {}

  ngOnInit(): void {
    this.serviceMenu.listen().subscribe((event:any)=>{
      this.openMenu=event.event
      this.iniciarAnimacion = true;
    })
  }
}
