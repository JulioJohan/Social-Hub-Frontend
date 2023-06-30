import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { PageLoaderComponent } from "./layout/page-loader/page-loader.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { RightSidebarComponent } from "./layout/right-sidebar/right-sidebar.component";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { fakeBackendProvider } from "./core/interceptor/fake-backend";
import { ErrorInterceptor } from "./core/interceptor/error.interceptor";
import { JwtInterceptor } from "./core/interceptor/jwt.interceptor";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ClickOutsideModule } from "ng-click-outside";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";

import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { AuthModule } from './pages/auth/auth.module';
import { DialogSigninComponent } from './pages/Dialog/dialog-signin/dialog-signin.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { HomeModule } from "./pages/home/home.module";
import { DialogSignupComponent } from './pages/Dialog/dialog-signup/dialog-signup.component';
import { DialogRecoverPassComponent } from './pages/Dialog/dialog-recover-pass/dialog-recover-pass.component';
import { DialogChangePassComponent } from './pages/Dialog/dialog-change-pass/dialog-change-pass.component';
import { DialogSignupErrorComponent } from './pages/Dialog/dialog-signup-error/dialog-signup-error.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    DialogSigninComponent,
    DialogSignupComponent,
    DialogRecoverPassComponent,
    DialogChangePassComponent,
    DialogSignupErrorComponent,
    
    
  ],
  imports: [
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    LoadingBarRouterModule,
    // core & shared
    CoreModule,
    SharedModule,
    AuthModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
