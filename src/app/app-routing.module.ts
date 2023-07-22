import { PublicationstComponent } from './pages/tiktok/publications/publications.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "./pages/home/page404/page404.component";

import { HomeComponent } from "./pages/home/home.component";
import { SelectComponent } from "./pages/home/select/select.component";
import { FacebookComponent } from "./pages/facebook/facebook.component";
import { TiktokComponent } from "./pages/tiktok/tiktok.component";
import { PublicationsComponent } from "./pages/facebook/publications/publications.component";

 

import { MyPublicationsComponent } from "./pages/facebook/my-publications/my-publications.component";


const routes: Routes = [
 
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },

  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "select", pathMatch: "full" },
      { path: "select", component: SelectComponent },
      {
        path: "bookface",
        component: FacebookComponent,
        children: [
          { path: "", redirectTo: "public", pathMatch: "full" },
          { path: "public", component: PublicationsComponent },
          { path: "myposts", component: MyPublicationsComponent }
        ],
      },
      { 
        path: "toktik", 
        component: TiktokComponent ,
        children: [
          { path: "", redirectTo: "public", pathMatch: "full" },
          { path: "public", component: PublicationstComponent },
      ],
    }  
    ],
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
