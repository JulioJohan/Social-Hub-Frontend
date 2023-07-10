import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PublicationsComponent } from './publications/publications.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    FacebookComponent,
    HeaderComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    FacebookRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports:[FacebookComponent]
})
export class FacebookModule { }
