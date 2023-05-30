import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiktokRoutingModule } from './tiktok-routing.module';
import { TiktokComponent } from './tiktok.component';


@NgModule({
  declarations: [
    TiktokComponent
  ],
  imports: [
    CommonModule,
    TiktokRoutingModule
  ]
})
export class TiktokModule { }
