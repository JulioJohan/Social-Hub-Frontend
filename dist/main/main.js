"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _pages_tiktok_publications_publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tiktok/publications/publications.component */ 1356);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_home_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/page404/page404.component */ 8509);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_home_select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/select/select.component */ 5298);
/* harmony import */ var _pages_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/facebook/facebook.component */ 3898);
/* harmony import */ var _pages_tiktok_tiktok_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tiktok/tiktok.component */ 4918);
/* harmony import */ var _pages_facebook_publications_publications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/facebook/publications/publications.component */ 9479);
/* harmony import */ var _pages_facebook_my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/facebook/my-publications/my-publications.component */ 2651);
/* harmony import */ var _pages_tiktok_my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tiktok/my-publications/my-publications.component */ 5355);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: "",
        redirectTo: "auth",
        pathMatch: "full",
    },
    {
        path: "auth",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then((m) => m.AuthModule),
    },
    {
        path: "home",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
        children: [
            { path: "", redirectTo: "select", pathMatch: "full" },
            { path: "select", component: _pages_home_select_select_component__WEBPACK_IMPORTED_MODULE_3__.SelectComponent },
            {
                path: "bookface",
                component: _pages_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_4__.FacebookComponent,
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
                children: [
                    { path: "", redirectTo: "public", pathMatch: "full" },
                    { path: "public", component: _pages_facebook_publications_publications_component__WEBPACK_IMPORTED_MODULE_6__.PublicationsComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard], },
                    { path: "myposts", component: _pages_facebook_my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_7__.MyPublicationsComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard], }
                ],
            },
            {
                path: "toktik",
                component: _pages_tiktok_tiktok_component__WEBPACK_IMPORTED_MODULE_5__.TiktokComponent,
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
                children: [
                    { path: "", redirectTo: "public", pathMatch: "full" },
                    { path: "public", component: _pages_tiktok_publications_publications_component__WEBPACK_IMPORTED_MODULE_0__.PublicationstComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard], },
                    { path: "myposts", component: _pages_tiktok_my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_8__.MyPublicationstComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard], }
                ],
            }
        ],
    },
    { path: "**", component: _pages_home_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




class AppComponent {
    constructor(_router, location) {
        this._router = _router;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart) {
                // location.onPopState(() => {
                //   window.location.reload();
                // });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf("/") + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.PlatformLocation)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: [".swal2-container[_ngcontent-%COMP%] {\n  z-index: 99999 !important;\n}\n\n#swal2-content[_ngcontent-%COMP%] {\n  z-index: 99999 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2FsMi1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI3N3YWwyLWNvbnRlbnQge1xyXG4gICAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-loading-bar/router */ 239);
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth/auth.module */ 6621);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.module */ 7994);
/* harmony import */ var _pages_dialogs_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dialogs/dialog-signin/dialog-signin.component */ 4334);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-input-file */ 9618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);




















const config = {
    fileAccept: '*'
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, "assets/i18n/", ".json");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_16__.LoadingBarRouterModule,
            // core & shared
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule,
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__.HomeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_17__.InputFileModule.forRoot(config),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _pages_dialogs_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_6__.DialogSigninComponent], imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_16__.LoadingBarRouterModule,
        // core & shared
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule,
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__.HomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_input_file__WEBPACK_IMPORTED_MODULE_17__.InputFileModule] }); })();


/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/login.service */ 9855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canLoad(route, segments) {
        this.loginService.checkToken();
        return this.loginService.token$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((token) => {
            if (token === "" || token === null) {
                this.router.navigate(['/auth/signin']);
                return false;
            }
            else {
                return true;
            }
            // token == "" ? false :true
        }));
    }
    // if(!this.loginService.checkToken()){
    // }
    // //efecto secundario  
    // if(!estaAutenticado){
    //     this.router.navigateByUrl('/login')
    //   }
    canActivate(route, state) {
        this.loginService.checkToken();
        //validar el token  
        return this.loginService.token$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((token) => {
            if (token === "" || token === null) {
                this.router.navigate(['/auth/signin']);
                return false;
            }
            else {
                return true;
            }
            // token == "" ? false :true
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7552:
/*!**************************************!*\
  !*** ./src/app/models/commentDTO.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentDTO": () => (/* binding */ CommentDTO)
/* harmony export */ });
class CommentDTO {
}


/***/ }),

/***/ 5806:
/*!**************************************!*\
  !*** ./src/app/models/post.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": () => (/* binding */ Post)
/* harmony export */ });
class Post {
}


/***/ }),

/***/ 5783:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
// Modelo para el usuario
class User {
}


/***/ }),

/***/ 794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ 4772);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 7071);
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-password/recover-password.component */ 4001);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ 4529);
/* harmony import */ var _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-account/confirm-account.component */ 6241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
    },
    { path: 'confirm/:emailVerified',
        component: _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmAccountComponent
    },
    {
        path: 'recover-pass',
        component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__.RecoverPasswordComponent
    },
    {
        path: 'change-pass/:tokenPassword',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 6835:
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AuthComponent {
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 794);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 6835);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 4772);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 7071);
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recover-password/recover-password.component */ 4001);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ 4529);
/* harmony import */ var _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-account/confirm-account.component */ 6241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
















class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
        _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_4__.RecoverPasswordComponent,
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordComponent,
        _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmAccountComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule] }); })();


/***/ }),

/***/ 4529:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/login.service */ 9855);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/alerts.service */ 1092);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function ChangePasswordComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a debe cumplir con los siguientes requisitos: Al menos una letra may\u00FAscula o min\u00FAscula. Al menos un d\u00EDgito. Al menos un car\u00E1cter especial de los siguientes: @, $, !, %, *, #, ? o &. Debe tener una longitud m\u00EDnima de 8 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Confirma la nueva contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(formBuilder, route, router, matDialog, loginService, alertsService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.loginService = loginService;
        this.alertsService = alertsService;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
        this.tokenPassword = '';
    }
    ngOnInit() {
        // Formulario para la nueva contraseña
        this.authForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, this.validatePassword],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, this.checkPasswords],
        });
        // get return url from route parameters or default to '/'
        // Totma los parametros de nuestr URL
        this.tokenPassword = this.route.snapshot.paramMap.get('tokenPassword');
        // Verificamos en el Backend
        this.checkTokenPassword(this.tokenPassword);
    }
    // Metodo para checar el token 
    checkTokenPassword(token) {
        this.loginService.checkTokenPassword(token).subscribe(data => {
            console.log(data);
            if (!data.ok) {
                // Si no esta bien lo redirigimos al inicio de sesion
                this.alertsService.errorMessage('Token!', 'Token No valido');
                this.router.navigateByUrl('/auth/signin');
            }
        });
    }
    // Checa si la contraseña es igual o no -
    validatePassword(control) {
        const password = control.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return new Promise((resolve) => {
            if (passwordRegex.test(password)) {
                resolve(null);
            }
            else {
                resolve({ invalidPassword: true });
            }
        });
    }
    checkPasswords(control) {
        var _a;
        const password = (_a = control.root.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        const confirmPassword = control.value;
        console.log(password);
        console.log(confirmPassword);
        return new Promise((resolve) => {
            if (password === confirmPassword) {
                resolve(null);
            }
            else {
                resolve({ invalidPassword: true });
            }
        });
    }
    // checkPasswords(group: FormGroup) {
    //   let pass = group.get("password")?.value;
    //   let confirmPass = group.get("cpassword")?.value;
    //   return pass === confirmPass ? null : { notSame: true };
    // }
    get f() {
        return this.authForm.controls;
    }
    // Enviamos la nueva contraseña
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.valid) {
            // Enviamos la peticion al back 
            this.loginService.newPassword(this.tokenPassword, this.authForm.value).subscribe(data => {
                if (data) {
                    this.alertsService.succesMessage('Felicidades', data.msg);
                    this.router.navigateByUrl('/auth/signin');
                }
            });
            // this.openDialog()
        }
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_1__.AlertsService)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 41, vars: 10, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section", "text"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text-center"], [1, "auth-signup-text", "text-muted"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], [1, "row", "mt-3"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/auth/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cambiar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Para poder recuperar la contrase\u00F1a, es necesario agregar una nueva contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Nueva contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ChangePasswordComponent_mat_error_20_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ChangePasswordComponent_mat_error_21_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16)(23, "div", 11)(24, "mat-form-field", 12)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Confirma la nueva contrase\u00F1a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_28_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ChangePasswordComponent_mat_error_30_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ChangePasswordComponent_mat_error_31_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "div")(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20)(39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Cambiar contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("invalidPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("cpassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("invalidPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6241:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/confirm-account/confirm-account.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmAccountComponent": () => (/* binding */ ConfirmAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/login.service */ 9855);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/alerts.service */ 1092);




class ConfirmAccountComponent {
    constructor(route, loginService, router, alertsService) {
        this.route = route;
        this.loginService = loginService;
        this.router = router;
        this.alertsService = alertsService;
        this.tokenValidacion = "";
    }
    ngOnInit() {
        this.checkTokenEmail();
    }
    // Checa si el token esta correctamente bien
    checkTokenEmail() {
        // Obtenemos el parametro
        this.tokenValidacion = this.route.snapshot.paramMap.get('emailVerified');
        console.log("Token" + this.tokenValidacion);
        // Verificamos en el back
        this.loginService.confirmEmail(this.tokenValidacion).subscribe(data => {
            console.log(data);
            if (!data.ok) {
                this.alertsService.errorMessage('Token', 'Token no Valido');
            }
            this.router.navigateByUrl('/auth/signin');
            if (data.ok) {
                this.alertsService.succesMessage('Tu cuenta ha sido confirmada!', 'Ya puedes iniciar sesión');
            }
            this.router.navigateByUrl('/auth/signin');
        });
    }
}
ConfirmAccountComponent.ɵfac = function ConfirmAccountComponent_Factory(t) { return new (t || ConfirmAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_1__.AlertsService)); };
ConfirmAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfirmAccountComponent, selectors: [["app-confirm-account"]], decls: 0, vars: 0, template: function ConfirmAccountComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4001:
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth/recover-password/recover-password.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPasswordComponent": () => (/* binding */ RecoverPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/login.service */ 9855);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/alerts.service */ 1092);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











function RecoverPasswordComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Porfavor ingresa el correo electronico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RecoverPasswordComponent {
    constructor(formBuilder, route, router, loginService, alertsService, matDialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.alertsService = alertsService;
        this.matDialog = matDialog;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)],
            ],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }
    checkPasswords(group) {
        var _a, _b;
        let pass = (_a = group.get("password")) === null || _a === void 0 ? void 0 : _a.value;
        let confirmPass = (_b = group.get("cpassword")) === null || _b === void 0 ? void 0 : _b.value;
        return pass === confirmPass ? null : { notSame: true };
    }
    get f() {
        return this.authForm.controls;
    }
    // Enviamos la petición al backend para que nos envie el correo
    onSubmit() {
        this.loginService.forgetPassword(this.authForm.value).subscribe(data => {
            if (data.ok) {
                this.alertsService.succesMessage('', data.msg);
            }
            if (!data.ok) {
                this.alertsService.warningMessage(data.msg);
            }
        });
        // this.submitted = true;
        // // stop here if form is invalid
        // if (this.authForm.valid) {
        //   this.openDialog();
        // }
        // onSubmit() {
        //   this.submitted = true;
        //   // stop here if form is invalid
        //   if (this.authForm.valid) {
        //   }
        // }
    }
}
RecoverPasswordComponent.ɵfac = function RecoverPasswordComponent_Factory(t) { return new (t || RecoverPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_1__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
RecoverPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecoverPasswordComponent, selectors: [["app-recover-password"]], decls: 28, vars: 3, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section", "text"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text-center"], [1, "auth-signup-text", "text-muted", "text", "text-Justified"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/auth/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"]], template: function RecoverPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Recuperar contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Agrega el email para enviarte un c\u00F3digo para recuperar tu contrase\u00F1a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RecoverPasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RecoverPasswordComponent_mat_error_18_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15)(20, "div")(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Enviar Correo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4772:
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/signin/signin.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _dialogs_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/dialog-signin/dialog-signin.component */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/login.service */ 9855);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/alerts.service */ 1092);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);














function SigninComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Por favor, introduce una direcci\u00F3n de correo electr\u00F3nico v\u00E1lida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a es obligatoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SigninComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.error);
} }
class SigninComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(formBuilder, matDialog, router, loginService, alertsService) {
        super();
        this.formBuilder = formBuilder;
        this.matDialog = matDialog;
        this.router = router;
        this.loginService = loginService;
        this.alertsService = alertsService;
        this.submitted = false;
        this.loading = false;
        this.error = "";
        this.hide = true;
        this.emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.emailPattern)]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    get f() {
        return this.authForm.controls;
    }
    // adminSet() {
    //   this.authForm.get("username").setValue("admin@software.com");
    //   this.authForm.get("password").setValue("admin@123");
    // }
    // employeeSet() {
    //   this.authForm.get("username").setValue("employee@software.com");
    //   this.authForm.get("password").setValue("employee@123");
    // }
    // clientSet() {
    //   this.authForm.get("username").setValue("client@software.com");
    //   this.authForm.get("password").setValue("client@123");
    // }
    onSubmit() {
        // Estas variables son para que se muestre el spiner
        this.submitted = true;
        this.loading = true;
        // Nos comunicamos con el backend
        this.loginService.login(this.authForm.value.email, this.authForm.value.password).subscribe(data => {
            if (!data.ok) {
                this.alertsService.warningMessage(data.msg);
                this.loading = false;
                return;
            }
            if (data.ok) {
                this.alertsService.succesMessage('El código de verificación se envio a tu correo!', data.msg);
                this.loading = false;
                this.openDialogC();
            }
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
        // this.openDialogC()  
        // this.submitted = true;
        // this.loading = true;
        // this.openDialogC()
        // this.loading = false;
    }
    //Open dialogo de code signin
    openDialogC() {
        const dialogConfig = {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog',
        };
        dialogConfig.disableClose = true;
        dialogConfig.data = this.authForm.value;
        // Example usage
        this.matDialog.open(_dialogs_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_1__.DialogSigninComponent, dialogConfig);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_3__.AlertsService)); };
SigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 12, consts: [[1, "auth-container", "text"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text", "text-center"], [1, "auth-signup-text", "text-muted"], ["routerLink", "/auth/signup", 1, "sign-up-link"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "email"], [4, "ngIf"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "password", 3, "type"], ["href", "#", "onClick", "return false;", "matSuffix", "", 1, "show-pwd-icon", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "form-check"], ["routerLink", "/auth/recover-pass", 1, "txt1"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "container-auth-form-btn"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Iniciar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00BFNecesita una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "mat-form-field", 13)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SigninComponent_mat_error_20_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11)(22, "div", 16)(23, "mat-form-field", 13)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_27_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SigninComponent_mat_error_30_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u00BFHas olvidado tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SigninComponent_div_35_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("auth-spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading)("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7071:
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_errores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/errores.service */ 4941);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);













function SignupComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El nombre del usuario es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Por favor, introduce una direcci\u00F3n de correo electr\u00F3nico v\u00E1lida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La contrase\u00F1a es requeridad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La contrase\u00F1a debe cumplir con los siguientes requisitos: Al menos una letra may\u00FAscula o min\u00FAscula. Al menos un d\u00EDgito. Al menos un car\u00E1cter especial de los siguientes: @, $, !, %, *, #, ? o &. Debe tener una longitud m\u00EDnima de 8 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Confirmar contrase\u00F1a es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(formBuilder, route, router, matDialog, servSignup, erres) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.servSignup = servSignup;
        this.erres = erres;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
        this.emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    }
    ngOnInit() {
        // Funcion que permite esta evaluando los campos en tiempo real
        this.authForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.emailPattern),],
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.validatePassword,],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.checkPasswords],
        });
        // get return url from route parameters or default to '/'
    }
    // Metodo que nos permite saber si a contraseña cumpre con las politicas 
    validatePassword(control) {
        const password = control.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return new Promise((resolve) => {
            if (passwordRegex.test(password)) {
                resolve(null);
            }
            else {
                resolve({ invalidPassword: true });
            }
        });
    }
    // Metodo que nos ayuda a saber si las contraseñas coinseiden 
    checkPasswords(control) {
        var _a;
        const password = (_a = control.root.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        const confirmPassword = control.value;
        return new Promise((resolve) => {
            if (password === confirmPassword) {
                resolve(null);
            }
            else {
                resolve({ invalidPassword: true });
            }
        });
    }
    // Metodo que se llama al dar clic de crear usuario
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.valid) {
            const newUser = this.getFormData();
            console.log(newUser);
            this.servSignup.createUser(newUser).subscribe(data => {
                if (data.ok) {
                    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('', data.msg, 'success');
                }
                else {
                    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('', data.msg, 'error');
                }
            });
        }
    }
    // Metodo que nos permite optener los datos del formulario y los retorna en un objeto User
    getFormData() {
        var _a, _b, _c;
        const username = (_a = this.authForm.get('username')) === null || _a === void 0 ? void 0 : _a.value;
        const e_mail = (_b = this.authForm.get('email')) === null || _b === void 0 ? void 0 : _b.value;
        const password = (_c = this.authForm.get('password')) === null || _c === void 0 ? void 0 : _c.value;
        const newUser = {
            name: username,
            email: e_mail,
            password: password,
        };
        return newUser;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_errores_service__WEBPACK_IMPORTED_MODULE_2__.ErroresService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 55, vars: 12, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section", "text"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text-center"], [1, "auth-signup-text", "text-muted"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", "", "maxlength", "50"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", "", "maxlength", "50"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [1, "row", "mt-3"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/auth/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Inscripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " llenar todo el formulario para realisar tu inscripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Nombre del usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SignupComponent_mat_error_18_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "mat-form-field", 12)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SignupComponent_mat_error_25_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "mat-form-field", 12)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_mat_icon_click_32_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SignupComponent_mat_error_34_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SignupComponent_mat_error_35_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 18)(37, "div", 11)(38, "mat-form-field", 12)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Confirma tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_mat_icon_click_42_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, SignupComponent_mat_error_44_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, SignupComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 20)(47, "div")(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 22)(53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("invalidPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("cpassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("invalidPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4334:
/*!************************************************************************!*\
  !*** ./src/app/pages/dialogs/dialog-signin/dialog-signin.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogSigninComponent": () => (/* binding */ DialogSigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/alerts.service */ 1092);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);











class DialogSigninComponent {
    constructor(data, dialogRef, formBuilder, router, alertsService, loginService, matDialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertsService = alertsService;
        this.loginService = loginService;
        this.matDialogRef = matDialogRef;
        this.errorInput = false;
        this.textErrorCode = "";
    }
    ngOnInit() {
        console.log(this.data);
        // Formulario de 8 caracteres para nuestro token de 8 caracteres 
        this.codeAuthForm = this.formBuilder.group({
            code1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code5: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code6: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code7: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            code8: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        //Se difinen los campos del formulario y sus restricciones.
        this.codeAuthForm = this.formBuilder.group({
            code1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]],
        });
        //Funcion para validar si se cumple la condiciones del formulario
        this.codeAuthForm.valueChanges.subscribe(() => {
            this.checkFormCompletion();
        });
    }
    //Metodo que nos permite evaluar y dirigir si se cumple el formulario
    checkFormCompletion() {
        if (this.codeAuthForm.valid) {
            // Obtenemos cada caracter del modal
            const { code1, code2, code3, code4, code5, code6, code7, code8 } = this.codeAuthForm.value;
            // Contruimos el token
            const token = `${code1}`;
            console.log(token);
            const checkSendToken = {
                email: this.data.email,
                multi_factor_authentication: token
            };
            // Lo enviemos al backend
            this.loginService.doubleAuthentication(checkSendToken).subscribe(data => {
                if (!data.ok) {
                    this.alertsService.warningMessage(data.msg);
                    return;
                }
                if (data.ok) {
                    // Si esta bien cerramos el modal y lo redirigimos al login
                    this.closeDialog();
                    this.router.navigateByUrl("/home");
                    this.errorInput = false;
                    this.textErrorCode = "";
                }
            });
        }
        else {
            // Mandamos el mensaje de que debe ingresar los 8 caracteres
            this.errorInput = true;
            this.textErrorCode = "Agrega los 8 dígitos del código ";
        }
    }
    //Metodo para cerrar este dialog
    closeDialog() {
        this.matDialogRef.close();
    }
    handlePaste(event) {
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData.getData("text");
        // Verificar si el texto pegado solo contiene números    
        if (/^\d+$/.test(pastedText) && pastedText.length === 7) {
            // Rellenar los campos del formulario
            this.codeAuthForm.patchValue({
                code1: pastedText.charAt(0),
                code2: pastedText.charAt(1),
                code3: pastedText.charAt(2),
                code4: pastedText.charAt(3),
                code5: pastedText.charAt(4),
                code6: pastedText.charAt(5),
                code7: pastedText.charAt(6),
                code8: pastedText.charAt(7),
            });
        }
    }
    handleInput(currentInput, nextInput) {
        const inputValue = currentInput.value;
        if (inputValue.length === 1 && nextInput) {
            nextInput.focus();
        }
    }
    handleBackspace(event, prevInput, currentInput) {
        if (currentInput.value === "") {
            event.preventDefault();
            if (prevInput) {
                prevInput.focus();
            }
        }
    }
    //Balida el campo que cumpla con las restricciones
    requerido(id) {
        if (this.errorInput) {
            const control = this.codeAuthForm.get(id);
            const hasValue = control && control.value !== null && control.value !== "";
            if (hasValue) {
                const hasRequiredError = control === null || control === void 0 ? void 0 : control.hasError("required");
                const hasPatternError = (control === null || control === void 0 ? void 0 : control.value.length) !== 8;
                return !hasRequiredError && !hasPatternError;
            }
        }
        return true;
    }
}
DialogSigninComponent.ɵfac = function DialogSigninComponent_Factory(t) { return new (t || DialogSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_0__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
DialogSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DialogSigninComponent, selectors: [["app-dialog-signin"]], decls: 17, vars: 3, consts: [[1, "text", 2, "background-color", "white"], [1, "contenedor"], ["mat-mini-fab", "", "color", "secondary", 1, "elemento", 3, "click"], [1, "text-center", "text"], [3, "formGroup"], [1, "row", "align-items-center", "contenInputCode"], [1, "col"], ["type", "text", "formControlName", "code1", "maxlength", "8", 3, "ngClass"], [1, "menssageError"], [1, "text-Justified", "mt-3"]], template: function DialogSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "body", 0)(3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DialogSigninComponent_Template_button_click_4_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "C\u00F3digo de acceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 4)(10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Ingresa el codigo enviado a tu correo electronico para acceder a tus redes sociales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.codeAuthForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.requerido("code1") ? "inputSucetfull" : "inputError");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.textErrorCode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass], styles: [".contenInputCode[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n  margin: 20px;\n}\n\n.inputSucetfull[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  text-align: center;\n  border-radius: 10px;\n  border: 2pt solid #0071bc;\n  border-radius: 5px;\n  font-size: 50pt;\n}\n\n.contenedor[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.inputError[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  text-align: center;\n  border-radius: 10px;\n  border: 2pt solid red;\n  border-radius: 5px;\n  font-size: 50pt;\n}\n\n.menssageError[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0YiLCJmaWxlIjoiZGlhbG9nLXNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5JbnB1dENvZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dFN1Y2V0ZnVsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB0IHNvbGlkICMwMDcxYmM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogNTBwdDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmVsZW1lbnRvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLmlucHV0RXJyb3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDJwdCBzb2xpZCByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogNTBwdDtcclxufVxyXG4ubWVuc3NhZ2VFcnJvcntcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 9399:
/*!*********************************************************************!*\
  !*** ./src/app/pages/facebook/create-post/create-post.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePostComponent": () => (/* binding */ CreatePostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-input-file */ 9618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











class CreatePostComponent {
    constructor(fb, publicacioneServices, loginService, alertsService, dialogRef) {
        this.fb = fb;
        this.publicacioneServices = publicacioneServices;
        this.loginService = loginService;
        this.alertsService = alertsService;
        this.dialogRef = dialogRef;
        this.postForm = this.fb.group({
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]],
            multipartFile: [""],
        });
    }
    ngOnInit() {
        this.idUser = this.loginService.decodeToken();
    }
    onSubmit() {
        console.log(this.postForm.get('description').valid);
        if (!this.postForm.get('description').valid) {
            this.alertsService.errorMessage("", "La descripción es requerida");
        }
        if (this.postForm.valid) {
            //Datos del formulario
            const postFile = this.postForm.value;
            console.log(postFile);
            //Se crea un objeto de tipo File para manejar la imagen
            let imagenFile = new File([], "");
            //Se valida que la imgane se haya subido al input en caso de que no se pone como null
            if (postFile.multipartFile != "") {
                imagenFile = postFile.multipartFile[0].file;
            }
            else {
                imagenFile = null;
            }
            // Crear instancia de FormData y agregar propiedades del publicacion a enviar
            const formData = new FormData();
            formData.append("description", postFile.description);
            //SE valida si la imagen existe
            if (imagenFile != null) {
                formData.append("multipartFile", imagenFile);
            }
            formData.append("user", this.idUser.toString());
            //Se envia 0 indicando que es una publicacion de bookface
            this.publicacioneServices.createPost(formData, 0).subscribe({
                next: (data) => {
                    this.alertsService.succesMessage("Publicación", data.message);
                    this.dialogRef.close();
                },
            });
        }
    }
    close() {
        this.dialogRef.close();
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_0__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef)); };
CreatePostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 24, vars: 1, consts: [[1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "\u00BFQue estas pensando?", "formControlName", "description", "maxlength", "255"], [1, "input-file-container"], [1, "mt-1"], [1, "uppercase", "fw-500"], ["formControlName", "multipartFile", "fileLimit", "1", "fileAccept", "image/*"], ["mat-raised-button", "", "color", "primary", 1, "btn-space"], ["type", "button", "mat-button", "", 3, "click"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Crear publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CreatePostComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "mat-form-field", 6)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4)(13, "div", 8)(14, "p", 9)(15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Agregar imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input-file", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 4)(19, "div", 5)(20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_22_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.postForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, ngx_input_file__WEBPACK_IMPORTED_MODULE_8__.InputFileComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3803:
/*!***********************************************************************!*\
  !*** ./src/app/pages/facebook/edit-my-post/edit-my-post.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditMyPostComponent": () => (/* binding */ EditMyPostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);











class EditMyPostComponent {
    constructor(data, fb, publicacioneServices, loginService, alertsService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.publicacioneServices = publicacioneServices;
        this.loginService = loginService;
        this.alertsService = alertsService;
        this.dialogRef = dialogRef;
        this.postForm = this.fb.group({
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            idPost: [""]
        });
    }
    ngOnInit() {
        this.agregarDta();
    }
    //Nos permite optener los datos del post
    agregarDta() {
        this.publicacioneServices.findByIdPost(this.data).subscribe({ next: data => {
                const dataAnte = {
                    description: data.data.description,
                    idPost: data.data.idPost
                };
                this.postForm.patchValue(dataAnte);
            } });
    }
    onSubmit() {
        const dataNew = this.postForm.value;
        //Se envia 0 indicando que es una publicacion de bookface
        this.publicacioneServices.updatePost(0, dataNew).subscribe({
            next: (data) => {
                console.log(data);
                this.alertsService.succesMessage("Publicación", data.message);
                this.dialogRef.close();
            },
        });
    }
    //cerrar este dialog
    close() {
        this.dialogRef.close();
    }
}
EditMyPostComponent.ɵfac = function EditMyPostComponent_Factory(t) { return new (t || EditMyPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_0__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef)); };
EditMyPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditMyPostComponent, selectors: [["app-edit-my-post"]], decls: 18, vars: 1, consts: [[1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "\u00BFQue estas pensando?", "formControlName", "description", "maxlength", "255"], ["mat-raised-button", "", "color", "primary", 1, "btn-space"], ["type", "button", "mat-button", "", 3, "click"]], template: function EditMyPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Editar publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditMyPostComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "mat-form-field", 6)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditMyPostComponent_Template_button_click_16_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.postForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW15LXBvc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8137:
/*!***********************************************************!*\
  !*** ./src/app/pages/facebook/facebook-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookRoutingModule": () => (/* binding */ FacebookRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications/publications.component */ 9479);
/* harmony import */ var _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-publications/my-publications.component */ 2651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: "", redirectTo: "public", pathMatch: "full" },
    { path: "public", component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_0__.PublicationsComponent },
    { path: "myposts", component: _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_1__.MyPublicationsComponent }
];
class FacebookRoutingModule {
}
FacebookRoutingModule.ɵfac = function FacebookRoutingModule_Factory(t) { return new (t || FacebookRoutingModule)(); };
FacebookRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FacebookRoutingModule });
FacebookRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FacebookRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3898:
/*!******************************************************!*\
  !*** ./src/app/pages/facebook/facebook.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookComponent": () => (/* binding */ FacebookComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 9906);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class FacebookComponent {
    constructor() { }
    ngOnInit() {
    }
}
FacebookComponent.ɵfac = function FacebookComponent_Factory(t) { return new (t || FacebookComponent)(); };
FacebookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FacebookComponent, selectors: [["app-facebook"]], decls: 2, vars: 0, template: function FacebookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWNlYm9vay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8181:
/*!***************************************************!*\
  !*** ./src/app/pages/facebook/facebook.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookModule": () => (/* binding */ FacebookModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _facebook_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook-routing.module */ 8137);
/* harmony import */ var _facebook_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facebook.component */ 3898);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 9906);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publications/publications.component */ 9479);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-post/create-post.component */ 9399);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-input-file */ 9618);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _publications_comments_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publications/comments/comments.component */ 9858);
/* harmony import */ var _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-publications/my-publications.component */ 2651);
/* harmony import */ var _edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-my-post/edit-my-post.component */ 3803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);






























class FacebookModule {
}
FacebookModule.ɵfac = function FacebookModule_Factory(t) { return new (t || FacebookModule)(); };
FacebookModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FacebookModule });
FacebookModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _facebook_routing_module__WEBPACK_IMPORTED_MODULE_0__.FacebookRoutingModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatPseudoCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_27__.InputFileModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FacebookModule, { declarations: [_facebook_component__WEBPACK_IMPORTED_MODULE_1__.FacebookComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _publications_publications_component__WEBPACK_IMPORTED_MODULE_3__.PublicationsComponent,
        _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_4__.CreatePostComponent,
        _publications_comments_comments_component__WEBPACK_IMPORTED_MODULE_5__.CommentsComponent,
        _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_6__.MyPublicationsComponent,
        _edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_7__.EditMyPostComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _facebook_routing_module__WEBPACK_IMPORTED_MODULE_0__.FacebookRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatPseudoCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
        ngx_input_file__WEBPACK_IMPORTED_MODULE_27__.InputFileModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule], exports: [_facebook_component__WEBPACK_IMPORTED_MODULE_1__.FacebookComponent] }); })();


/***/ }),

/***/ 9906:
/*!***********************************************************!*\
  !*** ./src/app/pages/facebook/header/header.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 0, vars: 0, template: function HeaderComponent_Template(rf, ctx) { }, styles: [".Opciones[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(41, 41, 246, 0.751);\n  margin-right: 20px;\n}\n\n.navbarHeader[_ngcontent-%COMP%] {\n  min-height: calc(0vh - 76px) !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.inB[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3BjaW9uZXN7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiYSg0MSwgNDEsIDI0NiwgMC43NTEpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFySGVhZGVye1xyXG4gICAgbWluLWhlaWdodDogY2FsYygwdmggLSA3NnB4KSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluQntcclxuICAgIHdpZHRoOiA0MDBweFxyXG59Il19 */"] });


/***/ }),

/***/ 2651:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/facebook/my-publications/my-publications.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPublicationsComponent": () => (/* binding */ MyPublicationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/utils */ 4750);
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-post/create-post.component */ 9399);
/* harmony import */ var _publications_comments_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../publications/comments/comments.component */ 9858);
/* harmony import */ var _edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-my-post/edit-my-post.component */ 3803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);


















