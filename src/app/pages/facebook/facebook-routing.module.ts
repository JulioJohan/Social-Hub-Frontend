import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicationsComponent } from "./publications/publications.component";
import { MyPublicationsComponent } from "./my-publications/my-publications.component";

const routes: Routes = [
  { path: "", redirectTo: "public", pathMatch: "full" },
  { path: "public", component: PublicationsComponent },
  { path: "myposts", component: MyPublicationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookRoutingModule {}
