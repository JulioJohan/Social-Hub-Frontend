import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiktokRoutingModule } from './tiktok-routing.module';
import { TiktokComponent } from './tiktok.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

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
import { HeadertComponent } from './header/headert.component';
import { PublicationstComponent } from './publications/publications.component';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    TiktokComponent,
    HeadertComponent,
    PublicationstComponent,
    CommentsComponent,
    CreatePostComponent,
  ],
  imports: [
    CommonModule,
    TiktokRoutingModule,
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
    InputFileModule,
    MatProgressSpinnerModule
  ],
  exports:[TiktokComponent]
})
export class TiktokModule { }
