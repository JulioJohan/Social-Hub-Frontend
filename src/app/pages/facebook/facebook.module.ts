import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PublicationsComponent } from './publications/publications.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {InputFileModule} from 'ngx-input-file'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMenuModule } from "@angular/material/menu";

import { CommentsComponent } from './publications/comments/comments.component';



 
@NgModule({
  declarations: [
    FacebookComponent,
    HeaderComponent,
    PublicationsComponent,
    CreatePostComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FacebookRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatPseudoCheckboxModule,
    MatDatepickerModule,
    // InputFileModule,
    MatProgressSpinnerModule
  ],
  exports:[FacebookComponent]
})
export class FacebookModule { }