function MyPublicationsComponent_mat_card_21_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", post_r2.multimedia, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "liked": a0 }; };
function MyPublicationsComponent_mat_card_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 16)(1, "div", 17)(2, "button", 18)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-menu", 19, 20)(7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyPublicationsComponent_mat_card_21_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const post_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.editPost(post_r2.idPost); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyPublicationsComponent_mat_card_21_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const post_r2 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.deletePost(post_r2.idPost); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-card-content")(25, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, MyPublicationsComponent_mat_card_21_img_27_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-card-actions")(29, "button", 25)(30, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "thumb_up_off_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " LIKE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyPublicationsComponent_mat_card_21_Template_button_click_33_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const post_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.goComments(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "chat_bubble_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Comentarios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@pageTransition", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-image:url('", post_r2.user.avatar, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", post_r2.user.name, " ", post_r2.user.fatherLastName, " ", post_r2.user.motherLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](23, 13, post_r2.dateRegistration, "dd-MMMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", post_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", post_r2.multimedia && ctx_r0.validaUrl(post_r2.multimedia));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c0, post_r2.liked));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matBadge", post_r2.numLike);
} }
function MyPublicationsComponent_mat_spinner_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner");
} }
class MyPublicationsComponent {
    constructor(postService, dialog, authService, alertsService) {
        this.postService = postService;
        this.dialog = dialog;
        this.authService = authService;
        this.alertsService = alertsService;
        this.seeComments = true;
        this.subComments = true;
        this.pageSize = 5; // Tamaño de página
        this.currentPage = 0; // Página actual
        this.lengthPost = 0;
        this.postLiked = false;
        //Srcoll
        this.loading = false;
        this.cargando = false;
        this.posts = [];
        this.scrollPosition = 0;
    }
    ngOnInit() {
        // this.getAllPost();
        // this.getAllPostPage(this.currentPage, this.pageSize);
        this.getAllPostPage();
    }
    ngAfterViewInit() {
        this.uId();
    }
    getAllPost() {
        this.postService.findAllPost().subscribe({
            next: (data) => {
                this.posts = data.list;
                // this.updatePagedPosts();
                // console.log(data);
            },
        });
    }
    getAllPostPage() {
        // console.log(page, size)
        this.postService.findByUserPost(1).subscribe({
            next: (data) => {
                this.posts = data.list; // Concatenar los nuevos posts al final del array existente
                this.cargando = false;
                //console.log(data);
            },
        });
    }
    deletePost(id) {
        this.postService.deletePost(id).subscribe({
            next: (data) => {
                this.alertsService.succesMessage("", data.message);
                this.getAllPostPage();
            },
            error: (data) => {
                this.alertsService.errorMessage('', data.message);
            }
        });
    }
    editPost(id) {
        const modalRef = this.dialog.open(_edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_3__.EditMyPostComponent, {
            data: id,
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-create-post",
        });
        modalRef.afterClosed().subscribe((result) => {
            //Se cerro el dialog
            this.getAllPostPage();
        });
    }
    onScroll() {
        const scrollContainer = document.querySelector(".scrollClass");
        const windowHeight = "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.offsetHeight;
        const containerHeight = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.clientHeight) || 0;
        const containerScrollHeight = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollHeight) || 0;
        const containerScrollTop = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollTop) || 0;
        const windowBottom = windowHeight + containerScrollTop;
        if (windowBottom >= containerScrollHeight - 1 &&
            containerScrollTop > this.scrollPosition) {
            //Agregando animacion de scroll
            this.scrollPosition = containerScrollTop;
            clearTimeout(this.loadPostsTimeout);
            this.loadPostsTimeout = setTimeout(() => { }, 400); // Esperar 200 ms antes de cargar más posts
        }
    }
    activateComments() {
        this.seeComments = !this.seeComments;
    }
    activateSubComments() {
        this.subComments = !this.subComments;
    }
    toggleLike(row) {
        // console.log(row)
        if (row.liked) {
            // console.log("Restando likes");
            this.postLiked = false;
            row.liked = false;
            row.numLike--;
            this.subtractLike(row.idPost);
        }
        else {
            this.postLiked = true;
            row.numLike++;
            row.liked = true;
            // console.log("Sumando like");
            this.sumLike(row.idPost);
        }
    }
    subtractLike(id) {
        this.postService.subtractLike(id).subscribe({
            next: (data) => {
                // console.log(data);
            },
        });
    }
    sumLike(id) {
        this.postService.sumLike(id).subscribe({
            next: (data) => {
                // console.log(data);
            },
        });
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        // console.log(event)
    }
    createPost() {
        const modalRef = this.dialog.open(_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__.CreatePostComponent, {
            // width: '1000px',nent
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-create-post",
        });
        modalRef.afterClosed().subscribe((result) => {
            //Se cerro el dialog
            this.getAllPostPage();
        });
    }
    validaUrl(url) {
        return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isValidUrl(url);
    }
    goComments(post) {
        const dialogConfig = {
            data: post,
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-coments",
        };
        dialogConfig.disableClose = true;
        const modalRef = this.dialog.open(_publications_comments_comments_component__WEBPACK_IMPORTED_MODULE_2__.CommentsComponent, dialogConfig);
    }
    //optener los datos del usuario desde el token
    uId() {
        const uid = this.authService.decodeToken();
        this.authService.findById(uid).subscribe((data) => {
            this.data = data.data;
        });
    }
}
MyPublicationsComponent.ɵfac = function MyPublicationsComponent_Factory(t) { return new (t || MyPublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_4__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_6__.AlertsService)); };
MyPublicationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MyPublicationsComponent, selectors: [["app-my-publications"]], viewQuery: function MyPublicationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 25, vars: 3, consts: [[1, "content-block"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-9", "col-xs-9"], [1, "card"], [1, "body"], [1, "wrapper"], [1, "main"], [1, "col-md-3"], [1, "example-card", "actions"], [1, "ms-4", 2, "color", "blue"], ["mat-button", "", 3, "click"], ["mat-button", "", "routerLink", "/home/bookface"], [1, "col-md-6", "scrollClass", 3, "scroll"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "col", "spinner"], [4, "ngIf"], [1, "example-card"], [1, "derecha"], ["mat-icon-button", "", "color", "link", 3, "matMenuTriggerFor"], [1, ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "postText"], ["mat-card-image", "", "m-1", "", "class", "imagenPost", "alt", "No se puede visualizar la imagen", 3, "src", 4, "ngIf"], ["mat-button", "", "color", "primary", "disabled", "", 3, "ngClass"], [3, "matBadge"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", "m-1", "", "alt", "No se puede visualizar la imagen", 1, "imagenPost", 3, "src"]], template: function MyPublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "main", 6)(7, "div", 1)(8, "div", 7)(9, "mat-card", 8)(10, "mat-card-header")(11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Mis publicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-card-actions")(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyPublicationsComponent_Template_button_click_16_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Crear publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Ver publicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function MyPublicationsComponent_Template_div_scroll_20_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, MyPublicationsComponent_mat_card_21_Template, 37, 18, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, MyPublicationsComponent_mat_spinner_23_Template, 1, 0, "mat-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardImage, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__.MatBadge, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: ["@charset \"UTF-8\";\n.card[_ngcontent-%COMP%] {\n  background-color: #ecf0f4;\n  height: 100%;\n}\n.example-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-bottom: 30px;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n.postText[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n.liked[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n}\n.imagenPost[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin: 10px 2px;\n  max-width: 100%;\n  \n  height: auto;\n  object-fit: contain;\n}\n.scrollClass[_ngcontent-%COMP%] {\n  height: 85.2vh;\n  max-width: 100%;\n  overflow: auto;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n}\n.derecha[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFFSjtBQUlFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBREo7QUFNRTtFQUNFLHNCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0FBSEo7QUFNRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUFpQiwrREFBQTtFQUNqQixZQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBRko7QUFNRTtFQUNFLFlBQUE7QUFISiIsImZpbGUiOiJteS1wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBvc3RUZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5saWtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltYWdlblBvc3Qge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIG3DoXhpbW8gZGUgbGEgaW1hZ2VuIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc2Nyb2xsQ2xhc3Mge1xuICBoZWlnaHQ6IDg1LjJ2aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVyZWNoYSB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"] });


/***/ }),

/***/ 9858:
/*!****************************************************************************!*\
  !*** ./src/app/pages/facebook/publications/comments/comments.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_models_commentDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/commentDTO */ 7552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../service/comments.service */ 7809);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/alerts.service */ 1092);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/login.service */ 9855);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var src_app_models_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/post.model */ 5806);

















function CommentsComponent_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No hay comentario, se el primero en comentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommentsComponent_mat_card_12_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_12_div_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.toggleEditMode(comment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function CommentsComponent_mat_card_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "button", 35)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "mat-menu", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CommentsComponent_mat_card_12_div_1_button_7_Template, 5, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_12_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.deleteComment(comment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.i === ctx_r5.i);
} }
function CommentsComponent_mat_card_12_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r4.descripcion, " ");
} }
function CommentsComponent_mat_card_12_ng_template_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_12_ng_template_11_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.removeImage(comment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", comment_r4.multimedia, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CommentsComponent_mat_card_12_ng_template_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label", 21)(2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "add_a_photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CommentsComponent_mat_card_12_ng_template_11_div_6_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.uploadImageEditComment($event, comment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function CommentsComponent_mat_card_12_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CommentsComponent_mat_card_12_ng_template_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r28.editedDescription = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CommentsComponent_mat_card_12_ng_template_11_div_2_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 13)(4, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CommentsComponent_mat_card_12_ng_template_11_div_6_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_12_ng_template_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r30.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_12_ng_template_11_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.updateComment(comment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.editedDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r4.multimedia);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r8.mostrarImagen2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(comment_r4 == null ? null : comment_r4.multimedia));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r8.editedDescription.length === 0);
} }
function CommentsComponent_mat_card_12_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 46);
} if (rf & 2) {
    const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", comment_r4 == null ? null : comment_r4.multimedia, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { liked: a0 }; };
function CommentsComponent_mat_card_12_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommentsComponent_mat_card_12_div_1_Template, 13, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CommentsComponent_mat_card_12_ng_container_10_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CommentsComponent_mat_card_12_ng_template_11_Template, 12, 5, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CommentsComponent_mat_card_12_img_14_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-card-actions")(16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_12_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const comment_r4 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.toggleLikeComment(comment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "thumb_up_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r4 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r4.user.idUser == ctx_r1.user.id_user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(" + comment_r4.user.avatar + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", comment_r4.user.name, " ", comment_r4.user.fatherLastName, " ", comment_r4.user.motherLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r4.user.dateRegistration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r4 !== ctx_r1.commentEdit)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r4.multimedia && !ctx_r1.editingMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r1.commentLikedMap[comment_r4.id]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Like ", comment_r4.numLike, " ");
} }
function CommentsComponent_figure_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.mostrarImagen, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CommentsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.deleteImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
class CommentsComponent {
    constructor(data, dialogRef, commentsService, alertsService, loginService, formBuilder, elementRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.commentsService = commentsService;
        this.alertsService = alertsService;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.comments = [];
        this.commentLikedMap = {};
        this.commentLiked = false;
        this.postLiked = false;
        this.editableComment = null;
        // Edit Comment
        this.editingMode = false;
        this.editedDescription = '';
        this.imageEdit = null;
        this.formComment = this.formBuilder.group({
            descripcion: [''],
            img: []
        });
        this.post = data;
    }
    // @HostListener('document:click', ['$event'])
    // onClickOutside(event: Event) {
    //   // Check if the click event occurred outside the component's element
    //   if (!this.elementRef.nativeElement.contains(event.target)) {
    //     // Cancel editing if the editing mode is active
    //     if (this.editingMode) {
    //       this.cancelEdit();
    //     }
    //   }
    // }
    ngOnInit() {
        this.findAllComments();
        this.getUser();
    }
    toggleLikeComment(comment) {
        const commentId = comment.idComment;
        if (this.commentLikedMap[commentId]) {
            console.log("Restando likes");
            // this.commentLiked=false;
            this.subtractLike(comment);
        }
        else {
            this.commentLikedMap[commentId] = true;
            // this.commentLiked=true;
            console.log("Sumando like");
            this.likeComment(comment);
        }
    }
    toggleLikePost() {
        if (this.postLiked) {
            console.log("Restando likes");
            this.postLiked = false;
            // this.subtractLike(comment);
        }
        else {
            this.postLiked = true;
            console.log("Sumando like");
            // this.likeComment(comment);
        }
    }
    toggleEditMode(commentM) {
        this.editingMode = true;
        this.commentEdit = this.comments.find(comment => comment.idComment === commentM.idComment);
        this.editedDescription = commentM.descripcion; // Initialize the edited description
    }
    cancelEdit() {
        // Cancel editing and revert back to read-only mode
        this.editingMode = false;
        this.editedDescription = '';
        this.findAllComments();
    }
    commentPost() {
    }
    findAllComments() {
        this.commentsService.findByPostComment(this.post.idPost).subscribe({
            next: (data) => {
                console.log(data);
                this.comments = data.list;
                console.log(this.comments);
                console.log(this.user);
            },
            error: (data) => {
                this.alertsService.errorMessage('', data.message);
            }
        });
    }
    getUser() {
        const id = this.loginService.decodeToken();
        this.loginService.findById(id).subscribe({
            next: (user) => {
                this.user = user.data;
                console.log(this.user);
            },
            error: (error) => {
                this.alertsService.errorMessage('Upps', 'Hubo un error insesperado');
            }
        });
    }
    cambiarImagen(file) {
        this.imageUpload = file;
        if (!file) {
            return this.imageTemp = null;
        }
        else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                this.imageTemp = reader.result;
            };
            return this.imageTemp;
        }
        // console.log(event)
        // this.fileUploadService.actualizarFoto()
    }
    removePlaceholderText() {
        const placeholder = document.getElementById('placeholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    }
    uploadImage(event) {
        const imagen = event.target.files[0];
        this.formComment.controls.img.setValue(imagen);
        console.log(event);
        const reader = new FileReader();
        // const control = this.formComment.controls.img;
        reader.onload = (ima) => {
            const base64img = reader.result + '';
            console.log(base64img);
            this.mostrarImagen = base64img;
            // control.setValue(base64img);
            // console.log(control.value)    
        };
        reader.readAsDataURL(imagen);
        event.srcElement.value = null;
    }
    uploadImageEditComment(event, comment) {
        const imagen = event.target.files[0];
        this.imageEdit = imagen;
        console.log(event);
        const reader = new FileReader();
        // const control = this.formComment.controls.img;
        reader.onload = (ima) => {
            const base64img = reader.result + '';
            console.log(base64img);
            this.mostrarImagen2 = base64img;
            // control.setValue(base64img);
            // console.log(control.value)    
        };
        reader.readAsDataURL(imagen);
        event.srcElement.value = null;
    }
    saveComment() {
        const comment = new src_app_models_commentDTO__WEBPACK_IMPORTED_MODULE_0__.CommentDTO();
        comment.multipartFile = this.formComment.controls.img.value;
        comment.post = this.post.idPost;
        comment.descripcion = this.formComment.controls.descripcion.value;
        comment.user = this.user.id_user;
        console.log(comment);
        this.commentsService.createComment(comment).subscribe({
            next: (data) => {
                this.alertsService.succesMessage('', data.message);
                this.findAllComments();
                this.limpiarComentario();
            },
            error: (data) => {
                // console.log(data)
                this.alertsService.errorMessage('', data.error.message);
            }
        });
    }
    limpiarComentario() {
        this.mostrarImagen = '';
        this.formComment.controls.img.setValue('');
        this.formComment.controls.descripcion.setValue('');
    }
    deleteImage() {
        this.mostrarImagen = null;
    }
    updateComment(comment) {
        console.log(comment);
        const newComment = new src_app_models_commentDTO__WEBPACK_IMPORTED_MODULE_0__.CommentDTO();
        newComment.descripcion = this.editedDescription;
        newComment.idComment = comment.idComment;
        console.log(this.imageEdit);
        this.imageEdit !== null ? newComment.multipartFile = this.imageEdit : newComment.multimedia = comment.multimedia;
        // newComment.multimedia = null
        console.log(this.imageEdit);
        newComment.numLike = comment.numLike;
        newComment.user = this.user.id_user;
        newComment.post = comment.post.idPost;
        console.log(newComment);
        this.commentsService.updateComment(newComment).subscribe({
            next: (data) => {
                this.alertsService.succesMessage('', data.message);
                this.findAllComments();
                this.editingMode = false;
                this.mostrarImagen2 = '';
            },
            error: (data) => {
                // console.log(data)
                this.alertsService.errorMessage('', data.error.message);
            }
        });
    }
    deleteComment(comment) {
        this.commentsService.deleteComment(comment.idComment).subscribe({
            next: (data) => {
                this.alertsService.succesMessage('', data.message);
                this.findAllComments();
            },
            error: (data) => {
                // console.log(data)
                this.alertsService.errorMessage('', data.error.message);
            }
        });
    }
    likeComment(comment) {
        this.commentsService.sumLike(comment.idComment).subscribe({
            next: (data) => {
                console.log(data);
                this.findAllComments();
            },
            error: (data) => {
                console.log(data);
            }
        });
    }
    subtractLike(comment) {
        this.commentsService.subtractLike(comment.idComment).subscribe({
            next: (data) => {
                console.log(data);
                this.findAllComments();
            },
            error: (data) => {
                console.log(data);
            }
        });
    }
    removeImage(comment) {
        comment.multimedia = null;
    }
    closeCommentDialog() {
        this.dialogRef.close();
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_comments_service__WEBPACK_IMPORTED_MODULE_1__.CommentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef)); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 35, vars: 11, consts: [[2, "width", "94%"], ["mat-dialog-title", ""], [1, "row", "text"], [1, "col", "justify-content-center", "d-flex", "align-items-center"], [1, "col-1", "text-end"], ["mat-mini-fab", "", "color", "link", 3, "click"], [1, "mat-typography", "text"], [1, "col-md-12", "col-lg-12", "col-xs-12"], [4, "ngIf"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-form", 3, "formGroup"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], ["mat-card-avatar", "", 1, "example-header-image", "col-1"], [1, "col"], ["appearance", "outline", 1, "inpCom"], ["matInput", "", "type", "text-area", "formControlName", "descripcion", "placeholder", "Escrive tu comentario", "rows", "3"], [1, "container"], [1, "row"], ["class", "col text-end", 4, "ngIf"], [1, "justify-content-end", "align-items-center", "d-flex"], ["mat-button", "", 3, "disabled", "click"], ["for", "upload", 1, "custom-file-upload"], ["for", "upload", 1, "icon"], ["id", "upload", "name", "upload", "type", "file", "accept", "image/png,image/jpeg,image/jpg", 3, "change"], [1, "example-card"], ["class", "derecha", 4, "ngIf"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "text1", "text-truncate"], [4, "ngIf", "ngIfElse"], ["editMode", ""], [1, "text-center"], ["style", "border-radius: 10pt", "mat-card-xl-image", "", 3, "src", 4, "ngIf"], ["mat-button", "", 3, "ngClass", "click"], [1, "col-blue"], [1, "derecha"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "col-red"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "proyection-image", 3, "src"], ["mat-button", "", 1, "derecha", 3, "click"], ["mat-button", "", "color", "primary", 1, "derecha", 3, "disabled", "click"], ["mat-card-xl-image", "", "alt", "Imagen del comentario", 3, "src"], ["mat-icon-button", "", "color", "warn", 1, "derecha", 3, "click"], ["mat-card-xl-image", "", 2, "border-radius", "10pt", 3, "src"], [1, "col", "text-end"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_6_listener() { return ctx.closeCommentDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-dialog-content", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CommentsComponent_h2_11_Template, 2, 0, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CommentsComponent_mat_card_12_Template, 21, 14, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-dialog-actions")(14, "form", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CommentsComponent_figure_23_Template, 2, 1, "figure", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CommentsComponent_div_25_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19)(27, "span")(28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_28_listener() { return ctx.saveComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 21)(32, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "add_a_photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CommentsComponent_Template_input_change_34_listener($event) { return ctx.uploadImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Publicaci\u00F3n de ", ctx.post.user.name, " ", ctx.post.user == null ? null : ctx.post.user.fatherLastName, " ", ctx.post.user == null ? null : ctx.post.user.motherLastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.comments.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(" + ctx.user.avatar + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mostrarImagen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mostrarImagen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.formComment.controls.img.value && !ctx.formComment.controls.descripcion.value);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardXlImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName], styles: ["@charset \"UTF-8\";\n.icono-gris[_ngcontent-%COMP%] {\n  background-color: #ADD8E6;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n.quitar-linea[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.custom-file-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n.proyection-image[_ngcontent-%COMP%] {\n  width: 200px;\n  object-fit: contain;\n}\n#placeholder[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #999;\n}\ninput[type=file][_ngcontent-%COMP%] {\n  \n  width: 0;\n  height: 0;\n  opacity: 0;\n  text-align: center;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.inpCom[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px;\n  margin-top: 10px;\n}\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: flex-end;\n}\n.grow1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.liked[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n  color: white;\n}\n.derecha[_ngcontent-%COMP%] {\n  float: right;\n}\n.text1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHlCQUFBO0FBRUo7QUFLQTtFQUNJLHNCQUFBO0FBRko7QUFNQTtFQUNJLHdDQUFBO0FBSEo7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBSko7QUFNQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSwwREFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0U7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLFNBQUE7RUFFQSx1QkFBQTtFQUNBLHFCQUFBO0FBSko7QUFPRTtFQUFTLFlBQUE7QUFIWDtBQUtFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLFlBQUE7QUFGSjtBQUlFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoiY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaWNvbm8tZ3JpcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBREQ4RTY7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5xdWl0YXItbGluZWEgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wcm95ZWN0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4jcGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgLyogRXN0YWJsZWNlciBlbCB0YW1hw7FvIGRlbCBpbnB1dCBlbiBjZXJvIHBhcmEgb2N1bHRhcmxvICovXG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmlucENvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxheW91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ncm93MSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmxpa2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVyZWNoYSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRleHQxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDkwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 9479:
/*!***********************************************************************!*\
  !*** ./src/app/pages/facebook/publications/publications.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationsComponent": () => (/* binding */ PublicationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-post/create-post.component */ 9399);
/* harmony import */ var src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/utils */ 4750);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments/comments.component */ 9858);
/* harmony import */ var _edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-my-post/edit-my-post.component */ 3803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);


















function PublicationsComponent_mat_card_21_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", post_r2.multimedia, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "liked": a0 }; };
function PublicationsComponent_mat_card_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 8)(1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-card-content")(9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, PublicationsComponent_mat_card_21_img_11_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-card-actions")(13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PublicationsComponent_mat_card_21_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const post_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.toggleLike(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "thumb_up_off_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " LIKE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PublicationsComponent_mat_card_21_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const post_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.goComments(post_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "chat_bubble_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Comentarios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@pageTransition", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-image:url('", post_r2.user.avatar, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", post_r2.user.name, " ", post_r2.user.fatherLastName, " ", post_r2.user.motherLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 12, post_r2.dateRegistration, "dd-MMMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", post_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", post_r2.multimedia && ctx_r0.validaUrl(post_r2.multimedia));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c0, post_r2.liked));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matBadge", post_r2.numLike);
} }
function PublicationsComponent_mat_spinner_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner");
} }
class PublicationsComponent {
    constructor(postService, dialog, authService, alertsService) {
        this.postService = postService;
        this.dialog = dialog;
        this.authService = authService;
        this.alertsService = alertsService;
        this.seeComments = true;
        this.subComments = true;
        this.pageSize = 5; // Tamaño de página
        this.currentPage = 0; // Página actual
        this.lengthPost = 0;
        this.postLiked = false;
        //Srcoll
        this.loading = false;
        this.cargando = false;
        this.posts = [];
        this.scrollPosition = 0;
    }
    ngOnInit() {
        // this.getAllPost();
        // this.getAllPostPage(this.currentPage, this.pageSize);
        this.loadMorePosts();
    }
    ngAfterViewInit() {
        this.uId();
    }
    getAllPost() {
        this.postService.findAllPost().subscribe({ next: data => {
                this.posts = data.list;
                // this.updatePagedPosts();
                console.log(data);
            } });
    }
    getAllPostPage(page, size) {
        console.log(page, size);
        this.postService.findAllPostPage(page, size).subscribe({ next: data => {
                this.lengthPost = data.count;
                this.posts = this.posts.concat(data.list); // Concatenar los nuevos posts al final del array existente
                this.cargando = false;
                console.log(data);
            } });
    }
    loadMorePosts() {
        if (!this.loading) {
            this.loading = true;
            this.getAllPostPage(this.currentPage, 5); // 5 posts por carga
            this.currentPage++; // Avanzamos al siguiente grupo de 5 posts
            this.loading = false;
        }
    }
    onScroll() {
        const scrollContainer = document.querySelector('.scrollClass');
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const containerHeight = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.clientHeight) || 0;
        const containerScrollHeight = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollHeight) || 0;
        const containerScrollTop = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollTop) || 0;
        const windowBottom = windowHeight + containerScrollTop;
        if (windowBottom >= containerScrollHeight - 1 && containerScrollTop > this.scrollPosition) {
            //Agregando animacion de scroll
            this.cargando = true;
            this.scrollPosition = containerScrollTop;
            clearTimeout(this.loadPostsTimeout);
            this.loadPostsTimeout = setTimeout(() => {
                this.loadMorePosts();
            }, 400); // Esperar 200 ms antes de cargar más posts
        }
    }
    activateComments() {
        this.seeComments = !this.seeComments;
    }
    activateSubComments() {
        this.subComments = !this.subComments;
    }
    toggleLike(row) {
        console.log(row);
        if (row.liked) {
            console.log("Restando likes");
            this.postLiked = false;
            row.liked = false;
            row.numLike--;
            this.subtractLike(row.idPost);
        }
        else {
            this.postLiked = true;
            row.numLike++;
            row.liked = true;
            console.log("Sumando like");
            this.sumLike(row.idPost);
        }
    }
    subtractLike(id) {
        this.postService.subtractLike(id).subscribe({ next: data => {
                console.log(data);
            } });
    }
    sumLike(id) {
        this.postService.sumLike(id).subscribe({ next: data => {
                console.log(data);
            } });
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        console.log(event);
        this.getAllPostPage(event.pageIndex, event.pageSize);
    }
    createPost() {
        const modalRef = this.dialog.open(_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_0__.CreatePostComponent, {
            // width: '1000px',
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog-create-post',
        });
        modalRef.afterClosed().subscribe(result => {
            this.posts = [];
            //Se cerro el dialog
            this.getAllPostPage(0, 5);
        });
    }
    validaUrl(url) {
        return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.isValidUrl(url);
    }
    goComments(post) {
        const dialogConfig = {
            data: post,
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog-coments',
        };
        dialogConfig.disableClose = true;
        const modalRef = this.dialog.open(_comments_comments_component__WEBPACK_IMPORTED_MODULE_2__.CommentsComponent, dialogConfig);
    }
    //optener los datos del usuario desde el token
    uId() {
        const uid = this.authService.decodeToken();
        this.authService.findById(uid).subscribe((data) => {
            this.data = data.data;
        });
    }
    //Elimina la publicacion
    deletePost(id) {
        this.postService.deletePost(id).subscribe({
            next: (data) => {
                this.alertsService.succesMessage("", data.message);
                this.getAllPostPage(0, 5);
            },
            error: (data) => {
                this.alertsService.errorMessage('', data.message);
            }
        });
    }
    editPost(id) {
        const modalRef = this.dialog.open(_edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_3__.EditMyPostComponent, {
            data: id,
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-create-post",
        });
        modalRef.afterClosed().subscribe((result) => {
            //Se cerro el dialog
            this.getAllPostPage(0, 5);
        });
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_4__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_6__.AlertsService)); };
PublicationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], viewQuery: function PublicationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 25, vars: 3, consts: [[1, "content-block"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-9", "col-xs-9"], [1, "card"], [1, "body"], [1, "wrapper"], [1, "main"], [1, "col-md-3"], [1, "example-card"], [1, "ms-4", 2, "color", "blue"], ["mat-button", "", 3, "click"], ["mat-button", "", "routerLink", "/home/bookface/myposts"], [1, "col-md-6", "scrollClass", 3, "scroll"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "col", "spinner"], [4, "ngIf"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "postText"], ["mat-card-image", "", "m-1", "", "class", "imagenPost", "alt", "No se puede visualizar la imagen", 3, "src", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "ngClass", "click"], [3, "matBadge"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", "m-1", "", "alt", "No se puede visualizar la imagen", 1, "imagenPost", 3, "src"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "main", 6)(7, "div", 1)(8, "div", 7)(9, "mat-card", 8)(10, "mat-card-header")(11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Publicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-card-actions")(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PublicationsComponent_Template_button_click_16_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Crear publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Mis publicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function PublicationsComponent_Template_div_scroll_20_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PublicationsComponent_mat_card_21_Template, 21, 17, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, PublicationsComponent_mat_spinner_23_Template, 1, 0, "mat-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardImage, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadge, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: ["@charset \"UTF-8\";\n.card[_ngcontent-%COMP%] {\n  background-color: #ecf0f4;\n  height: 100%;\n}\n.example-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-bottom: 30px;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n.postText[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n.liked[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n}\n.imagenPost[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin: 10px 2px;\n  max-width: 100%;\n  \n  height: auto;\n  object-fit: contain;\n}\n.scrollClass[_ngcontent-%COMP%] {\n  height: 85.2vh;\n  max-width: 100%;\n  overflow: auto;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n}\n.derecha[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFRjtBQUlBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBREY7QUFNQTtFQUNFLHNCQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0FBSEY7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUFpQiwrREFBQTtFQUNqQixZQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBRkY7QUFLQTtFQUNFLFlBQUE7QUFGRiIsImZpbGUiOiJwdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBvc3RUZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5saWtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltYWdlblBvc3Qge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIG3DoXhpbW8gZGUgbGEgaW1hZ2VuIHNlZ8O6biB0dXMgbmVjZXNpZGFkZXMgKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc2Nyb2xsQ2xhc3Mge1xuICBoZWlnaHQ6IDg1LjJ2aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVyZWNoYSB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('pageTransition', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({ opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 9847:
/*!*************************************************************!*\
  !*** ./src/app/pages/home/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserComponent": () => (/* binding */ EditUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var _service_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/alerts.service */ 1092);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);












const _c0 = ["fileInput"];
function EditUserComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.imgAct, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EditUserComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El nombre del usuario es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El apellido materno es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El apellido paterno es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El email es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El email ingresado no es v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La edad es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La fecha de nacimiento es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class EditUserComponent {
    constructor(matDialogRef, authService, formBuilder, alertsService) {
        this.matDialogRef = matDialogRef;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertsService = alertsService;
        this.action = "Editar";
        //construccion del formulario
        this.authForm = this.formBuilder.group({
            name: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            mothersLastName: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            fatherLastName: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: [
                { value: "", disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email],
            ],
            age: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            dateBirth: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    ngOnInit() {
        this.dataUserId();
    }
    //Metodo para cerrar este dialogo editar usuario
    closeDialog() {
        this.matDialogRef.close(true);
    }
    //Netodo que nos permite optener los datos del usuario con el id
    dataUserId() {
        const id = this.authService.decodeToken();
        this.authService.findById(id).subscribe((data) => {
            this.data = data.data;
            this.imgAct = "" + this.data.avatar;
            const dateObj = new Date(this.data.date_birth);
            const formattedDate = dateObj.toISOString().split("T")[0];
            const datosPreexistentes = {
                name: this.data.name,
                mothersLastName: this.data.mother_last_name,
                fatherLastName: this.data.father_last_name,
                email: this.data.email,
                age: this.data.age,
                dateBirth: formattedDate,
            };
            // Llenar el formulario con los datos preexistentes
            this.authForm.patchValue(datosPreexistentes);
        });
    }
    //Metodo para cargar una imagen
    cargarImagen(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            const file = input.files[0];
            this.avatar = file;
            reader.onload = () => {
                this.imgAct = reader.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    //metodo que permite que el contenedor pueda aprir el explorador para subir la imagen
    seleccImg() {
        this.fileInput.nativeElement.click();
    }
    //Metodo que para realisar las acciones del frmulario
    actionButton() {
        if (this.action == "Editar") {
            this.authForm.enable();
            this.action = "Guardar";
        }
        else {
            if (this.authForm.valid) {
                this.seveEdit();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("", "Completa todos los campos para editar tu perfil.", "warning");
            }
        }
    }
    //metodo que guardar los cambios realizados en su perfil
    seveEdit() {
        const data = this.authForm.value;
        const dataUser = {
            name: data.name,
            mother_last_name: data.mothersLastName,
            father_last_name: data.fatherLastName,
            email: data.email,
            age: data.age,
            date_birth: data.dateBirth,
            avatar: this.avatar,
        };
        console.log(dataUser);
        this.authService.updateUser(dataUser).subscribe((data) => {
            if (data.ok) {
                this.action = "Editar";
                this.authForm.disable();
                return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("", data.msg, "success");
            }
            else {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("", data.msg, "error");
            }
        });
    }
    //metodo que nos permitira cancelar las acciones de formularios
    closeAction() {
        if (this.action != "Editar") {
            this.action = "Editar";
            this.authForm.disable();
        }
        else {
            this.closeDialog();
        }
    }
    cambiar() {
        const email = {
            email: this.data.email
        };
        this.authService.forgetPassword(email).subscribe(data => {
            if (data.ok) {
                this.matDialogRef.close();
                this.alertsService.succesMessage('', data.msg);
            }
            if (!data.ok) {
                this.alertsService.warningMessage(data.msg);
            }
        });
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__.AlertsService)); };
EditUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], viewQuery: function EditUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 69, vars: 12, consts: [[1, "container", "text"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], [1, "contenedor"], ["mat-mini-fab", "", "color", "secondary", 1, "elemento", 3, "click"], [1, "text-center", "card-header"], [3, "formGroup", "ngSubmit"], [1, "mt-5", "d-flex", "align-items-center", "justify-content-center"], [1, "contImg", 3, "click"], ["alt", "Imagen", 3, "src", 4, "ngIf"], ["type", "file", 2, "display", "none", 3, "disabled", "change"], ["fileInput", ""], [1, "card-header"], [1, "row", "mt-5"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "name", "required", "", 3, "disabled"], [4, "ngIf"], [1, "row"], ["matInput", "", "formControlName", "mothersLastName", "required", ""], ["matInput", "", "formControlName", "fatherLastName", "required", ""], ["matInput", "", "type", "email", "formControlName", "email", "required", ""], ["matInput", "", "type", "number", "formControlName", "age", "required", ""], ["matInput", "", "type", "date", "formControlName", "dateBirth", "required", ""], ["mat-icon-button", "", 3, "click"], [1, "row", "justify-content-end", "mt-5"], [1, "col-4"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["alt", "Imagen", 3, "src"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_3_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Perfil de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditUserComponent_Template_form_ngSubmit_8_listener() { return ctx.actionButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_Template_div_click_10_listener() { return ctx.seleccImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EditUserComponent_img_11_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EditUserComponent_Template_input_change_12_listener($event) { return ctx.cargarImagen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Datos personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "mat-form-field", 14)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Nombre del usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, EditUserComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "div", 13)(25, "mat-form-field", 14)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Apellido Materno");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EditUserComponent_mat_error_29_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 17)(31, "div", 13)(32, "mat-form-field", 14)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Apellido paterno");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, EditUserComponent_mat_error_36_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 17)(38, "div", 13)(39, "mat-form-field", 14)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, EditUserComponent_mat_error_43_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, EditUserComponent_mat_error_44_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 17)(46, "div", 13)(47, "mat-form-field", 14)(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, EditUserComponent_mat_error_51_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17)(53, "div", 13)(54, "mat-form-field", 14)(55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Fecha de nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, EditUserComponent_mat_error_58_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 17)(60, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_Template_a_click_60_listener() { return ctx.cambiar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Cambiar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 24)(63, "div", 25)(64, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_64_listener() { return ctx.closeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 25)(67, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imgAct);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.action === "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.action === "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("mothersLastName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("fatherLastName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("age").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authForm.get("dateBirth").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor], styles: [".contImg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background-color: #fdfcfc;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1pt solid #e2e2e2;\n}\n.contImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 50%;\n}\n.contenedor[_ngcontent-%COMP%] {\n  position: relative;\n}\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUVGIiwiZmlsZSI6ImVkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250SW1nIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTIsIDI1Mik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFwdCBzb2xpZCByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuLmNvbnRlbmVkb3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmVsZW1lbnRvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3340:
/*!*******************************************************!*\
  !*** ./src/app/pages/home/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-user/edit-user.component */ 9847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/menu.service */ 3225);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 2796);













function HeaderComponent_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r1.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_img_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.defaultFlag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { active: a0 }; };
function HeaderComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_a_31_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.setLanguage(item_r7.text, item_r7.lang, item_r7.flag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r3.langStoreValue === item_r7.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", item_r7.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.text);
} }
function HeaderComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "li", 36);
} }
const document = window.document;
class HeaderComponent {
    constructor(document, renderer, elementRef, authService, serviseMenu, matDialog) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.serviseMenu = serviseMenu;
        this.matDialog = matDialog;
        this.data = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__.User();
        this.config = {};
        this.isNavbarCollapsed = true;
        this.menuOpen = true;
        this.listLang = [
            { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
            { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
            { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
        ];
    }
    ngOnInit() {
        //Optiene si se dio clic en el menu para extender el menu
        this.serviseMenu.listen().subscribe((event) => {
            this.menuOpen = event.event;
        });
        this.uId();
    }
    // ngAfterViewInit() {
    //   // set theme on startup
    //   if (localStorage.getItem("theme")) {
    //     this.renderer.removeClass(this.document.body, this.config.layout.variant);
    //     this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
    //   } else {
    //     // this.renderer.addClass(this.document.body, this.config.layout.variant);
    //   }
    //   if (localStorage.getItem("menuOption")) {
    //     this.renderer.addClass(
    //       this.document.body,
    //       localStorage.getItem("menuOption")
    //     );
    //   } else {
    //     this.renderer.addClass(
    //       this.document.body,
    //       "menu_" + this.config.layout.sidebar.backgroundColor
    //     );
    //   }
    //   if (localStorage.getItem("choose_logoheader")) {
    //     this.renderer.addClass(
    //       this.document.body,
    //       localStorage.getItem("choose_logoheader")
    //     );
    //   } else {
    //     this.renderer.addClass(
    //       this.document.body,
    //       "logo-" + this.config.layout.logo_bg_color
    //     );
    //   }
    //   if (localStorage.getItem("sidebar_status")) {
    //     if (localStorage.getItem("sidebar_status") === "close") {
    //       this.renderer.addClass(this.document.body, "side-closed");
    //       this.renderer.addClass(this.document.body, "submenu-closed");
    //     } else {
    //       this.renderer.removeClass(this.document.body, "side-closed");
    //       this.renderer.removeClass(this.document.body, "submenu-closed");
    //     }
    //   } else {
    //     if (this.config.layout.sidebar.collapsed === true) {
    //       this.renderer.addClass(this.document.body, "side-closed");
    //       this.renderer.addClass(this.document.body, "submenu-closed");
    //     }
    //   }
    // }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        this.menuOpen = !this.menuOpen;
        this.serviseMenu.emit(this.menuOpen);
    }
    //Metodo para salir de la web
    logout() {
        this.authService.logout();
    }
    //optener los datos del usuario desde el token
    uId() {
        const uid = this.authService.decodeToken();
        this.authService.findById(uid).subscribe((data) => {
            this.data = data.data;
        });
    }
    //Abrir el dialogo de editar usuario
    openEdirUser() {
        const dialogConfig = {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog-edit-user',
        };
        dialogConfig.disableClose = true;
        // Example usage
        const result = this.matDialog.open(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__.EditUserComponent, dialogConfig);
        result.afterClosed().subscribe((result) => {
            if (result) {
                this.uId();
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_3__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 89, vars: 17, consts: [[1, "navbar", "active", "text", 2, "background-color", "rgb(255, 255, 255)", "color", "black"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], [1, "navbar-brand"], [1, "row"], [1, "col-1", "menuC"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 2, "margin-top", "-2px", 3, "click"], ["routerLink", "/home", 1, "col", "logoNetworks", "d-flex", "align-items-center", "justify-content-center", 2, "margin-top", "-15px", "cursor", "pointer"], ["src", "assets/images/media.png"], [1, "logo-name", "text", 2, "color", "black"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon", "menu"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], [1, "material-symbols-outlined"], ["ngbDropdown", "", 1, "nav-item", "langSelItem"], ["ngbDropdownToggle", "", 1, "lang-dropdown"], ["height", "16", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "lang-item", "dropdown-menu-right", "pullDown"], ["href", "javascript:void(0);", "class", "dropdown-item lang-item-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "nav-item btnNotification", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", 1, "nav-item", "user_profile", "btnUserDropdown", 3, "matMenuTriggerFor"], ["ngbDropdownToggle", "", 1, "nav-notification-icons", "pt-0"], ["alt", "User", 1, "user_img", "d-block", "imUser", 3, "src"], [1, "text"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "routerLink", "/home/bookface/myposts"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""], [2, "font-size", "1pt"], [1, "text-center"], [1, "circle", "text-center", "menuC"], ["ngbDropdown", "", 1, "nav-item", "btnNotification"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "matMenuTriggerFor"], ["alt", "User", 1, "user_img", "d-block", "imUser", 3, "matMenuTriggerFor", "src"], ["menu1", "matMenu"], [1, "text-center", 2, "background-color", "rgb(143, 136, 248)", "margin-top", "-8px"], ["mat-menu-item", "", 2, "width", "400px", "color", "black"], ["alt", "User", 1, "user_img", 3, "src"], ["height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "lang-item-list", 3, "ngClass", "click"], ["height", "12", 1, "flag-img", 3, "src"], [1, "align-middle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0, 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5)(6, "div", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Social hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "ul", 12)(16, "li")(17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul", 14)(21, "li", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-icon")(24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " fullscreen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li", 18)(27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, HeaderComponent_img_28_Template, 1, 1, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, HeaderComponent_img_29_Template, 1, 1, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, HeaderComponent_a_31_Template, 4, 5, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, HeaderComponent_li_32_Template, 1, 0, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li", 24)(34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-menu", 27, 28)(40, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_40_listener() { return ctx.openEdirUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "manage_accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 30)(46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "record_voice_over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Mis Publicasiones Bookface");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 31)(51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "record_voice_over");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Mis Publicasiones Toktik");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "button", 32)(56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Terminos y Condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_60_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "br", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "v 1.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 35)(69, "div", 36)(70, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-menu", null, 39)(74, "div", 40)(75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Notificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "button", 41)(78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "button", 41)(82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "button", 41)(86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (ctx.data == null ? null : ctx.data.avatar) || "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5)("src", (ctx.data == null ? null : ctx.data.avatar) || "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (ctx.data == null ? null : ctx.data.avatar) || "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (ctx.data == null ? null : ctx.data.avatar) || "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (ctx.data == null ? null : ctx.data.avatar) || "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem], styles: ["@media (max-width: 767px) {\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menuC[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .menuC[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.imUser[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  bottom: auto;\n  top: 5px;\n  right: 0px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsYUFBQTtFQUNKOztFQUNFO0lBQ0ksY0FBQTtFQUVOO0FBQ0Y7QUFDRTtFQUNFO0lBQ0ksYUFBQTtFQUNOO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWVudXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tZW51Q3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubWVudUN7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gIH1cclxuICAuaW1Vc2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select/select.component */ 5298);
/* harmony import */ var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../facebook/facebook.component */ 3898);
/* harmony import */ var _tiktok_tiktok_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tiktok/tiktok.component */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "",
        redirectTo: "select",
        pathMatch: "full",
    },
    { path: "select", component: _select_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent },
    { path: "bookface", component: _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_1__.FacebookComponent },
    { path: "toktik", component: _tiktok_tiktok_component__WEBPACK_IMPORTED_MODULE_2__.TiktokComponent },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/menu.service */ 3225);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3340);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);








const _c0 = ["drawer"];
class HomeComponent {
    constructor(document, renderer, serviceMenu, authService) {
        this.document = document;
        this.renderer = renderer;
        this.serviceMenu = serviceMenu;
        this.authService = authService;
        this.openMenu = true;
        this.iniciarAnimacion = false;
        //Optiene si se dio clic en el menu para extender el menu
        this.serviceMenu.listen().subscribe((event) => {
            this.closeMenu();
        });
    }
    ngOnInit() {
    }
    //Nos permite salir de la aplicacion
    onLogut() {
        this.authService.logout();
    }
    //Nos permite esconder el menú cuando está en un telefono
    closeMenu() {
        this.drawer.toggle();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, decls: 30, vars: 6, consts: [[1, "conteiner", 2, "overflow-x", "hidden", "background-color", "white"], [1, "example-container", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], [1, "col-1", "c1"], ["routerLink", "/home", 1, "row", "d-flex", "align-items-center", "justify-content-center", "mt-2", "contLogoNet", 3, "click"], [1, "col-1", "logoNetworks", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/images/home.png ", 1, "rounded", "d-block", "imOrVideoP"], [1, "col", "textLogo", 3, "hidden"], ["routerLink", "/home/toktik", 1, "row", "d-flex", "align-items-center", "justify-content-center", "mt-2", "contLogoNet", 3, "click"], ["src", "assets/images/BT.png ", 1, "rounded", "d-block", "imOrVideoP"], ["routerLink", "/home/bookface", 1, "row", "d-flex", "align-items-center", "justify-content-center", "mt-2", "contLogoNet", 3, "click"], ["src", "assets/images/BF.png ", 1, "rounded", "d-block", "imOrVideoP"], [1, "row", "d-flex", "align-items-center", "justify-content-center", "contLogoNet", "bt", 3, "click"], ["src", "assets/images/Salir.png ", 1, "rounded", "d-block", "imOrVideoP"], [2, "height", "93vh", "overflow-x", "hidden"], [1, "row", "text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-drawer-container", 1)(4, "mat-drawer", 2, 3)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_7_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_12_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Toktik");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_17_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Bookface");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_22_listener() { return ctx.onLogut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-drawer-content", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.openMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.openMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.openMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.openMenu);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet], styles: [".c1[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 90vh;\n  background-color: white;\n  overflow-x: hidden;\n}\n\n.imOrVideoP[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 60%;\n  height: auto;\n}\n\n.wind[_ngcontent-%COMP%] {\n  overflow: auto;\n  margin-top: 20px;\n}\n\n.logoNetworks[_ngcontent-%COMP%] {\n  width: 70px;\n  height: auto;\n}\n\n.textLogo[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.contLogoNet[_ngcontent-%COMP%]:hover {\n  background-color: rgba(169, 169, 169, 0.76);\n  cursor: pointer;\n}\n\n.bt[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYzEge1xyXG4gIHdpZHRoOiAyNjVweDtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLmltT3JWaWRlb1Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG4ud2luZCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubG9nb05ldHdvcmtze1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuIFxyXG59XHJcbi50ZXh0TG9nb3tcclxuIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNvbnRMb2dvTmV0OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC43Nik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5245);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3340);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/select.component */ 5298);
/* harmony import */ var _facebook_facebook_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../facebook/facebook.module */ 8181);
/* harmony import */ var _tiktok_tiktok_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tiktok/tiktok.module */ 2395);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user/edit-user.component */ 9847);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);






















