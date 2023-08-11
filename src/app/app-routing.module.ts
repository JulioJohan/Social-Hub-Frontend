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
import { MyPublicationstComponent } from './pages/tiktok/my-publications/my-publications.component';
import { AuthGuard } from './guards/auth.guard';


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
    canActivate:[AuthGuard],
    canLoad:[AuthGuard],
    children: [
      { path: "", redirectTo: "select", pathMatch: "full" },
      { path: "select", component: SelectComponent },
      {
        path: "bookface",
        component: FacebookComponent,
        canActivate:[AuthGuard],
        children: [
          { path: "", redirectTo: "public", pathMatch: "full" },
          { path: "public", component: PublicationsComponent, canActivate:[AuthGuard], },
          { path: "myposts", component: MyPublicationsComponent, canActivate:[AuthGuard], }
        ],
      },
      { 
        path: "toktik", 
        component: TiktokComponent ,
        canActivate:[AuthGuard],
        children: [
          { path: "", redirectTo: "public", pathMatch: "full" },
          { path: "public", component: PublicationstComponent, canActivate:[AuthGuard], },
          { path: "myposts", component: MyPublicationstComponent, canActivate:[AuthGuard],}
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
