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
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import {MatMenuModule} from '@angular/material/menu';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [HomeComponent, HeaderComponent, SelectComponent, EditUserComponent],
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
    TiktokModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule
  ],
})
export class HomeModule {}
