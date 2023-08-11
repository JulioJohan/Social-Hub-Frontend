import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiktokComponent } from './tiktok.component';
import { PublicationstComponent } from './publications/publications.component';
import { MyPublicationstComponent } from './my-publications/my-publications.component';

const routes: Routes = [
  { path: "", redirectTo: "public", pathMatch: "full" },
  { path: "public", component: PublicationstComponent },
  { path: "myposts", component: MyPublicationstComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiktokRoutingModule { }
