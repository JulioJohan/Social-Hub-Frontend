import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PublicationsComponent } from './publications/publications.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatFormFieldModule
  ],
  exports:[FacebookComponent]
})
export class FacebookModule { }