class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _facebook_facebook_module__WEBPACK_IMPORTED_MODULE_4__.FacebookModule,
            _tiktok_tiktok_module__WEBPACK_IMPORTED_MODULE_5__.TiktokModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _select_select_component__WEBPACK_IMPORTED_MODULE_3__.SelectComponent, _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__.EditUserComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _facebook_facebook_module__WEBPACK_IMPORTED_MODULE_4__.FacebookModule,
        _tiktok_tiktok_module__WEBPACK_IMPORTED_MODULE_5__.TiktokModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule] }); })();


/***/ }),

/***/ 8509:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/page404/page404.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 21, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], ["routerLink", "/auth/signin", 1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/auth/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "form")(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "div")(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5298:
/*!*******************************************************!*\
  !*** ./src/app/pages/home/select/select.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class SelectComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], decls: 16, vars: 0, consts: [[1, "conteiner", "text"], [1, "row"], [1, "text-center"], [1, "row", "d-flex", "align-items-center", "justify-content-center"], [2, "width", "800px"], ["routerLink", "/home/toktik", 1, "col", "d-flex", "align-items-center", "justify-content-center"], [1, "btnSect", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/images/text TokTik.png ", 1, "rounded", "d-block", "imOrVideoP"], ["routerLink", "/home/bookface", 1, "col", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/images/Text BoookFace.png ", 1, "rounded", "d-block", "imOrVideoP1"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00BFQue quieres hacer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br")(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 1)(10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".btnSect[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 300px;\n  height: 200px;\n  border-radius: 10px;\n  border: 2pt solid #d4cece;\n  margin-top: 20px;\n}\n\n.btnSect[_ngcontent-%COMP%]:hover {\n  background-color: rgba(169, 169, 169, 0.852);\n  cursor: pointer;\n}\n\n.imOrVideoP[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 60%;\n  height: auto;\n}\n\n.imOrVideoP1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 94%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUdGIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuU2VjdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB0IHNvbGlkIHJnYigyMTIsIDIwNiwgMjA2KTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idG5TZWN0OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC44NTIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1PclZpZGVvUCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmltT3JWaWRlb1AxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTQlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5206:
/*!*************************************************************!*\
  !*** ./src/app/pages/tiktok/comments/comments.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_models_commentDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/commentDTO */ 7552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/comments.service */ 7809);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var src_app_models_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/post.model */ 5806);


















function CommentsComponent_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No hay comentario, se el primero en comentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommentsComponent_mat_card_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "button", 21)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "mat-menu", null, 22)(7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_8_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.toggleEditMode(comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_8_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.deleteComment(comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r7);
} }
function CommentsComponent_mat_card_8_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r2.descripcion, " ");
} }
function CommentsComponent_mat_card_8_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 8)(1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CommentsComponent_mat_card_8_ng_template_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.editedDescription = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 27)(3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_8_ng_template_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_8_ng_template_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.updateComment(comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Comentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.editedDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r6.editedDescription.length === 0);
} }
const _c0 = function (a0) { return { "liked": a0 }; };
function CommentsComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommentsComponent_mat_card_8_div_1_Template, 17, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CommentsComponent_mat_card_8_ng_container_10_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CommentsComponent_mat_card_8_ng_template_11_Template, 7, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-card-actions")(14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_mat_card_8_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const comment_r2 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.toggleLikeComment(comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r2.user.idUser == ctx_r1.user.id_user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(" + comment_r2.user.avatar + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", comment_r2.user.name, " ", comment_r2.user.fatherLastName, " ", comment_r2.user.motherLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r2.user.dateRegistration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r2 !== ctx_r1.commentEdit)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, comment_r2.liked));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matBadge", comment_r2.numLike);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r2.liked ? "favorite" : "favorite_border", " ");
} }
class CommentsComponent {
    constructor(commentsService, alertsService, loginService, formBuilder, dialogRef, data) {
        this.commentsService = commentsService;
        this.alertsService = alertsService;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.comments = [];
        this.commentLikedMap = {};
        // Editar comentarios
        this.editingMode = false;
        this.editedDescription = '';
        // Formulario para editar
        this.formComment = this.formBuilder.group({
            descripction: ['']
        });
        this.post = data;
    }
    ngOnInit() {
        // Al cargar el componente inicia la busqueda como el usuario
        this.findAllComments();
        this.getUser();
    }
    // Busca todos los comentarios por el post seleccionado
    findAllComments() {
        this.commentsService.findByPostComment(this.post.idPost).subscribe({
            next: (data) => {
                console.log(data);
                this.comments = data.list;
                console.log(this.comments);
            },
            error: (data) => {
                this.alertsService.errorMessage('', data.message);
            }
        });
    }
    // Obtiene todos los usuarios
    getUser() {
        const id = this.loginService.decodeToken();
        this.loginService.findById(id).subscribe({
            next: (user) => {
                this.user = user.data;
                console.log(this.user);
            },
            error: (error) => {
                this.alertsService.errorMessage('Upps', 'Hubo un error insesperado');
            }
        });
    }
    // Limpia el formulario despues de comentar
    clear() {
        this.formComment.reset();
    }
    // Guarda el comentario
    saveComment() {
        const comment = new src_app_models_commentDTO__WEBPACK_IMPORTED_MODULE_0__.CommentDTO();
        comment.post = this.post.idPost;
        comment.descripcion = this.formComment.controls.descripction.value;
        comment.user = this.user.id_user;
        this.commentsService.createComment(comment).subscribe({
            next: (data) => {
                this.alertsService.succesMessage('', data.message);
                this.findAllComments();
                this.clear();
            },
            error: (data) => {
                // console.log(data)
                this.alertsService.errorMessage('', data.error.message);
            }
        });
    }
    // Actualiza el comentario
    updateComment(comment) {
        console.log(comment);
        const newComment = new src_app_models_commentDTO__WEBPACK_IMPORTED_MODULE_0__.CommentDTO();
        newComment.descripcion = this.editedDescription;
        newComment.idComment = comment.idComment;
        // newComment.multimedia = null
        newComment.numLike = comment.numLike;
        newComment.user = this.user.id_user;
        newComment.post = comment.post.idPost;
        this.commentsService.updateComment(newComment).subscribe({
            next: (data) => {
                this.alertsService.succesMessage('', data.message);
                this.findAllComments();
                this.editingMode = false;
            },
            error: (data) => {
                // console.log(data)
                this.alertsService.errorMessage('', data.error.message);
            }
        });
    }
    // Elimina el comentario
    deleteComment(comment) {
        this.commentsService.deleteComment(comment.idComment).subscribe({
            next: (data) => {
                this.alertsService.succesMessage('', data.message);
                this.findAllComments();
            },
            error: (data) => {
                // console.log(data)
                this.alertsService.errorMessage('', data.error.message);
            }
        });
    }
    // Likes de los comentarios para el backend
    likeComment(comment) {
        this.commentsService.sumLike(comment.idComment).subscribe({
            next: (data) => {
                console.log(data);
                // this.findAllComments();
            },
            error: (data) => {
                console.log(data);
            }
        });
    }
    // Quitar like del comentario seleccionado
    subtractLike(comment) {
        this.commentsService.subtractLike(comment.idComment).subscribe({
            next: (data) => {
                console.log(data);
                // this.findAllComments();
            },
            error: (data) => {
                console.log(data);
            }
        });
    }
    // Esto nos ayuda a poner el comentario para editarlo
    toggleEditMode(commentM) {
        this.editingMode = true;
        // Busca el comentario para que solo tenga uno y asi poder editar solo uno
        this.commentEdit = this.comments.find(comment => comment.idComment === commentM.idComment);
        this.editedDescription = commentM.descripcion; // Initialize the edited description
    }
    // Cancelacion del edit
    cancelEdit() {
        // Cancel editing and revert back to read-only mode
        this.editingMode = false;
        this.editedDescription = '';
        this.findAllComments();
    }
    // Agregando estilo para agregar y eliminar like
    toggleLikeComment(comment) {
        const commentId = comment.idComment;
        if (comment.liked) {
            console.log("Restando likes");
            comment.liked = false;
            comment.numLike--; // Restar el like
            this.subtractLike(comment);
        }
        else {
            comment.liked = true;
            console.log("Sumando like");
            comment.numLike++; // Sumar el like
            this.likeComment(comment);
        }
    }
    // Cerrar el componente
    closeComments() {
        this.dialogRef.close();
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_comments_service__WEBPACK_IMPORTED_MODULE_1__.CommentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 21, vars: 6, consts: [["mat-dialog-title", ""], ["mat-icon-button", "", "mat-dialog-close", "", "color", "link", 1, "icon"], [1, "col-md-12", "col-lg-12", "col-xs-12", "scrollable-content"], [4, "ngIf"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-form", 3, "formGroup"], [1, "input-with-image"], [1, "avatar", 3, "src"], [1, "example-full-width"], ["matInput", "", "formControlName", "descripction"], [1, "justify-content-end", "align-items-center", "d-flex"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "example-card"], ["class", "derecha", 4, "ngIf"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "text1", "text-truncate"], [4, "ngIf", "ngIfElse"], ["editMode", ""], ["mat-button", "", 3, "ngClass", "click"], ["matBadgeOverlap", "false", "matBadgeColor", "warn", 3, "matBadge"], [1, "derecha"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "col-blue"], [1, "col-red"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "justify-content-end", "align-items-center", "d-flex", "input-with-image"], ["mat-button", "", 1, "derecha", 3, "click"], ["mat-button", "", "color", "primary", 1, "derecha", 3, "disabled", "click"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 1)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CommentsComponent_h2_7_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CommentsComponent_mat_card_8_Template, 18, 14, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-dialog-actions")(10, "form", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 8)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Agrega un comentario...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10)(18, "span")(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_19_listener() { return ctx.saveComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Comentar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Comentarios ", ctx.comments.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.comments.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.formComment.controls.descripction.value === null);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadge, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName], styles: ["@charset \"UTF-8\";\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 24px;\n  background-color: whitesmoke;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\nbutton[_ngcontent-%COMP%] {\n  transition: 0.5s, color 0.1s;\n  -webkit-transition: 0.5s, color 0.1s;\n  -moz-transition: 0.5s, color 0.1s;\n  border-radius: 10%;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translate(0px, 5px);\n  -webkit-transform: translate(0px, 5px);\n  -moz-transform: translate(0px, 5px);\n}\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 50px;\n  object-fit: cover;\n  object-position: center;\n  width: 50px;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  \n}\n.input-with-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n.example-form[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.derecha[_ngcontent-%COMP%] {\n  float: right;\n}\n.static-content[_ngcontent-%COMP%] {\n  \n  flex: 0 0 auto;\n  \n  padding: 20px;\n  \n}\n.scrollable-content[_ngcontent-%COMP%] {\n  \n  overflow-y: auto;\n  \n  max-height: 350px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFFRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRjtBQUdBO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVBO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQVMscUVBQUE7QUFFWDtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQXFCLGdEQUFBO0FBR3ZCO0FBQUE7RUFDRSxVQUFBO0FBR0Y7QUFFQTtFQUNFLFlBQUE7QUFDRjtBQUVBO0VBQ0UsOENBQUE7RUFDQSxjQUFBO0VBQWdCLG1EQUFBO0VBQ2hCLGFBQUE7RUFBZSw0Q0FBQTtBQUdqQjtBQUFBO0VBQ0UseURBQUE7RUFDQSxnQkFBQTtFQUFrQixnRUFBQTtFQUNsQixpQkFBQTtFQUFtQiw0REFBQTtBQUtyQiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IDAuNXMsIGNvbG9yIDAuMXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cywgY29sb3IgMC4xcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzLCBjb2xvciAwLjFzO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNXB4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDVweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA1cHgpO1xufVxuXG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbiAgLyogVGhpcyBtYWtlcyB0aGUgaW5wdXQgZmllbGQgdGFrZSB1cCB0aGUgcmVtYWluaW5nIGF2YWlsYWJsZSBzcGFjZSAqL1xufVxuXG4uaW5wdXQtd2l0aC1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIFRoaXMgY2VudGVycyB0aGUgaW1hZ2UgYW5kIGlucHV0IHZlcnRpY2FsbHkgKi9cbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5kZXJlY2hhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3RhdGljLWNvbnRlbnQge1xuICAvKiBBc2VndXJhIHF1ZSBlc3RlIGNvbnRlbmlkbyBubyBzZSBkZXNwbGFjZSAqL1xuICBmbGV4OiAwIDAgYXV0bztcbiAgLyogRXN0byBldml0YSBxdWUgZWwgY29udGVuaWRvIGNyZXpjYSBvIHNlIGVuY29qYSAqL1xuICBwYWRkaW5nOiAyMHB4O1xuICAvKiBBanVzdGEgZWwgZXNwYWNpYWRvIHNlZ8O6biBzZWEgbmVjZXNhcmlvICovXG59XG5cbi5zY3JvbGxhYmxlLWNvbnRlbnQge1xuICAvKiBQZXJtaXRlIHF1ZSBlc3RlIGNvbnRlbmlkbyBzZSBkZXNwbGFjZSB2ZXJ0aWNhbG1lbnRlICovXG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qIE11ZXN0cmEgbGEgYmFycmEgZGUgZGVzcGxhemFtaWVudG8gdmVydGljYWwgc2kgZXMgbmVjZXNhcmlvICovXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAvKiBFc3RhYmxlY2UgdW5hIGFsdHVyYSBtw6F4aW1hIHBhcmEgZXZpdGFyIHF1ZSBzZSBkZXNib3JkZSAqL1xufSJdfQ== */"] });


/***/ }),

/***/ 9712:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tiktok/create-post/create-post.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePostComponent": () => (/* binding */ CreatePostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-input-file */ 9618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











class CreatePostComponent {
    constructor(fb, publicacioneServices, loginService, alertsService, dialogRef) {
        this.fb = fb;
        this.publicacioneServices = publicacioneServices;
        this.loginService = loginService;
        this.alertsService = alertsService;
        this.dialogRef = dialogRef;
        this.postForm = this.fb.group({
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            multipartFile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    ngOnInit() {
        this.idUser = this.loginService.decodeToken();
    }
    onSubmit() {
        if (this.postForm.valid) {
            //Datos del formulario
            const postFile = this.postForm.value;
            console.log(postFile);
            //Se crea un objeto de tipo File para manejar la imagen
            let imagenFile = new File([], "");
            //Se valida que la imgane se haya subido al input en caso de que no se pone como null
            if (postFile.multipartFile != "") {
                imagenFile = postFile.multipartFile[0].file;
                if (imagenFile.size > 10000000) {
                    this.alertsService.errorMessage("", "El peso del archivo supera el limite");
                    return;
                }
            }
            else {
                imagenFile = null;
            }
            // Crear instancia de FormData y agregar propiedades del publicacion a enviar
            const formData = new FormData();
            formData.append("description", postFile.description);
            //SE valida si la imagen existe
            if (imagenFile != null) {
                formData.append("multipartFile", imagenFile);
            }
            formData.append("user", this.idUser.toString());
            //Se envia 1 indicando que es una publicacion de toktik
            this.publicacioneServices.createPost(formData, 1).subscribe({
                next: (data) => {
                    this.alertsService.succesMessage("Publicación", data.message);
                    this.dialogRef.close();
                },
            });
        }
    }
    close() {
        this.dialogRef.close();
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_0__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_2__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef)); };
CreatePostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 23, vars: 1, consts: [[1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "\u00BFQue estas pensando?", "formControlName", "description"], [1, "input-file-container"], [1, "mt-1"], [1, "uppercase", "fw-500"], ["formControlName", "multipartFile", "fileLimit", "1", "fileAccept", "video/*"], ["mat-raised-button", "", "color", "primary", 1, "btn-space"], ["type", "button", "mat-button", "", 3, "click"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Crear publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CreatePostComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "div", 7)(13, "p", 8)(14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Agregar video");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input-file", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 3)(18, "div", 4)(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_21_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.postForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_input_file__WEBPACK_IMPORTED_MODULE_8__.InputFileComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5302:
/*!**********************************************************!*\
  !*** ./src/app/pages/tiktok/header/headert.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadertComponent": () => (/* binding */ HeadertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HeadertComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeadertComponent.ɵfac = function HeadertComponent_Factory(t) { return new (t || HeadertComponent)(); };
HeadertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadertComponent, selectors: [["app-headert"]], decls: 0, vars: 0, template: function HeadertComponent_Template(rf, ctx) { }, styles: [".Opciones[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(41, 41, 246, 0.751);\n  margin-right: 20px;\n}\n\n.navbarHeader[_ngcontent-%COMP%] {\n  min-height: calc(0vh - 76px) !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.inputF[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3BjaW9uZXN7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiYSg0MSwgNDEsIDI0NiwgMC43NTEpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFySGVhZGVye1xyXG4gICAgbWluLWhlaWdodDogY2FsYygwdmggLSA3NnB4KSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0RntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5355:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tiktok/my-publications/my-publications.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPublicationstComponent": () => (/* binding */ MyPublicationstComponent)
/* harmony export */ });
/* harmony import */ var _tiktok_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../tiktok/comments/comments.component */ 5206);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/utils */ 4750);
/* harmony import */ var _tiktok_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiktok/create-post/create-post.component */ 9712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/login.service */ 9855);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);














const _c0 = function (a0) { return { liked: a0 }; };
function MyPublicationstComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 14)(2, "div", 15)(3, "button", 16)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-menu", 17, 18)(8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyPublicationstComponent_div_15_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const post_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.deletePost(post_r1.idPost); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 1)(14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9)(17, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 23)(22, "div", 1)(23, "div", 10)(24, "video", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("play", function MyPublicationstComponent_div_15_Template_video_play_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.onVideoPlay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "source", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " Tu navegador no admite la etiqueta de video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 27)(29, "div", 28)(30, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyPublicationstComponent_div_15_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const post_r1 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.toggleLike(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 28)(36, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyPublicationstComponent_div_15_Template_button_click_36_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const post_r1 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.comenOpen(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " textsms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 28)(40, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r1.user.avatar || "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", post_r1.user.name, " ", post_r1.user.fatherLastName, " ", post_r1.user.motherLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", post_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", post_r1.multimedia, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, post_r1.liked));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r1.numLike);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r1.user.avatar || "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
class MyPublicationstComponent {
    constructor(postService, dialog, authService, alertsService) {
        this.postService = postService;
        this.dialog = dialog;
        this.authService = authService;
        this.alertsService = alertsService;
        this.seeComments = true;
        this.subComments = true;
        this.pageSize = 5; // Tamaño de página
        this.currentPage = 0; // Página actual
        this.lengthPost = 0;
        this.postLiked = false;
        //Srcoll
        this.loading = false;
        this.cargando = false;
        this.posts = [];
        // editPost(id: any){
        //   const modalRef = this.dialog.open(EditMyPostComponent, {
        //     data:id,
        //     maxWidth: "100vw",
        //     maxHeight: "100vh",
        //     panelClass: "full-screen-dialog-create-post",
        //   });
        //   modalRef.afterClosed().subscribe((result) => {
        //     //Se cerro el dialog
        //     this.getAllPostPage();
        //   });
        // }
        this.scrollPosition = 0;
    }
    ngOnInit() {
        this.getAllPostPage();
    }
    ngAfterViewInit() {
        this.uId();
    }
    getAllPost() {
        this.postService.findAllPost().subscribe({
            next: (data) => {
                this.posts = data.list;
                // this.updatePagedPosts();
                // console.log(data);
            },
        });
    }
    getAllPostPage() {
        // console.log(page, size)
        this.postService.findByUserPost(2).subscribe({
            next: (data) => {
                this.posts = data.list; // Concatenar los nuevos posts al final del array existente
                this.cargando = false;
                //console.log(data);
            },
        });
    }
    deletePost(id) {
        this.postService.deletePost(id).subscribe({
            next: (data) => {
                this.alertsService.succesMessage("", data.message);
                this.getAllPostPage();
            },
            error: (data) => {
                this.alertsService.errorMessage('', data.message);
            }
        });
    }
    onScroll() {
        const scrollContainer = document.querySelector(".scrollClass");
        const windowHeight = "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.offsetHeight;
        const containerHeight = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.clientHeight) || 0;
        const containerScrollHeight = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollHeight) || 0;
        const containerScrollTop = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollTop) || 0;
        const windowBottom = windowHeight + containerScrollTop;
        if (windowBottom >= containerScrollHeight - 1 &&
            containerScrollTop > this.scrollPosition) {
            //Agregando animacion de scroll
            this.scrollPosition = containerScrollTop;
            clearTimeout(this.loadPostsTimeout);
            this.loadPostsTimeout = setTimeout(() => { }, 400); // Esperar 200 ms antes de cargar más posts
        }
    }
    activateComments() {
        this.seeComments = !this.seeComments;
    }
    activateSubComments() {
        this.subComments = !this.subComments;
    }
    toggleLike(row) {
        // console.log(row)
        if (row.liked) {
            // console.log("Restando likes");
            this.postLiked = false;
            row.liked = false;
            row.numLike--;
            this.subtractLike(row.idPost);
        }
        else {
            this.postLiked = true;
            row.numLike++;
            row.liked = true;
            // console.log("Sumando like");
            this.sumLike(row.idPost);
        }
    }
    subtractLike(id) {
        this.postService.subtractLike(id).subscribe({
            next: (data) => {
                // console.log(data);
            },
        });
    }
    sumLike(id) {
        this.postService.sumLike(id).subscribe({
            next: (data) => {
                // console.log(data);
            },
        });
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        // console.log(event)
    }
    // Método para abrir el diálogo de comentarios, se muestra un cuadro de diálogo con los comentarios del post seleccionado
    comenOpen(post) {
        // Objeto donde contiene las propiedad para el modal de comentarios
        const matDialogConfig = {
            maxWidth: '400vw',
            maxHeight: '400vh',
            panelClass: 'full-screen-dialog-comment-tokTik',
            data: post
        };
        // Abriendo Modal
        const modalRef = this.dialog.open(_tiktok_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent, matDialogConfig);
        modalRef.afterClosed().subscribe(result => {
        });
    }
    createPost() {
        const modalRef = this.dialog.open(_tiktok_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_2__.CreatePostComponent, {
            // width: '1000px',nent
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-create-post",
        });
        modalRef.afterClosed().subscribe((result) => {
            //Se cerro el dialog
            this.getAllPostPage();
        });
    }
    validaUrl(url) {
        return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.isValidUrl(url);
    }
    goComments(post) {
        const dialogConfig = {
            data: post,
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-coments",
        };
        dialogConfig.disableClose = true;
        const modalRef = this.dialog.open(_tiktok_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent, dialogConfig);
    }
    //optener los datos del usuario desde el token
    uId() {
        const uid = this.authService.decodeToken();
        this.authService.findById(uid).subscribe((data) => {
            this.data = data.data;
        });
    }
}
MyPublicationstComponent.ɵfac = function MyPublicationstComponent_Factory(t) { return new (t || MyPublicationstComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_3__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_5__.AlertsService)); };
MyPublicationstComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MyPublicationstComponent, selectors: [["app-my-publicationst"]], viewQuery: function MyPublicationstComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 19, vars: 1, consts: [[1, "content-block", "container", "justify-content-center", "align-items-center", "text"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-9", "col-xs-9"], [1, "card"], [1, "body"], [1, "wrapper"], [1, "main"], [1, "col-md-6", "scrollClass", "container", "justify-content-center", "align-items-center", "text", 3, "scroll"], [1, "container", "justify-content-center", "align-items-center", "text"], [1, "col"], [1, "col", "d-flex", "justify-content-center", "align-items-center"], ["mat-raised-button", "", "color", "link", "routerLink", "/home/toktik/public"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "primary", 1, "custom-button", "next"], [1, "datU", 2, "width", "80vh"], [1, "derecha"], ["mat-icon-button", "", "color", "link", 3, "matMenuTriggerFor"], [1, ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "col-1", "vid"], ["alt", "User", 1, "user_img", "d-block", "imUser", 3, "src"], [2, "font-weight", "bolder"], [1, "card-body"], ["controls", "", 1, "video", 3, "play"], ["videoElement", ""], ["type", "video/ogg", 3, "src"], [1, "ms-2", "actions"], [1, "text-center"], ["mat-mini-fab", "", "color", "link", 3, "ngClass", "click"], ["matBadgeOverlap", "false", "matBadgeColor", "warn"], ["mat-mini-fab", "", "color", "link", 1, "mt-2", 3, "click"], ["mat-icon-button", "", "color", "link", 1, "btnIm", "d-block", "align-items-center", "justify-content-center"], ["alt", "User", 1, "user_img", "imUser2", 3, "src"]], template: function MyPublicationstComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "main", 6)(7, "div", 1)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function MyPublicationstComponent_Template_div_scroll_8_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8)(10, "div", 1)(11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Ver Publicaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, MyPublicationstComponent_div_15_Template, 42, 12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 13)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass], styles: [".example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 48vh;\n  height: 85vh;\n  border-radius: 10pt;\n}\n\n.coment[_ngcontent-%COMP%] {\n  margin-top: 18pt;\n  width: 40vh;\n  height: 68vh;\n}\n\n@media (max-width: 530px) {\n  .actions[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    color: white;\n  }\n\n  .vid[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    width: 90vw;\n    height: 70vh;\n  }\n\n  .imUser2[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    display: block;\n  }\n\n  .datU[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 30px;\n    color: white;\n    position: absolute;\n    z-index: 9999;\n  }\n}\n\n.liked[_ngcontent-%COMP%] {\n  background-color: #ff00c8;\n  color: white;\n}\n\n\n\n.custom-button.next[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n}\n\n.custom-button.previous[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 16px;\n  top: 16px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 24px;\n}\n\n.imUser[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n  width: 60px;\n  height: 60px;\n}\n\n.imUser[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.derecha[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFFSjs7RUFBRTtJQUNFLGFBQUE7RUFHSjs7RUFERTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBSUo7O0VBREU7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtFQUlKOztFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUFFSjtBQUNGOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUUsK0NBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLGFBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7QUFJSiIsImZpbGUiOiJteS1wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLnZpZGVvIHtcclxuICAgIHdpZHRoOiA0OHZoO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBwdDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB0O1xyXG4gICAgd2lkdGg6IDQwdmg7XHJcbiAgICBoZWlnaHQ6IDY4dmg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC52aWRlbyB7XHJcbiAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW1Vc2VyMiB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgXHJcbiAgICAuZGF0VSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogOTk5OTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxpa2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDIwMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEVzdGlsb3MgcGFyYSBsb3MgYm90b25lcyBkZSBjYXJnYSBkZSB2aWRlbyAqL1xyXG4gIC5jdXN0b20tYnV0dG9uLm5leHQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tYnV0dG9uLnByZXZpb3VzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIC5pbVVzZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLmltVXNlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kZXJlY2hheyBcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 1356:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tiktok/publications/publications.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationstComponent": () => (/* binding */ PublicationstComponent)
/* harmony export */ });
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comments/comments.component */ 5206);
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-post/create-post.component */ 9712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/publicaciones.service */ 5959);
/* harmony import */ var src_app_service_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/comments.service */ 7809);
/* harmony import */ var src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/alerts.service */ 1092);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);











const _c0 = ["videoElement"];
const _c1 = function (a0) { return { liked: a0 }; };
function PublicationstComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "div", 1)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 12)(11, "div", 1)(12, "div", 3)(13, "video", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("play", function PublicationstComponent_div_8_Template_video_play_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.onVideoPlay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "source", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Tu navegador no admite la etiqueta de video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 16)(18, "div", 17)(19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PublicationstComponent_div_8_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const post_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.toggleLike(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 17)(25, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PublicationstComponent_div_8_Template_button_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const post_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.comenOpen(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " textsms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17)(30, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r1.user.avatar || "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", post_r1.user.name, " ", post_r1.user.fatherLastName, " ", post_r1.user.motherLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", post_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", post_r1.multimedia, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c1, post_r1.liked));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r1.numLike);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r1.user.avatar || "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
class PublicationstComponent {
    // Constructor de la clase, se inyectan el servicio de diálogo (MatDialog) y el servicio de publicaciones (PublicacioneServices)
    constructor(dialog, postService, commentsService, alertsService) {
        this.dialog = dialog;
        this.postService = postService;
        this.commentsService = commentsService;
        this.alertsService = alertsService;
        // Declaración de variables de clase
        this.lengthPost = 0; // Variable para almacenar el total de publicaciones
        this.pageSize = 5; // Tamaño de página, determina cuántas publicaciones se muestran por página
        this.currentPage = 0; // Página actual, rastrea la página actual que se está mostrando
        this.posts = []; // Arreglo para almacenar las publicaciones que se cargan
        this.scrollPosition = 0; // Variable para rastrear la posición de desplazamiento en la página
        // Variables para el control de carga y paginación
        this.loading = false; // Indica si se están cargando más publicaciones
        this.cargando = false; //
        this.currentVideoIndex = 0; // Variable para rastrear el índice del video actual
        // Variable para rastrear el video actual que se está reproduciendo
        this.currentPlayingVideo = null;
    }
    ngOnInit() {
        this.loadMorePosts(); // Cargar las primeras publicaciones al iniciar el componente
    }
    // Método para abrir el diálogo de comentarios, se muestra un cuadro de diálogo con los comentarios del post seleccionado
    comenOpen(post) {
        // Objeto donde contiene las propiedad para el modal de comentarios
        const matDialogConfig = {
            maxWidth: "400vw",
            maxHeight: "400vh",
            panelClass: "full-screen-dialog-comment-tokTik",
            data: post,
        };
        // Abriendo Modal
        const modalRef = this.dialog.open(_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent, matDialogConfig);
        modalRef.afterClosed().subscribe((result) => { });
    }
    // Método para abrir el diálogo para crear una nueva publicación
    addPost() {
        const modalRef = this.dialog.open(_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__.CreatePostComponent, {
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog-comment-tokTik",
        });
        modalRef.afterClosed().subscribe((result) => {
            this.posts = []; // Limpiar el arreglo de publicaciones para cargar nuevos datos
            this.getAllPostPage(0, 1); // 100 posts por carga--SE DEBE CAMBIAR
        });
    }
    // Método para obtener todas las publicaciones de una página específica y mostrarlas en el componente
    getAllPostPage(page, size) {
        console.log(page, size);
        this.postService.findAllPostTokTikPage(page, size).subscribe({
            next: (data) => {
                this.lengthPost = data.count;
                this.posts = this.posts.concat(data.list); // Concatenar los nuevos posts al final del array existente
                // Agregar eventos 'loadeddata' a todos los videos
                this.addVideoLoadedDataEvents();
                // Realizar el desplazamiento hacia el video recién cargado
                this.scrollToNextVideo();
            },
        });
    }
    // Método para agregar eventos 'loadeddata' a todos los videos
    addVideoLoadedDataEvents() {
        // Esperar a que se carguen todos los videos y luego agregar los eventos 'loadeddata'
        // Esto asegura que los eventos se agreguen a todos los videos después de que se han renderizado en el DOM
        setTimeout(() => {
            const videoElements = document.querySelectorAll(".video");
            videoElements.forEach((video) => {
                video.addEventListener("loadeddata", this.onVideoLoaded.bind(this));
            });
        }, 15);
    }
    // Método que se ejecuta cuando un video se ha cargado
    onVideoLoaded(event) {
        const targetVideo = event.target;
        targetVideo.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    // Método para realizar el desplazamiento hacia el video actual
    scrollToNextVideo() {
        if (this.videoElement && this.videoElement.nativeElement) {
            this.videoElement.nativeElement.scrollIntoView({ behavior: "smooth" });
        }
    }
    // Método para cargar más publicaciones
    loadMorePosts() {
        if (!this.loading) {
            this.loading = true;
            this.getAllPostPage(this.currentPage, 1); // 100 posts por carga--SE DEBE CAMBIAR
            this.currentPage++; // Avanzamos al siguiente grupo de 5 posts
            this.currentVideoIndex = this.posts.length - 1; // Actualizar el índice al final del array
            this.loading = false;
        }
    }
    // Método para manejar el evento de hacer clic en el botón 'LIKE' de una publicación
    toggleLike(row) {
        console.log(row);
        if (row.liked) {
            console.log("Restando likes");
            // this.postLiked=false;
            row.liked = false;
            row.numLike--;
            this.subtractLike(row.idPost);
        }
        else {
            // this.postLiked=true;
            row.numLike++;
            row.liked = true;
            console.log("Sumando like");
            this.sumLike(row.idPost);
        }
    }
    // Método para restar likes de una publicación
    subtractLike(id) {
        this.postService.subtractLike(id).subscribe({
            next: (data) => {
                console.log(data);
            },
        });
    }
    // Método para sumar likes a una publicación
    sumLike(id) {
        this.postService.sumLike(id).subscribe({
            next: (data) => {
                console.log(data);
            },
        });
    }
    // Método que se ejecuta cuando se inicia la reproducción de un video
    onVideoPlay(event) {
        const targetVideo = event.target;
        // Si hay un video reproduciéndose actualmente, lo detenemos
        if (this.currentPlayingVideo && this.currentPlayingVideo !== targetVideo) {
            this.currentPlayingVideo.pause();
        }
        // Asignamos el video actual como el video que se está reproduciendo
        this.currentPlayingVideo = targetVideo;
    }
}
PublicationstComponent.ɵfac = function PublicationstComponent_Factory(t) { return new (t || PublicationstComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_publicaciones_service__WEBPACK_IMPORTED_MODULE_2__.PublicacioneServices), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_comments_service__WEBPACK_IMPORTED_MODULE_3__.CommentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_alerts_service__WEBPACK_IMPORTED_MODULE_4__.AlertsService)); };
PublicationstComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PublicationstComponent, selectors: [["app-publications"]], viewQuery: function PublicationstComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
    } }, decls: 12, vars: 1, consts: [[1, "container", "justify-content-center", "align-items-center", "text"], [1, "row"], [1, "col"], [1, "col", "d-flex", "justify-content-center", "align-items-center"], ["mat-raised-button", "", "color", "link", 3, "click"], ["mat-raised-button", "", "color", "link", "routerLink", "/home/toktik/myposts"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "primary", 1, "custom-button", "next", 3, "click"], [1, "datU", 2, "width", "80vh"], [1, "col-1", "vid"], ["alt", "User", 1, "user_img", "d-block", "imUser", 3, "src"], [2, "font-weight", "bolder"], [1, "card-body"], ["autoplay", "", "controls", "", 1, "video", 3, "play"], ["videoElement", ""], ["type", "video/ogg", 3, "src"], [1, "ms-2", "actions"], [1, "text-center"], ["mat-mini-fab", "", "color", "link", 3, "ngClass", "click"], ["matBadgeOverlap", "false", "matBadgeColor", "warn"], ["mat-mini-fab", "", "color", "link", 1, "mt-2", 3, "click"], ["mat-icon-button", "", "color", "link", 1, "btnIm", "d-block", "align-items-center", "justify-content-center"], ["alt", "User", 1, "user_img", "imUser2", 3, "src"]], template: function PublicationstComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PublicationstComponent_Template_button_click_4_listener() { return ctx.addPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Crear publicaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Mis publicaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PublicationstComponent_div_8_Template, 32, 11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PublicationstComponent_Template_button_click_9_listener() { return ctx.loadMorePosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], styles: [".example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 48vh;\n  height: 85vh;\n  border-radius: 10pt;\n}\n\n.coment[_ngcontent-%COMP%] {\n  margin-top: 18pt;\n  width: 40vh;\n  height: 68vh;\n}\n\n@media (max-width: 530px) {\n  .actions[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 30px;\n    color: white;\n  }\n\n  .vid[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    width: 90vw;\n    height: 70vh;\n  }\n\n  .imUser2[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    display: block;\n  }\n\n  .datU[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 30px;\n    color: white;\n    position: absolute;\n    z-index: 9999;\n  }\n}\n\n.liked[_ngcontent-%COMP%] {\n  background-color: #ff00c8;\n  color: white;\n}\n\n\n\n.custom-button.next[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n}\n\n.custom-button.previous[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 16px;\n  top: 16px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 24px;\n}\n\n.imUser[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n  width: 60px;\n  height: 60px;\n}\n\n.imUser[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFFRjs7RUFBQTtJQUNFLGFBQUE7RUFHRjs7RUFEQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBSUY7O0VBREE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtFQUlGOztFQUNBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUEsK0NBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRiIsImZpbGUiOiJwdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnZpZGVvIHtcclxuICB3aWR0aDogNDh2aDtcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBwdDtcclxufVxyXG5cclxuLmNvbWVudCB7XHJcbiAgbWFyZ2luLXRvcDogMThwdDtcclxuICB3aWR0aDogNDB2aDtcclxuICBoZWlnaHQ6IDY4dmg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gIC5hY3Rpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAudmlkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC52aWRlbyB7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICB9XHJcblxyXG4gIC5pbVVzZXIyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC5kYXRVIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDIwMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbG9zIGJvdG9uZXMgZGUgY2FyZ2EgZGUgdmlkZW8gKi9cclxuLmN1c3RvbS1idXR0b24ubmV4dCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ucHJldmlvdXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTZweDtcclxuICB0b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLmltVXNlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4uaW1Vc2Vye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8652:
/*!*******************************************************!*\
  !*** ./src/app/pages/tiktok/tiktok-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiktokRoutingModule": () => (/* binding */ TiktokRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications/publications.component */ 1356);
/* harmony import */ var _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-publications/my-publications.component */ 5355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: "", redirectTo: "public", pathMatch: "full" },
    { path: "public", component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_0__.PublicationstComponent },
    { path: "myposts", component: _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_1__.MyPublicationstComponent }
];
class TiktokRoutingModule {
}
TiktokRoutingModule.ɵfac = function TiktokRoutingModule_Factory(t) { return new (t || TiktokRoutingModule)(); };
TiktokRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TiktokRoutingModule });
TiktokRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TiktokRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 4918:
/*!**************************************************!*\
  !*** ./src/app/pages/tiktok/tiktok.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiktokComponent": () => (/* binding */ TiktokComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_headert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/headert.component */ 5302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class TiktokComponent {
    constructor() { }
    ngOnInit() {
    }
}
TiktokComponent.ɵfac = function TiktokComponent_Factory(t) { return new (t || TiktokComponent)(); };
TiktokComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TiktokComponent, selectors: [["app-tiktok"]], decls: 2, vars: 0, template: function TiktokComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-headert")(1, "router-outlet");
    } }, directives: [_header_headert_component__WEBPACK_IMPORTED_MODULE_0__.HeadertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWt0b2suY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2395:
/*!***********************************************!*\
  !*** ./src/app/pages/tiktok/tiktok.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiktokModule": () => (/* binding */ TiktokModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tiktok_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiktok-routing.module */ 8652);
