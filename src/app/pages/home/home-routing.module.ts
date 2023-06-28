import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectComponent } from "./select/select.component";
import { FacebookComponent } from "../facebook/facebook.component";
import { TiktokComponent } from "../tiktok/tiktok.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "select",
    pathMatch: "full",
  },
  { path: "select", component: SelectComponent },
  { path: "bookface", component: FacebookComponent },
  { path: "toktik", component: TiktokComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
