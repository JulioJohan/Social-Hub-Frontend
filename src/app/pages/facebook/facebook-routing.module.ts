import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FacebookComponent } from "./facebook.component";
import { PublicationsComponent } from "./publications/publications.component";

const routes: Routes = [
  { path: "", redirectTo: "public", pathMatch: "full" },
  { path: "public", component: PublicationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookRoutingModule {}
