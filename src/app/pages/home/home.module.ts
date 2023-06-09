import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTabsModule } from "@angular/material/tabs";
import { HeaderComponent } from "./header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { SelectComponent } from "./select/select.component";
import { FacebookModule } from "../facebook/facebook.module";
import { TiktokModule } from "../tiktok/tiktok.module";


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SelectComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonModule,
    FacebookModule,
    TiktokModule
  ],
})
export class HomeModule {}