/* harmony import */ var _tiktok_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiktok.component */ 4918);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-input-file */ 9618);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _header_headert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/headert.component */ 5302);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publications/publications.component */ 1356);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments/comments.component */ 5206);
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-post/create-post.component */ 9712);
/* harmony import */ var _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-publications/my-publications.component */ 5355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);





























class TiktokModule {
}
TiktokModule.ɵfac = function TiktokModule_Factory(t) { return new (t || TiktokModule)(); };
TiktokModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TiktokModule });
TiktokModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _tiktok_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiktokRoutingModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_26__.InputFileModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TiktokModule, { declarations: [_tiktok_component__WEBPACK_IMPORTED_MODULE_1__.TiktokComponent,
        _header_headert_component__WEBPACK_IMPORTED_MODULE_2__.HeadertComponent,
        _publications_publications_component__WEBPACK_IMPORTED_MODULE_3__.PublicationstComponent,
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__.CommentsComponent,
        _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_5__.CreatePostComponent,
        _my_publications_my_publications_component__WEBPACK_IMPORTED_MODULE_6__.MyPublicationstComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _tiktok_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiktokRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
        ngx_input_file__WEBPACK_IMPORTED_MODULE_26__.InputFileModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule], exports: [_tiktok_component__WEBPACK_IMPORTED_MODULE_1__.TiktokComponent] }); })();


/***/ }),

/***/ 1092:
/*!*******************************************!*\
  !*** ./src/app/service/alerts.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsService": () => (/* binding */ AlertsService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class AlertsService {
    // Alerta para el exito de un proceso
    succesMessage(title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
        // Creación de la alerta 
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'success',
            title: title,
            text: message,
            showConfirmButton: false,
            timer: 2000
        });
    }
    // Alerta para un error de un proceso
    errorMessage(title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
        // Creación de la alerta 
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'error',
            title: title,
            text: message,
            showConfirmButton: false,
            timer: 2000
        });
    }
    // Alerta para un advertir de un proceso
    warningMessage(mensaje) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
        // Creación de la alerta 
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'warning',
            text: mensaje,
            showConfirmButton: false,
            timer: 2000
        });
    }
}
AlertsService.ɵfac = function AlertsService_Factory(t) { return new (t || AlertsService)(); };
AlertsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertsService, factory: AlertsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7809:
/*!*********************************************!*\
  !*** ./src/app/service/comments.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsService": () => (/* binding */ CommentsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CommentsService {
    constructor(http) {
        this.http = http;
        this.urlAdmin = "http://18.220.73.90:8081/comment";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ "Content-Type": "application/json" }),
        };
        this.httpOptionsFormData = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ "enctype": "multipart/form-data" }),
        };
    }
    findAllComment() {
        return this.http.get(`${this.urlAdmin}/findAllComment`, this.httpOptions);
    }
    findByIdComment(idComment) {
        return this.http.get(`${this.urlAdmin}/findByIdComment/${idComment}`, this.httpOptions);
    }
    findByPostComment(idComment) {
        return this.http.get(`${this.urlAdmin}/findByPostComment/${idComment}`, this.httpOptions);
    }
    createComment(commentDTO) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        headers = headers.append('enctype', 'multipart/form-data');
        const formData = new FormData();
        formData.append('user', commentDTO.user.toString());
        formData.append('post', commentDTO.post.toString());
        if (commentDTO.multipartFile != null) {
            formData.append('multipartFile', commentDTO.multipartFile);
        }
        formData.append('descripcion', commentDTO.descripcion);
        console.log(formData);
        return this.http.post(`${this.urlAdmin}/createComment/`, formData, { headers: headers });
    }
    updateComment(commentDTO) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        headers = headers.append('enctype', 'multipart/form-data');
        const formData = new FormData();
        formData.append('idComment', commentDTO.idComment.toString());
        formData.append('user', commentDTO.user.toString());
        formData.append('post', commentDTO.post.toString());
        if (commentDTO.multipartFile != null) {
            formData.append('multipartFile', commentDTO.multipartFile);
        }
        formData.append('descripcion', commentDTO.descripcion);
        formData.append('multimedia', commentDTO.multimedia);
        return this.http.put(`${this.urlAdmin}/updateComment/`, formData, { headers: headers });
    }
    deleteComment(idPost) {
        return this.http.delete(`${this.urlAdmin}/deleteComment/${idPost}`, this.httpOptions);
    }
    sumLike(idComment) {
        return this.http.put(`${this.urlAdmin}/sumLike/${idComment}`, this.httpOptions);
    }
    subtractLike(idComment) {
        return this.http.put(`${this.urlAdmin}/subtractLike/${idComment}`, this.httpOptions);
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CommentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4941:
/*!********************************************!*\
  !*** ./src/app/service/errores.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErroresService": () => (/* binding */ ErroresService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ErroresService {
    constructor() { }
    error(error) {
        if (error === 'Bad Request') {
            return "Ya existe un usuario con ese email";
        }
        return;
    }
}
ErroresService.ɵfac = function ErroresService_Factory(t) { return new (t || ErroresService)(); };
ErroresService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErroresService, factory: ErroresService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9855:
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







class LoginService {
    // Contructor para para la comunicación en el back ademas del router para derigirse a otra pagina
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("");
        this.tokenData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.servLogin;
    }
    get token$() {
        return this.token.asObservable();
    }
    get tokenData$() {
        return this.tokenData.asObservable();
    }
    // public fechaExpiracion: any;
    guardarLocalStorage(token) {
        localStorage.setItem('token', token);
    }
    checkToken() {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            this.logout();
        }
        this.token.next(token);
        console.log(this.token$);
    }
    // Busqueda con el id para el usuario comunicaión con el back 
    findById(id) {
        return this.http.get(`${this.url}/users/findById/${id}`);
    }
    // Comunicación para guardar el usuario con node
    createUser(user) {
        return this.http.post(`${this.url}/users/createUser`, user);
    }
    // Comunicación para actualizar el usuario con node
    updateUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        headers = headers.append('enctype', 'multipart/form-data');
        const id = this.decodeToken();
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('confirmed', user.confirmed);
        formData.append('email_verified', user.email_verified);
        formData.append('multi_factor_authentication', user.multi_factor_authentication);
        formData.append('father_last_name', user.father_last_name);
        formData.append('mother_last_name', user.mother_last_name);
        formData.append('age', user.age);
        formData.append('date_birth', user.date_birth);
        formData.append('avatar', user.avatar);
        return this.http.put(`${this.url}/users/updateUser/${id}`, formData, { headers: headers });
    }
    // Comunicación para eliminar el usuario con node
    deletUser(id) {
        return this.http.delete(`${this.url}/users/deleteUser/${id}`);
    }
    // Comunicación para la implementación del login 
    login(email, password) {
        const formularioData = {
            email: email,
            password: password
        };
        return this.http.post(`${this.url}/login/`, formularioData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
        }));
    }
    // Comunicación para la implementación del login 
    doubleAuthentication(usuario) {
        return this.http.post(`${this.url}/login/checkDoubleAuthentication`, usuario).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
            // this.fechaExpiracion = jwt_decode(resp.msg)
            // localStorage.setItem('fechaExpiracion', this.fechaExpiracion.exp);
            //guardando token
            this.token.next(resp.msg);
            this.guardarLocalStorage(resp.msg);
        }));
    }
    // Confirmación para el correo electronico con node js 
    confirmEmail(email_verified) {
        return this.http.get(`${this.url}/login/confirmEmail/${email_verified}`);
    }
    //Comunicación para olvidar password  con node js 
    forgetPassword(email) {
        console.log(email);
        return this.http.post(`${this.url}/login/forget-password`, email);
    }
    //Checar el token de password para olvidar password  con node js 
    checkTokenPassword(tokenPassword) {
        return this.http.get(`${this.url}/login/new-password/${tokenPassword}`);
    }
    //nuevo password con node js 
    newPassword(tokenPassword, password) {
        // console.log(nuevoPassword.password);
        return this.http.post(`${this.url}/login/new-password/${tokenPassword}`, password);
    }
    //Salir de la sesión con node js 
    logout() {
        //Remover el correo
        this.token.next("");
        this.tokenData.next(null);
        // localStorage.removeItem('token');
        localStorage.removeItem('token');
        // Cambiar la ruta 
        this.router.navigateByUrl('/auth/signin');
    }
    //decodificar token
    decodeToken() {
        const token = localStorage.getItem('token');
        const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"](token);
        return decodedToken.uid;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3225:
/*!*****************************************!*\
  !*** ./src/app/service/menu.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MenuService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    emit(event) {
        this.subject.next({ event });
    }
    listen() {
        return this.subject.asObservable();
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5959:
/*!**************************************************!*\
  !*** ./src/app/service/publicaciones.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioneServices": () => (/* binding */ PublicacioneServices)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 9855);




class PublicacioneServices {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.urlAdmin = "http://18.220.73.90:8081/post";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Content-Type": "application/json" }),
        };
        this.httpOptionsFormData = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "enctype": "multipart/form-data" }),
        };
    }
    findAllPost() {
        return this.http.get(`${this.urlAdmin}/findAllPost`, this.httpOptions);
    }
    findAllPostPage(page, size) {
        return this.http.get(`${this.urlAdmin}/findAllPost/${page}/${size}`, this.httpOptions);
    }
    findAllPostTokTikPage(page, size) {
        return this.http.get(`${this.urlAdmin}/findAllPostToktik/${page}/${size}`, this.httpOptions);
    }
    findByIdPost(idPost) {
        return this.http.get(`${this.urlAdmin}/findByIdPost/${idPost}`, this.httpOptions);
    }
    findByUserPost(type) {
        const idUser = this.authService.decodeToken();
        return this.http.get(`${this.urlAdmin}/findByUserPost/${idUser}/${type}`, this.httpOptions);
    }
    createPost(post, tipePost) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('enctype', 'multipart/form-data');
        return this.http.post(`${this.urlAdmin}/createPost/${tipePost}`, post, { headers: headers });
    }
    updatePost(tipo, post) {
        //HEADERS
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers = headers.append('enctype', 'multipart/form-data');
        //fORM DATA
        let formData = new FormData;
        formData.append("description", post.description);
        formData.append("idPost", post.idPost);
        return this.http.put(`${this.urlAdmin}/updatePost/${tipo}`, formData, { headers });
    }
    deletePost(idPost) {
        return this.http.delete(`${this.urlAdmin}/deletePost/${idPost}`, this.httpOptions);
    }
    sumLike(idPost) {
        return this.http.put(`${this.urlAdmin}/sumLike/${idPost}`, {}, this.httpOptions);
    }
    subtractLike(idPost) {
        return this.http.put(`${this.urlAdmin}/subtractLike/${idPost}`, {}, this.httpOptions);
    }
}
PublicacioneServices.ɵfac = function PublicacioneServices_Factory(t) { return new (t || PublicacioneServices)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
PublicacioneServices.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PublicacioneServices, factory: PublicacioneServices.ɵfac, providedIn: "root" });


/***/ }),

/***/ 7868:
/*!*******************************************************!*\
  !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeOnDestroyAdapter": () => (/* binding */ UnsubscribeOnDestroyAdapter)
/* harmony export */ });
/* harmony import */ var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-sink */ 2822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
class UnsubscribeOnDestroyAdapter {
    constructor() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
UnsubscribeOnDestroyAdapter.ɵfac = function UnsubscribeOnDestroyAdapter_Factory(t) { return new (t || UnsubscribeOnDestroyAdapter)(); };
UnsubscribeOnDestroyAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnsubscribeOnDestroyAdapter, factory: UnsubscribeOnDestroyAdapter.ɵfac });


/***/ }),

/***/ 1676:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsComponent": () => (/* binding */ FeatherIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-feather */ 5810);


class FeatherIconsComponent {
    constructor() { }
    ngOnInit() { }
}
FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) { return new (t || FeatherIconsComponent)(); };
FeatherIconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatherIconsComponent, selectors: [["app-feather-icons"]], inputs: { icon: "icon", class: "class" }, decls: 1, vars: 3, consts: [[3, "name"]], template: function FeatherIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7545:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsModule": () => (/* binding */ FeatherIconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feather-icons.component */ 1676);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 5810);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather/icons */ 3903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class FeatherIconsModule {
}
FeatherIconsModule.ɵfac = function FeatherIconsModule_Factory(t) { return new (t || FeatherIconsModule)(); };
FeatherIconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatherIconsModule });
FeatherIconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__.allIcons)], angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatherIconsModule, { declarations: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule], exports: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] }); })();


/***/ }),

/***/ 4872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 4409);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 4872);
/* harmony import */ var _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feather-icons/feather-icons.module */ 7545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule] }); })();


/***/ }),

/***/ 2822:
/*!************************************!*\
  !*** ./src/app/shared/sub-sink.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": () => (/* binding */ SubSink)
/* harmony export */ });
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
class SubSink {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    constructor() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    add(...subscriptions) {
        this._subs = this._subs.concat(subscriptions);
    }
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set sink(subscription) {
        this._subs.push(subscription);
    }
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    unsubscribe() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}


/***/ }),

/***/ 4750:
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
    static isValidUrl(url) {
        // Utiliza una expresión regular para verificar si es un enlace válido
        const pattern = new RegExp('^(https?:\\/\\/)?' + // Protocolo
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP (por ejemplo: 192.168.0.1)
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Puerto y ruta
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // Parámetros de consulta
            '(\\#[-a-z\\d_]*)?$', 'i'); // Fragmento
        return !!pattern.test(url);
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "https://18.220.73.90",
    servLogin: "http://18.220.73.90:3000/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map