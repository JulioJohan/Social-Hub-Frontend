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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ 1991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    // {
    //   path: "",
    //   component: MainLayoutComponent,
    //   canActivate: [AuthGuard],
    //   children: [
    //     { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
    //     {
    //       path: "admin",
    //       canActivate: [AuthGuard],
    //       data: {
    //         role: Role.Admin,
    //       },
    //       loadChildren: () =>
    //         import("./admin/admin.module").then((m) => m.AdminModule),
    //     },
    //     {
    //       path: "employee",
    //       canActivate: [AuthGuard],
    //       data: {
    //         role: Role.Employee,
    //       },
    //       loadChildren: () =>
    //         import("./employee/employee.module").then((m) => m.EmployeeModule),
    //     },
    //     {
    //       path: "client",
    //       canActivate: [AuthGuard],
    //       data: {
    //         role: Role.Client,
    //       },
    //       loadChildren: () =>
    //         import("./client/client.module").then((m) => m.ClientModule),
    //     },
    //     {
    //       path: "calendar",
    //       loadChildren: () =>
    //         import("./calendar/calendar.module").then((m) => m.CalendarsModule),
    //     },
    //     {
    //       path: "task",
    //       loadChildren: () =>
    //         import("./task/task.module").then((m) => m.TaskModule),
    //     },
    //     {
    //       path: "contacts",
    //       loadChildren: () =>
    //         import("./contacts/contacts.module").then((m) => m.ContactsModule),
    //     },
    //     {
    //       path: "email",
    //       loadChildren: () =>
    //         import("./email/email.module").then((m) => m.EmailModule),
    //     },
    //     {
    //       path: "calendar",
    //       loadChildren: () =>
    //         import("./apps/apps.module").then((m) => m.AppsModule),
    //     },
    //     {
    //       path: "apps",
    //       loadChildren: () =>
    //         import("./apps/apps.module").then((m) => m.AppsModule),
    //     },
    //     {
    //       path: "widget",
    //       loadChildren: () =>
    //         import("./widget/widget.module").then((m) => m.WidgetModule),
    //     },
    //     {
    //       path: "ui",
    //       loadChildren: () => import("./ui/ui.module").then((m) => m.UiModule),
    //     },
    //     {
    //       path: "forms",
    //       loadChildren: () =>
    //         import("./forms/forms.module").then((m) => m.FormModule),
    //     },
    //     {
    //       path: "tables",
    //       loadChildren: () =>
    //         import("./tables/tables.module").then((m) => m.TablesModule),
    //     },
    //     {
    //       path: "media",
    //       loadChildren: () =>
    //         import("./media/media.module").then((m) => m.MediaModule),
    //     },
    //     {
    //       path: "charts",
    //       loadChildren: () =>
    //         import("./charts/charts.module").then((m) => m.ChartsModule),
    //     },
    //     {
    //       path: "timeline",
    //       loadChildren: () =>
    //         import("./timeline/timeline.module").then((m) => m.TimelineModule),
    //     },
    //     {
    //       path: "icons",
    //       loadChildren: () =>
    //         import("./icons/icons.module").then((m) => m.IconsModule),
    //     },
    //     {
    //       path: "extra-pages",
    //       loadChildren: () =>
    //         import("./extra-pages/extra-pages.module").then(
    //           (m) => m.ExtraPagesModule
    //         ),
    //     },
    //     {
    //       path: "maps",
    //       loadChildren: () =>
    //         import("./maps/maps.module").then((m) => m.MapsModule),
    //     },
    //     {
    //       path: "multilevel",
    //       loadChildren: () =>
    //         import("./multilevel/multilevel.module").then(
    //           (m) => m.MultilevelModule
    //         ),
    //     },
    //   ],
    // },
    // {
    //   path: "authentication",
    //   component: AuthLayoutComponent,
    //   loadChildren: () =>
    //     import("./authentication/authentication.module").then(
    //       (m) => m.AuthenticationModule
    //     ),
    // },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    { path: 'auth', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then(m => m.AuthModule) },
    { path: 'facebook', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_facebook_facebook_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/facebook/facebook.module */ 8181)).then(m => m.FacebookModule) },
    { path: 'tiktok', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tiktok_tiktok_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tiktok/tiktok.module */ 2395)).then(m => m.TiktokModule) },
    { path: 'home', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomeModule) },
    { path: "**", component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 6105);





class AppComponent {
    constructor(_router, location) {
        this._router = _router;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                // location.onPopState(() => {
                //   window.location.reload();
                // });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf("/") + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-loader")(1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 7876);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 6105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 129);
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ 2325);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 7050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ 3867);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 6300);
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ 2624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-loading-bar/router */ 239);
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/auth/auth.module */ 6621);
/* harmony import */ var _pages_Dialog_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Dialog/dialog-signin/dialog-signin.component */ 9940);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/home.module */ 7994);
/* harmony import */ var _pages_Dialog_dialog_signup_dialog_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/Dialog/dialog-signup/dialog-signup.component */ 779);
/* harmony import */ var _pages_Dialog_dialog_recover_pass_dialog_recover_pass_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Dialog/dialog-recover-pass/dialog-recover-pass.component */ 1179);
/* harmony import */ var _pages_Dialog_dialog_change_pass_dialog_change_pass_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/Dialog/dialog-change-pass/dialog-change-pass.component */ 7641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__.TranslateHttpLoader(http, "assets/i18n/", ".json");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS, useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS, useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorInterceptor, multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__.fakeBackendProvider,
    ], imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClient],
                },
            }),
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_29__.LoadingBarRouterModule,
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__.AuthModule,
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_16__.HomeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent,
        _pages_Dialog_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_15__.DialogSigninComponent,
        _pages_Dialog_dialog_signup_dialog_signup_component__WEBPACK_IMPORTED_MODULE_17__.DialogSignupComponent,
        _pages_Dialog_dialog_recover_pass_dialog_recover_pass_component__WEBPACK_IMPORTED_MODULE_18__.DialogRecoverPassComponent,
        _pages_Dialog_dialog_change_pass_dialog_change_pass_component__WEBPACK_IMPORTED_MODULE_19__.DialogChangePassComponent], imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_29__.LoadingBarRouterModule,
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_14__.AuthModule,
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_16__.HomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 1991:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
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
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 21, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
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

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: false,
                variant: "dark",
                theme_color: "black",
                logo_bg_color: "black",
                sidebar: {
                    collapsed: false,
                    backgroundColor: "dark", // options:  light & dark
                },
            },
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 4930);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ 9390);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 1782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 7431);
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/module-import.guard */ 6785);
/* harmony import */ var _service_direction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/direction.service */ 849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class CoreModule {
    constructor(parentModule) {
        (0,_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, "CoreModule");
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService,
        _service_direction_service__WEBPACK_IMPORTED_MODULE_5__.DirectionService,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] }); })();


/***/ }),

/***/ 9390:
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 1782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(["/authentication/signin"]);
                return false;
            }
            return true;
        }
        this.router.navigate(["/authentication/signin"]);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6785:
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 6300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 1782);




class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 3867:
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor),
/* harmony export */   "fakeBackendProvider": () => (/* binding */ fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/role */ 8252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





const users = [
    {
        id: 1,
        img: "assets/images/user/admin.jpg",
        username: "admin@software.com",
        password: "admin@123",
        firstName: "Sarah",
        lastName: "Smith",
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin,
        token: "admin-token",
    },
    {
        id: 2,
        img: "assets/images/user/employee.jpg",
        username: "employee@software.com",
        password: "employee@123",
        firstName: "Ashton",
        lastName: "Cox",
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Employee,
        token: "employee-token",
    },
    {
        id: 3,
        img: "assets/images/user/client.jpg",
        username: "client@software.com",
        password: "client@123",
        firstName: "Cara",
        lastName: "Stevens",
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Client,
        token: "client-token",
    },
];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith("/authenticate") && method === "POST":
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error("Username or password is incorrect");
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({ status: 200, body }));
        }
        function error(message) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({ error: { message } });
        }
        function unauthorized() {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({ status: 401, error: { message: "Unauthorised" } });
        }
        function isLoggedIn() {
            return headers.get("Authorization") === "Bearer fake-jwt-token";
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ 2624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 1782);


class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 8252:
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Employee"] = "Employee";
    Role["Client"] = "Client";
})(Role || (Role = {}));


/***/ }),

/***/ 1782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);





class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/authenticate`, {
            username,
            password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ success: false });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 849:
/*!***************************************************!*\
  !*** ./src/app/core/service/direction.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionService": () => (/* binding */ DirectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DirectionService {
    constructor() {
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.currentData = this.data.asObservable();
    }
    updateDirection(item) {
        this.data.next(item);
    }
}
DirectionService.ɵfac = function DirectionService_Factory(t) { return new (t || DirectionService)(); };
DirectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DirectionService, factory: DirectionService.ɵfac });


/***/ }),

/***/ 7431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": () => (/* binding */ ScriptStore),
/* harmony export */   "DynamicScriptLoaderService": () => (/* binding */ DynamicScriptLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: "Loaded" });
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 9964:
/*!**************************************************!*\
  !*** ./src/app/core/service/language.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 7514);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = ["en", "es", "de"];
        let browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem("lang")) {
            browserLang = localStorage.getItem("lang");
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de/) ? browserLang : "en");
    }
    setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem("lang", lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 4930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": () => (/* binding */ RightSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });


/***/ }),

/***/ 7050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/direction.service */ 849);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ 7876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 129);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 2325);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







class MainLayoutComponent {
    constructor(directoryService) {
        this.directoryService = directoryService;
        this.config = {};
        this.directoryService.currentData.subscribe((currentData) => {
            if (currentData) {
                this.direction = currentData;
            }
            else {
                if (localStorage.getItem("isRtl")) {
                    if (localStorage.getItem("isRtl") === "true") {
                        this.direction = "rtl";
                    }
                    else if (localStorage.getItem("isRtl") === "false") {
                        this.direction = "ltr";
                    }
                }
                else {
                    if (this.config.layout.rtl == true) {
                        this.direction = "rtl";
                    }
                    else {
                        this.direction = "ltr";
                    }
                }
            }
        });
    }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService)); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 5, vars: 1, consts: [[3, "dir"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "app-sidebar")(2, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.direction);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.RightSidebarComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 7876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 1782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/language.service */ 9964);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 1676);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);












function HeaderComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r2.defaultFlag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HeaderComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_a_25_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.setLanguage(item_r5.text, item_r5.lang, item_r5.flag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.langStoreValue === item_r5.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.text);
} }
const _c1 = function (a0) { return [a0]; };
function HeaderComponent_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 43)(1, "span", 44)(2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 46)(5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 48)(8, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-feather-icons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, notification_r8.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, notification_r8.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r8.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", notification_r8.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("user-menu-icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "x");
} }
const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, configService, authService, router, languageService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.languageService = languageService;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.listLang = [
            { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
            { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
            { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
        ];
        this.notifications = [
            {
                message: "Please check your mail",
                time: "14 mins ago",
                icon: "mail",
                color: "nfc-green",
                status: "msg-unread",
            },
            {
                message: "New Employee Added..",
                time: "22 mins ago",
                icon: "person_add",
                color: "nfc-blue",
                status: "msg-read",
            },
            {
                message: "Your leave is approved!! ",
                time: "3 hours ago",
                icon: "event_available",
                color: "nfc-orange",
                status: "msg-read",
            },
            {
                message: "Lets break for lunch...",
                time: "5 hours ago",
                icon: "lunch_dining",
                color: "nfc-blue",
                status: "msg-read",
            },
            {
                message: "Employee report generated",
                time: "14 mins ago",
                icon: "description",
                color: "nfc-green",
                status: "msg-read",
            },
            {
                message: "Please check your mail",
                time: "22 mins ago",
                icon: "mail",
                color: "nfc-red",
                status: "msg-read",
            },
            {
                message: "Salary credited...",
                time: "3 hours ago",
                icon: "paid",
                color: "nfc-purple",
                status: "msg-read",
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.img;
        if (userRole === "Admin") {
            this.homePage = "admin/dashboard/main";
        }
        else if (userRole === "Client") {
            this.homePage = "client/dashboard";
        }
        else if (userRole === "Employee") {
            this.homePage = "employee/dashboard";
        }
        else {
            this.homePage = "admin/dashboard/main";
        }
        this.langStoreValue = localStorage.getItem("lang");
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = "assets/images/flags/us.jpg";
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem("theme")) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem("menuOption")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("menuOption"));
        }
        else {
            this.renderer.addClass(this.document.body, "menu_" + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem("choose_logoheader")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_logoheader"));
        }
        else {
            this.renderer.addClass(this.document.body, "logo-" + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem("sidebar_status")) {
            if (localStorage.getItem("sidebar_status") === "close") {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
            else {
                this.renderer.removeClass(this.document.body, "side-closed");
                this.renderer.removeClass(this.document.body, "submenu-closed");
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
        }
    }
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
        this.languageService.setLanguage(lang);
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
        const hasClass = this.document.body.classList.contains("side-closed");
        if (hasClass) {
            this.renderer.removeClass(this.document.body, "side-closed");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
        else {
            this.renderer.addClass(this.document.body, "side-closed");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    logout() {
        this.subs.sink = this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/authentication/signin"]);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 66, vars: 28, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [3, "icon"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "langSelItem"], ["ngbDropdownToggle", "", 1, "lang-dropdown"], ["height", "16", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "lang-item", "dropdown-menu-right", "pullDown"], ["href", "javascript:void(0);", "class", "dropdown-item lang-item-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "nav-item", "btnNotification"], ["mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "350px", 3, "perfectScrollbar"], [1, "menu"], [1, "nfc-header"], [1, "mb-0"], ["href", "#", "onClick", "return false;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nfc-read-more"], ["ngbDropdown", "", 1, "nav-item", "user_profile", "btnUserDropdown"], ["ngbDropdownToggle", "", 1, "nav-notification-icons", "pt-0"], ["width", "32", "height", "32", "alt", "User", 1, "user_img", 3, "src"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["href", "javascript:void(0);", 3, "click"], ["height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "lang-item-list", 3, "ngClass", "click"], ["height", "12", 1, "flag-img", 3, "src"], [1, "align-middle"], ["href", "#", "onClick", "return false;", 3, "ngClass"], [1, "table-img", "msg-user"], [1, "material-icons-two-tone", "nfc-type-icon", 3, "ngClass"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc", "mt-2"], [1, "material-icons"], [1, "nfc-close"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0, 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Kuber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "ul", 10)(12, "li")(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ul", 13)(16, "li", 14)(17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " uihiuuh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, HeaderComponent_img_22_Template, 1, 1, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, HeaderComponent_img_23_Template, 1, 1, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HeaderComponent_a_25_Template, 4, 5, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li", 21)(27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "app-feather-icons", 12)(29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 24)(31, "div", 25)(32, "ul", 26)(33, "li", 27)(34, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Notitications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, HeaderComponent_a_37_Template, 13, 12, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Read All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li", 31)(41, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Ella Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 24)(46, "div", 34)(47, "ul", 26)(48, "li", 35)(49, "ul", 36)(50, "li")(51, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li")(55, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li")(59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li")(63, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_63_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", ctx.homePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("header-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("header-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "maximize");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("header-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "log-out");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": () => (/* binding */ PageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ 3571);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 1, vars: 0, consts: [["color", "#3173D6"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
    } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__.LoadingBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 2325:
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarComponent": () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 4930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/direction.service */ 849);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 1676);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);











const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class RightSidebarComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService, directionService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.directionService = directionService;
        this.selectedBgColor = "white";
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem("choose_skin")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_skin"));
            this.selectedBgColor = localStorage.getItem("choose_skin_active");
        }
        else {
            this.renderer.addClass(this.document.body, "theme-" + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem("menuOption")) {
            if (localStorage.getItem("menuOption") === "menu_dark") {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem("menuOption") === "menu_light") {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === "dark" ? true : false;
        }
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "dark") {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem("theme") === "light") {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === "dark" ? true : false;
        }
        if (localStorage.getItem("isRtl")) {
            if (localStorage.getItem("isRtl") === "true") {
                this.setRTLSettings();
            }
            else if (localStorage.getItem("isRtl") === "false") {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector(".settingSidebar .choose-theme li.active")
            .getAttribute("data-theme");
        this.renderer.removeClass(this.document.body, "theme-" + prevTheme);
        this.renderer.addClass(this.document.body, "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin", "theme-" + this.selectedBgColor);
        localStorage.setItem("choose_skin_active", this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        const menuOption = "menu_light";
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("menuOption", menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        const menuOption = "menu_dark";
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("menuOption", menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "dark");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_dark");
        this.renderer.removeClass(this.document.body, "logo-black");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
        }
        else {
            this.renderer.removeClass(this.document.body, "theme-" + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, "light");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_light");
        this.renderer.addClass(this.document.body, "logo-white");
        this.renderer.addClass(this.document.body, "theme-white");
        const theme = "light";
        const menuOption = "menu_light";
        this.selectedBgColor = "white";
        this.isDarkSidebar = false;
        localStorage.setItem("choose_logoheader", "logo-white");
        localStorage.setItem("choose_skin", "theme-white");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, "light");
        this.renderer.removeClass(this.document.body, "submenu-closed");
        this.renderer.removeClass(this.document.body, "menu_light");
        this.renderer.removeClass(this.document.body, "logo-white");
        if (localStorage.getItem("choose_skin")) {
            this.renderer.removeClass(this.document.body, localStorage.getItem("choose_skin"));
        }
        else {
            this.renderer.removeClass(this.document.body, "theme-" + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, "dark");
        this.renderer.addClass(this.document.body, "submenu-closed");
        this.renderer.addClass(this.document.body, "menu_dark");
        this.renderer.addClass(this.document.body, "logo-black");
        this.renderer.addClass(this.document.body, "theme-black");
        const theme = "dark";
        const menuOption = "menu_dark";
        this.selectedBgColor = "black";
        this.isDarkSidebar = true;
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("choose_skin", "theme-black");
        localStorage.setItem("theme", theme);
        localStorage.setItem("menuOption", menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 60;
        this.maxHeight = height + "";
        this.maxWidth = "500px";
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== "settingBtn") {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === "false" &&
            document.getElementsByTagName("html")[0].hasAttribute("dir")) {
            document.getElementsByTagName("html")[0].removeAttribute("dir");
            this.renderer.removeClass(this.document.body, "rtl");
            this.directionService.updateDirection("ltr");
        }
        else if (isrtl === "true" &&
            !document.getElementsByTagName("html")[0].hasAttribute("dir")) {
            document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
            this.renderer.addClass(this.document.body, "rtl");
            this.directionService.updateDirection("rtl");
        }
        localStorage.setItem("isRtl", isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        this.renderer.addClass(this.document.body, "rtl");
        this.isRtl = true;
        localStorage.setItem("isRtl", "true");
    }
    setLTRSettings() {
        document.getElementsByTagName("html")[0].removeAttribute("dir");
        this.renderer.removeClass(this.document.body, "rtl");
        this.isRtl = false;
        localStorage.setItem("isRtl", "false");
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_direction_service__WEBPACK_IMPORTED_MODULE_3__.DirectionService)); };
RightSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 54, vars: 33, consts: [[1, "settingSidebar", 3, "ngClass"], ["href", "javascript:void(0)", 1, "settingPanelToggle", 3, "click"], [3, "icon"], [1, "settingSidebar-body", "ps-container", "ps-theme-default", 3, "ngStyle", "perfectScrollbar"], [1, "fade", "show", "active"], [1, "setting-panel-header"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-10"], [1, "flex", "flex-wrap", "hiddenradio"], [1, "flex", "flex-col"], ["type", "radio", "name", "value", "value", "light", 3, "checked", "click"], ["src", "assets/images/light.png"], [1, "mt-1", "text-md", "text-center"], [1, "flex", "flex-col", "mt-3"], ["type", "radio", "name", "value", "value", "dark", 3, "checked", "click"], ["src", "assets/images/dark.png"], [1, "rightSetting"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "theme-setting-options"], [1, "choose-theme", "list-unstyled", "mb-0"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue"], [1, "mt-2", 3, "checked", "change"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_a_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-feather-icons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Setting Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Select Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "label")(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_13_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "label")(19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_19_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16)(24, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Sidebar Menu Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-button-toggle-group", 17)(27, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_27_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_29_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 6)(32, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Color Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 20)(35, "ul", 21)(36, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_36_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_38_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_40_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_42_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_44_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_46_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_48_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 16)(51, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "RTL Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_53_listener($event) { return ctx.switchDirection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "showSettingPanel" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("setting-sidebar-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isDarTheme == false ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isDarTheme == true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c1, ctx.selectedBgColor === "orange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](27, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](29, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isRtl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 9617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    {
        path: "",
        title: "MENUITEMS.MAIN.TEXT",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["All"],
        submenu: [],
    },
    // Admin Modules
    {
        path: "",
        title: "MENUITEMS.DASHBOARD.TEXT",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "monitor",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/dashboard/main",
                title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
                moduleName: "dashboard",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/dashboard/dashboard2",
                title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD2",
                moduleName: "dashboard",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.PROJECTS.TEXT",
        moduleName: "projects",
        iconType: "feather",
        icon: "book",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/projects/allProjects",
                title: "MENUITEMS.PROJECTS.LIST.ALL-PROJECTS",
                moduleName: "projects",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/projects/addProject",
                title: "MENUITEMS.PROJECTS.LIST.ADD-PROJECT",
                moduleName: "projects",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/projects/projectDetails",
                title: "MENUITEMS.PROJECTS.LIST.PROJECT-DETAILS",
                moduleName: "projects",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.EMPLOYEES.TEXT",
        moduleName: "employees",
        iconType: "feather",
        icon: "users",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/employees/allEmployees",
                title: "MENUITEMS.EMPLOYEES.LIST.ALL-EMPLOYEE",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/employees/add-employee",
                title: "MENUITEMS.EMPLOYEES.LIST.ADD-EMPLOYEE",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/employees/edit-employee",
                title: "MENUITEMS.EMPLOYEES.LIST.EDIT-EMPLOYEE",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/employees/employee-profile",
                title: "MENUITEMS.EMPLOYEES.LIST.PROFILE",
                moduleName: "employees",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.LEAVES.TEXT",
        moduleName: "leaves",
        iconType: "feather",
        icon: "trello",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/leaves/leave-requests",
                title: "MENUITEMS.LEAVES.LIST.LEAVE-REQUESTS",
                moduleName: "leaves",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
            {
                path: "/admin/leaves/leave-balance",
                title: "MENUITEMS.LEAVES.LIST.LEAVE-BALANCE",
                moduleName: "leaves",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
            {
                path: "/admin/leaves/leave-types",
                title: "MENUITEMS.LEAVES.LIST.LEAVE-TYPES",
                moduleName: "leaves",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.HOLIDAYS.TEXT",
        moduleName: "holidays",
        iconType: "feather",
        icon: "coffee",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/holidays/all-holidays",
                title: "MENUITEMS.HOLIDAYS.LIST.ALL-HOLIDAYS",
                moduleName: "holidays",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
            {
                path: "/admin/holidays/add-holiday",
                title: "MENUITEMS.HOLIDAYS.LIST.ADD-HOLIDAY",
                moduleName: "holidays",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
            {
                path: "/admin/holidays/edit-holiday",
                title: "MENUITEMS.HOLIDAYS.LIST.EDIT-HOLIDAY",
                moduleName: "holidays",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.ATTENDANCE.TEXT",
        moduleName: "attendance",
        iconType: "feather",
        icon: "edit",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/attendance/today",
                title: "MENUITEMS.ATTENDANCE.LIST.TODAY",
                moduleName: "attendance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
            {
                path: "/admin/attendance/employee",
                title: "MENUITEMS.ATTENDANCE.LIST.EMPLOYEE",
                moduleName: "attendance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
            {
                path: "/admin/attendance/attendance-sheet",
                title: "MENUITEMS.ATTENDANCE.LIST.SHEET",
                moduleName: "attendance",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["Admin"],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.CLIENTS.TEXT",
        moduleName: "clients",
        iconType: "feather",
        icon: "user",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/clients/all-clients",
                title: "MENUITEMS.CLIENTS.LIST.ALL-CLIENTS",
                moduleName: "clients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/clients/add-client",
                title: "MENUITEMS.CLIENTS.LIST.ADD-CLIENT",
                moduleName: "clients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/clients/edit-client",
                title: "MENUITEMS.CLIENTS.LIST.EDIT-CLIENT",
                moduleName: "clients",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.ACCOUNTS.TEXT",
        moduleName: "accounts",
        iconType: "feather",
        icon: "book-open",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/admin/accounts/all-payment",
                title: "MENUITEMS.ACCOUNTS.LIST.ALL-PAYMENTS",
                moduleName: "accounts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/accounts/add-payment",
                title: "MENUITEMS.ACCOUNTS.LIST.ADD-PAYMENT",
                moduleName: "accounts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/admin/accounts/invoice",
                title: "MENUITEMS.ACCOUNTS.LIST.INVOICE",
                moduleName: "accounts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    // Employee Modules
    {
        path: "/employee/dashboard",
        title: "MENUITEMS.EMPLOYEE.DASHBOARD",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/employee/attendance",
        title: "MENUITEMS.EMPLOYEE.ATTENDANCE",
        moduleName: "attendance",
        iconType: "feather",
        icon: "edit",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/employee/myleaves",
        title: "MENUITEMS.EMPLOYEE.MY-LEAVES",
        moduleName: "myleaves",
        iconType: "feather",
        icon: "file-text",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/employee/myteam",
        title: "MENUITEMS.EMPLOYEE.MYTEAM",
        moduleName: "myteam",
        iconType: "feather",
        icon: "users",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/employee/myprojects",
        title: "MENUITEMS.EMPLOYEE.MYPROJECTS",
        moduleName: "myprojects",
        iconType: "feather",
        icon: "database",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/employee/mytasks",
        title: "MENUITEMS.EMPLOYEE.MYTASKS",
        moduleName: "mytasks",
        iconType: "feather",
        icon: "command",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/employee/settings",
        title: "MENUITEMS.EMPLOYEE.SETTINGS",
        moduleName: "settings",
        iconType: "feather",
        icon: "settings",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    {
        path: "/apps/chat",
        title: "MENUITEMS.EMPLOYEE.CHAT",
        moduleName: "apps",
        iconType: "feather",
        icon: "message-square",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Employee"],
        submenu: [],
    },
    // Client Modules
    {
        path: "/client/dashboard",
        title: "MENUITEMS.CLIENT.DASHBOARD",
        moduleName: "dashboard",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Client"],
        submenu: [],
    },
    {
        path: "",
        title: "MENUITEMS.CLIENT.PROJECTS.TEXT",
        moduleName: "projects",
        iconType: "feather",
        icon: "book",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Client"],
        submenu: [
            {
                path: "/client/projects/myProjects",
                title: "MENUITEMS.CLIENT.PROJECTS.LIST.MY-PROJECTS",
                moduleName: "projects",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/client/projects/projectDetails",
                title: "MENUITEMS.CLIENT.PROJECTS.LIST.PROJECT-DETAILS",
                moduleName: "projects",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.CLIENT.SUPPORTS.TEXT",
        moduleName: "supports",
        iconType: "feather",
        icon: "slack",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Client"],
        submenu: [
            {
                path: "/client/supports/tickets",
                title: "MENUITEMS.CLIENT.SUPPORTS.LIST.TICKETS",
                moduleName: "supports",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/client/supports/ticketDetails",
                title: "MENUITEMS.CLIENT.SUPPORTS.LIST.TICKET-DETAILS",
                moduleName: "supports",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "/client/billing",
        title: "MENUITEMS.CLIENT.BILLING",
        moduleName: "billing",
        iconType: "feather",
        icon: "file-text",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Client"],
        submenu: [],
    },
    {
        path: "/apps/chat",
        title: "MENUITEMS.CLIENT.CHAT",
        moduleName: "apps",
        iconType: "feather",
        icon: "message-circle",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Client"],
        submenu: [],
    },
    {
        path: "/client/settings",
        title: "MENUITEMS.CLIENT.SETTINGS",
        moduleName: "settings",
        iconType: "feather",
        icon: "settings",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Client"],
        submenu: [],
    },
    // Common Modules
    {
        path: "",
        title: "Apps",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Employee"],
        submenu: [],
    },
    {
        path: "calendar",
        title: "Calendar",
        moduleName: "calendar",
        iconType: "feather",
        icon: "calendar",
        class: "",
        groupTitle: false,
        badge: "New",
        badgeClass: "badge bg-blue sidebar-badge float-end",
        role: ["Admin", "Employee"],
        submenu: [],
    },
    {
        path: "task",
        title: "Task",
        moduleName: "task",
        iconType: "feather",
        icon: "check-circle",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [],
    },
    {
        path: "contacts",
        title: "Contacts",
        moduleName: "contacts",
        iconType: "feather",
        icon: "user-plus",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Employee"],
        submenu: [],
    },
    {
        path: "",
        title: "Email",
        moduleName: "email",
        iconType: "feather",
        icon: "mail",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin", "Employee"],
        submenu: [
            {
                path: "/email/inbox",
                title: "Inbox",
                moduleName: "email",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/email/compose",
                title: "Compose",
                moduleName: "email",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/email/read-mail",
                title: "Read Email",
                moduleName: "email",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "More Apps",
        moduleName: "apps",
        iconType: "feather",
        icon: "star",
        class: "menu-toggle",
        groupTitle: false,
        badge: "4",
        badgeClass: "badge bg-orange sidebar-badge float-end",
        role: ["Admin"],
        submenu: [
            {
                path: "/apps/chat",
                title: "Chat",
                moduleName: "apps",
                iconType: "feather",
                icon: "chat",
                class: "",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/apps/dragdrop",
                title: "Drag & Drop",
                moduleName: "apps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/apps/contact-grid",
                title: "Contact Grid",
                moduleName: "apps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/apps/support",
                title: "Support",
                moduleName: "apps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Widgets",
        moduleName: "widget",
        iconType: "feather",
        icon: "gift",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/widget/chart-widget",
                title: "Chart Widget",
                moduleName: "widget",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/widget/data-widget",
                title: "Data Widget",
                moduleName: "widget",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Components",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "",
        groupTitle: true,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [],
    },
    {
        path: "",
        title: "User Interface (UI)",
        moduleName: "ui",
        iconType: "feather",
        icon: "copy",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/ui/alerts",
                title: "Alerts",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/badges",
                title: "Badges",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/chips",
                title: "Chips",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/modal",
                title: "Modal",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/buttons",
                title: "Buttons",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/expansion-panel",
                title: "Expansion Panel",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/bottom-sheet",
                title: "Bottom Sheet",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/dialogs",
                title: "Dialogs",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/cards",
                title: "Cards",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/labels",
                title: "Labels",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/list-group",
                title: "List Group",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/snackbar",
                title: "Snackbar",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/preloaders",
                title: "Preloaders",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/progressbars",
                title: "Progress Bars",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/tabs",
                title: "Tabs",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/typography",
                title: "Typography",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/ui/helper-classes",
                title: "Helper Classes",
                moduleName: "ui",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Forms",
        moduleName: "forms",
        iconType: "feather",
        icon: "layout",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/forms/form-controls",
                title: "Form Controls",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/advance-controls",
                title: "Advanced Controls",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/form-example",
                title: "Form Examples",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/form-validation",
                title: "Form Validation",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/wizard",
                title: "Form Wizard",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/forms/editors",
                title: "Editors",
                moduleName: "forms",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Tables",
        moduleName: "tables",
        iconType: "feather",
        icon: "grid",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/tables/basic-tables",
                title: "Basic Tables",
                moduleName: "tables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/tables/material-tables",
                title: "Material Tables",
                moduleName: "tables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/tables/ngx-datatable",
                title: "ngx-datatable",
                moduleName: "tables",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Medias",
        moduleName: "media",
        iconType: "feather",
        icon: "image",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/media/gallery",
                moduleName: "media",
                title: "Image Gallery",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Charts",
        moduleName: "charts",
        iconType: "feather",
        icon: "pie-chart",
        class: "menu-toggle",
        groupTitle: false,
        badge: "7",
        badgeClass: "badge bg-green sidebar-badge float-end",
        role: ["Admin"],
        submenu: [
            {
                path: "/charts/echart",
                title: "Echart",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/apex",
                title: "Apex",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/chartjs",
                title: "ChartJS",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/ngx-charts",
                title: "Ngx-Charts",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/charts/gauge",
                title: "Gauge",
                moduleName: "charts",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Timeline",
        moduleName: "timeline",
        iconType: "feather",
        icon: "git-merge",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/timeline/timeline1",
                title: "Timeline 1",
                moduleName: "timeline",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/timeline/timeline2",
                title: "Timeline 2",
                moduleName: "timeline",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Icons",
        moduleName: "icons",
        iconType: "feather",
        icon: "feather",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/icons/material",
                title: "Material Icons",
                moduleName: "icons",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/icons/font-awesome",
                title: "Font Awesome",
                moduleName: "icons",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Authentication",
        moduleName: "authentication",
        iconType: "feather",
        icon: "user-check",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/authentication/signin",
                title: "Sign In",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/signup",
                title: "Sign Up",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/forgot-password",
                title: "Forgot Password",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/locked",
                title: "Locked",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/page404",
                title: "404 - Not Found",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/authentication/page500",
                title: "500 - Server Error",
                moduleName: "authentication",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Extra Pages",
        moduleName: "extra-pages",
        iconType: "feather",
        icon: "anchor",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/extra-pages/profile",
                title: "Profile",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/pricing",
                title: "Pricing",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/invoice",
                title: "Invoice",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/faqs",
                title: "Faqs",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/extra-pages/blank",
                title: "Blank Page",
                moduleName: "extra-pages",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Maps",
        moduleName: "maps",
        iconType: "feather",
        icon: "map-pin",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/maps/google",
                title: "Google Map",
                moduleName: "maps",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "Multi level Menu",
        moduleName: "multilevel",
        iconType: "feather",
        icon: "chevrons-down",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["Admin"],
        submenu: [
            {
                path: "/multilevel/first1",
                title: "First",
                moduleName: "multilevel",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
            {
                path: "/",
                title: "Second",
                moduleName: "secondlevel",
                iconType: "",
                icon: "",
                class: "ml-sub-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [
                    {
                        path: "/multilevel/secondlevel/second1",
                        title: "Second 1",
                        moduleName: "secondlevel",
                        iconType: "",
                        icon: "",
                        class: "ml-sub-sub-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        submenu: [],
                    },
                    {
                        path: "/multilevel/secondlevel/second2",
                        title: "Second 2",
                        moduleName: "secondlevel",
                        iconType: "",
                        icon: "",
                        class: "ml-sub-sub-menu",
                        groupTitle: false,
                        badge: "",
                        badgeClass: "",
                        role: [""],
                        submenu: [],
                    },
                ],
            },
            {
                path: "/multilevel/first3",
                title: "Third",
                moduleName: "multilevel",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
            },
        ],
    },
];


/***/ }),

/***/ 129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 9617);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/role */ 8252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 1782);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 5810);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);











function SidebarComponent_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, sidebarItem_r1.title));
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_13_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, sidebarItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sidebarItem_r1.badge);
} }
function SidebarComponent_li_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.callLevel1Toggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-feather", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_li_13_a_2_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, sidebarItem_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", sidebarItem_r1.badge != "");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 25)(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const sidebarSubsubItem_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r17.callLevel3Toggle($event, sidebarSubsubItem_r16.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarSubsubItem_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r15.level3Menu === sidebarSubsubItem_r16.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r16.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", sidebarSubsubItem_r16.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, sidebarSubsubItem_r16.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, sidebarSubsubItem_r16.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, sidebarSubsubItem_r16.title), " ");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template, 4, 11, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", sidebarSubItem_r13.submenu);
} }
function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 25)(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const sidebarSubItem_r13 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r20.callLevel2Toggle($event, sidebarSubItem_r13.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_3_li_1_ul_4_Template, 2, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r12.level2Menu === sidebarSubItem_r13.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r13.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", sidebarSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, sidebarSubItem_r13.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, sidebarSubItem_r13.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, sidebarSubItem_r13.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", sidebarSubItem_r13.submenu.length > 0);
} }
function SidebarComponent_li_13_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_Template, 5, 12, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_li_13_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 6, 11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_Template, 2, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.level1Menu = "";
        this.level2Menu = "";
        this.level3Menu = "";
        this.headerHeight = 60;
        this.routerObj = null;
        const body = this.elementRef.nativeElement.closest("body");
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                // logic for select active menu in dropdown
                const role = ["admin", "employee", "client"];
                const currenturl = event.url.split("?")[0];
                const firstString = currenturl.split("/").slice(1)[0];
                if (role.indexOf(firstString) !== -1) {
                    this.level1Menu = event.url.split("/")[2];
                    this.level2Menu = event.url.split("/")[3];
                }
                else {
                    this.level1Menu = event.url.split("/")[1];
                    this.level2Menu = event.url.split("/")[2];
                }
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, "overlay-open");
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, "overlay-open");
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = "0";
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains("toggled");
        if (hasClass) {
            this.renderer.removeClass(event.target, "toggled");
        }
        else {
            this.renderer.addClass(event.target, "toggled");
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = "0";
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = "0";
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            this.userFullName =
                this.authService.currentUserValue.firstName +
                    " " +
                    this.authService.currentUserValue.lastName;
            this.userImg = this.authService.currentUserValue.img;
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter((x) => x.role.indexOf(userRole) !== -1 || x.role.indexOf("All") !== -1);
            if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Client) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Client;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Employee) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Employee;
            }
            else {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
            }
        }
        // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + "";
        this.listMaxWidth = "500px";
    }
    isOpen() {
        return this.bodyTag.classList.contains("overlay-open");
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, "ls-closed");
        }
        else {
            this.renderer.removeClass(this.document.body, "ls-closed");
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("submenu-closed")) {
            this.renderer.addClass(this.document.body, "side-closed-hover");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("side-closed-hover")) {
            this.renderer.removeClass(this.document.body, "side-closed-hover");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/authentication/signin"]);
            }
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, decls: 19, vars: 8, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["alt", "User Image", 1, "img-circle", "user-img-circle", 3, "src"], [1, "profile-usertitle"], [1, "sidebar-userpic-name"], [1, "profile-usertitle-job"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "menu-top", 3, "click"], ["name", "log-out", 1, "sidebarIcon"], [1, "hide-menu"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [1, "sidebarIcon", 3, "name"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "ul", 2)(4, "li", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i-feather", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.userFullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.userType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7641:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Dialog/dialog-change-pass/dialog-change-pass.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogChangePassComponent": () => (/* binding */ DialogChangePassComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);





class DialogChangePassComponent {
    constructor(matDialogRef, router) {
        this.matDialogRef = matDialogRef;
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.closeDialog();
        }, 5000);
    }
    closeDialog() {
        this.matDialogRef.close();
        this.router.navigateByUrl('/auth/signin');
    }
}
DialogChangePassComponent.ɵfac = function DialogChangePassComponent_Factory(t) { return new (t || DialogChangePassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
DialogChangePassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogChangePassComponent, selectors: [["app-dialog-change-pass"]], decls: 17, vars: 0, consts: [[2, "background-color", "white"], [1, "contenedor"], ["mat-mini-fab", "", "color", "secondary", 1, "elemento", 3, "click"], [1, "text-center", "text"], [1, "row", 2, "margin-top", "30px"], [1, "col-2"], [2, "font-size", "50px"], [1, "material-symbols-outlined"], [1, "col-10", "text", "text-Justified", "d-flex", "align-items-center"]], template: function DialogChangePassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body", 0)(3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogChangePassComponent_Template_button_click_4_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A1Mensaje de recuperaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "mat-icon", 6)(12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " check_small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Se ha guardado correctamente tu nueva contrase\u00F1a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".contenedor[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1jaGFuZ2UtcGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFDSiIsImZpbGUiOiJkaWFsb2ctY2hhbmdlLXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbGVtZW50byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 1179:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/Dialog/dialog-recover-pass/dialog-recover-pass.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogRecoverPassComponent": () => (/* binding */ DialogRecoverPassComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);







class DialogRecoverPassComponent {
    constructor(formBuilder, router, matDialogRef) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.matDialogRef = matDialogRef;
    }
    ngOnInit() {
        this.codeAuthForm = this.formBuilder.group({
            code1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
        this.codeAuthForm.valueChanges.subscribe(() => {
            this.checkFormCompletion();
        });
    }
    checkFormCompletion() {
        if (this.codeAuthForm.valid) {
            this.router.navigateByUrl("/auth/change-pass");
            this.closeDialog();
        }
    }
    closeDialog() {
        this.matDialogRef.close();
    }
}
DialogRecoverPassComponent.ɵfac = function DialogRecoverPassComponent_Factory(t) { return new (t || DialogRecoverPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
DialogRecoverPassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogRecoverPassComponent, selectors: [["app-dialog-recover-pass"]], decls: 18, vars: 1, consts: [[2, "background-color", "white"], [1, "contenedor"], ["mat-mini-fab", "", "color", "secondary", 1, "elemento", 3, "click"], [1, "text-center", "text"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "code1", "maxlength", "1"], ["type", "text", "formControlName", "code2", "maxlength", "1"], ["type", "text", "formControlName", "code3", "maxlength", "1"], ["type", "text", "formControlName", "code4", "maxlength", "1"], ["type", "text", "formControlName", "code5", "maxlength", "1"], [1, "text-Justified"]], template: function DialogRecoverPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body", 0)(3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogRecoverPassComponent_Template_button_click_4_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "C\u00F3digo de recuperaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6)(12, "input", 7)(13, "input", 8)(14, "input", 9)(15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Ingresa el c\u00F3digo enviado a tu correo electr\u00F3nico para recuperar tu contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.codeAuthForm);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxLengthValidator], styles: ["@charset \"UTF-8\";\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 80px;\n  text-align: center;\n  margin-right: 10px;\n  margin-left: 10px;\n  border-radius: 10px;\n  border: 2pt solid #0071BC;\n  border-radius: 5px;\n  font-size: 24px;\n  \n}\n.contenedor[_ngcontent-%COMP%] {\n  position: relative;\n}\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1yZWNvdmVyLXBhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQWlCLHdEQUFBO0FBR3JCO0FBQ0U7RUFDRSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFFSiIsImZpbGUiOiJkaWFsb2ctcmVjb3Zlci1wYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB0IHNvbGlkICMwMDcxQkM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBkZSBsYSBmdWVudGUgc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVsZW1lbnRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn0iXX0= */"] });


/***/ }),

/***/ 9940:
/*!***********************************************************************!*\
  !*** ./src/app/pages/Dialog/dialog-signin/dialog-signin.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogSigninComponent": () => (/* binding */ DialogSigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);







class DialogSigninComponent {
    constructor(formBuilder, router, matDialogRef) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.matDialogRef = matDialogRef;
    }
    ngOnInit() {
        this.codeAuthForm = this.formBuilder.group({
            code1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            code5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
        this.codeAuthForm.valueChanges.subscribe(() => {
            this.checkFormCompletion();
        });
    }
    checkFormCompletion() {
        if (this.codeAuthForm.valid) {
            this.closeDialog();
            this.router.navigateByUrl("/home");
        }
    }
    closeDialog() {
        this.matDialogRef.close();
    }
}
DialogSigninComponent.ɵfac = function DialogSigninComponent_Factory(t) { return new (t || DialogSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
DialogSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogSigninComponent, selectors: [["app-dialog-signin"]], decls: 18, vars: 1, consts: [[2, "background-color", "white"], [1, "contenedor"], ["mat-mini-fab", "", "color", "secondary", 1, "elemento", 3, "click"], [1, "text-center", "text"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "code1", "maxlength", "1"], ["type", "text", "formControlName", "code2", "maxlength", "1"], ["type", "text", "formControlName", "code3", "maxlength", "1"], ["type", "text", "formControlName", "code4", "maxlength", "1"], ["type", "text", "formControlName", "code5", "maxlength", "1"], [1, "text-Justified"]], template: function DialogSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body", 0)(3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogSigninComponent_Template_button_click_4_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "C\u00F3digo de acceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6)(12, "input", 7)(13, "input", 8)(14, "input", 9)(15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Ingresa el codigo enviado a tu correo electronico para acceder a tus redes sociales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.codeAuthForm);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxLengthValidator], styles: ["@charset \"UTF-8\";\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  width: 60px;\n  height: 80px;\n  text-align: center;\n  margin-right: 10px;\n  margin-left: 10px;\n  border-radius: 10px;\n  border: 2pt solid #0071BC;\n  border-radius: 5px;\n  font-size: 24px;\n  \n}\n.contenedor[_ngcontent-%COMP%] {\n  position: relative;\n}\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQWlCLHdEQUFBO0FBR3JCO0FBQ0U7RUFDRSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFFSiIsImZpbGUiOiJkaWFsb2ctc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB0IHNvbGlkICMwMDcxQkM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBkZSBsYSBmdWVudGUgc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVsZW1lbnRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn0iXX0= */"] });


/***/ }),

/***/ 779:
/*!***********************************************************************!*\
  !*** ./src/app/pages/Dialog/dialog-signup/dialog-signup.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogSignupComponent": () => (/* binding */ DialogSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);





class DialogSignupComponent {
    constructor(matDialogRef, router) {
        this.matDialogRef = matDialogRef;
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.closeDialog();
        }, 10000);
    }
    closeDialog() {
        this.matDialogRef.close();
        this.router.navigateByUrl('/auth/signin');
    }
}
DialogSignupComponent.ɵfac = function DialogSignupComponent_Factory(t) { return new (t || DialogSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
DialogSignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogSignupComponent, selectors: [["app-dialog-signup"]], decls: 17, vars: 0, consts: [[2, "background-color", "white"], [1, "contenedor"], ["mat-mini-fab", "", "color", "secondary", 1, "elemento", 3, "click"], [1, "text-center", "text"], [1, "row", 2, "margin-top", "30px"], [1, "col-2"], [2, "font-size", "50px"], [1, "material-symbols-outlined"], [1, "col-10", "text", "text-Justified", "d-flex", "align-items-center"]], template: function DialogSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body", 0)(3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogSignupComponent_Template_button_click_4_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A1Mensaje de registro!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "mat-icon", 6)(12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " check_small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " El usuario se ha registrado correctamente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".contenedor[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoiZGlhbG9nLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmVsZW1lbnRvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH0iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ 4772);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 7071);
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-password/recover-password.component */ 4001);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ 4529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







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
    {
        path: 'recover-pass',
        component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__.RecoverPasswordComponent
    },
    {
        path: 'change-pass',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 794);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 6835);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 4772);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 7071);
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recover-password/recover-password.component */ 4001);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ 4529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);















class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
        _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_4__.RecoverPasswordComponent,
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadgeModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Dialog_dialog_change_pass_dialog_change_pass_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/dialog-change-pass/dialog-change-pass.component */ 7641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











function ChangePasswordComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(formBuilder, route, router, matDialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
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
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.valid) {
            this.openDialog();
        }
    }
    openDialog() {
        const dialogConfig = {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog',
        };
        this.matDialog.open(_Dialog_dialog_change_pass_dialog_change_pass_component__WEBPACK_IMPORTED_MODULE_0__.DialogChangePassComponent, dialogConfig);
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 39, vars: 8, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section", "text"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text-center"], [1, "auth-signup-text", "text-muted"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/auth/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cambiar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Para poder recuperar la contrase\u00F1a, es necesario agregar una nueva contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Nueva contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ChangePasswordComponent_mat_error_20_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "mat-form-field", 12)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Confirma la nueva contrase\u00F1a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_27_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ChangePasswordComponent_mat_error_29_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17)(31, "div")(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19)(37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Cambiar contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("cpassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Dialog_dialog_recover_pass_dialog_recover_pass_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/dialog-recover-pass/dialog-recover-pass.component */ 1179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);










function RecoverPasswordComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RecoverPasswordComponent {
    constructor(formBuilder, route, router, matDialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)],
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
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.valid) {
            this.openDialog();
        }
    }
    openDialog() {
        const dialogConfig = {
            maxWidth: "100vw",
            maxHeight: "100vh",
            panelClass: "full-screen-dialog",
        };
        dialogConfig.disableClose = true;
        this.matDialog.open(_Dialog_dialog_recover_pass_dialog_recover_pass_component__WEBPACK_IMPORTED_MODULE_0__.DialogRecoverPassComponent, dialogConfig);
    }
}
RecoverPasswordComponent.ɵfac = function RecoverPasswordComponent_Factory(t) { return new (t || RecoverPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
RecoverPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecoverPasswordComponent, selectors: [["app-recover-password"]], decls: 28, vars: 3, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section", "text"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text-center"], [1, "auth-signup-text", "text-muted", "text", "text-Justified"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/auth/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"]], template: function RecoverPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Recuperar contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Agrega el email para enviarte un c\u00F3digo para recuperar tu contrase\u00F1a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RecoverPasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RecoverPasswordComponent_mat_error_18_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "div")(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _Dialog_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/dialog-signin/dialog-signin.component */ 9940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function SigninComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SigninComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.error);
} }
class SigninComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(formBuilder, matDialog, router) {
        super();
        this.formBuilder = formBuilder;
        this.matDialog = matDialog;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.error = "";
        this.hide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ["admin@software.com", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ["admin@123", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    get f() {
        return this.authForm.controls;
    }
    adminSet() {
        this.authForm.get("username").setValue("admin@software.com");
        this.authForm.get("password").setValue("admin@123");
    }
    employeeSet() {
        this.authForm.get("username").setValue("employee@software.com");
        this.authForm.get("password").setValue("employee@123");
    }
    clientSet() {
        this.authForm.get("username").setValue("client@software.com");
        this.authForm.get("password").setValue("client@123");
    }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.openDialogC();
        this.loading = false;
    }
    //Open dialogo de code signin
    openDialogC() {
        const dialogConfig = {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog',
        };
        dialogConfig.disableClose = true;
        // Example usage
        this.matDialog.open(_Dialog_dialog_signin_dialog_signin_component__WEBPACK_IMPORTED_MODULE_1__.DialogSigninComponent, dialogConfig);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 12, consts: [[1, "auth-container", "text"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text", "text-center"], [1, "auth-signup-text", "text-muted"], ["routerLink", "/auth/signup", 1, "sign-up-link"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username"], [4, "ngIf"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "password", 3, "type"], ["href", "#", "onClick", "return false;", "matSuffix", "", 1, "show-pwd-icon", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "form-check"], ["routerLink", "/auth/recover-pass", 1, "txt1"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "container-auth-form-btn"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Iniciar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00BFNecesita una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "mat-form-field", 13)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SigninComponent_mat_error_20_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11)(22, "div", 16)(23, "mat-form-field", 13)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_27_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SigninComponent_mat_error_30_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u00BFHas olvidado tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, SigninComponent_div_35_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Inisio de sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Dialog_dialog_signup_dialog_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/dialog-signup/dialog-signup.component */ 779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











function SignupComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(formBuilder, route, router, matDialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)],
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
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
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.valid) {
            this.openDialog();
        }
    }
    openDialog() {
        const dialogConfig = {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'full-screen-dialog',
        };
        this.matDialog.open(_Dialog_dialog_signup_dialog_signup_component__WEBPACK_IMPORTED_MODULE_0__.DialogSignupComponent, dialogConfig);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 53, vars: 10, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/SH.png)"], [1, "col-sm-6", "auth-form-section", "text"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg", "text-center"], [1, "auth-signup-text", "text-muted"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/auth/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Inscripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "llenar todo el formulario para realisar tu inscripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SignupComponent_mat_error_18_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "mat-form-field", 12)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupComponent_mat_error_25_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "mat-form-field", 12)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_mat_icon_click_32_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SignupComponent_mat_error_34_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10)(36, "div", 11)(37, "mat-form-field", 12)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Confirma tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_mat_icon_click_41_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SignupComponent_mat_error_43_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19)(45, "div")(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21)(51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.get("cpassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 1782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/menu.service */ 3225);
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/language.service */ 9964);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);












function HeaderComponent_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 38);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 38);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r2.defaultFlag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HeaderComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_a_27_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.setLanguage(item_r5.text, item_r5.lang, item_r5.flag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.langStoreValue === item_r5.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.text);
} }
const _c1 = function (a0) { return [a0]; };
function HeaderComponent_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 42)(1, "span", 43)(2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 45)(5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 47)(8, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-feather-icons", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, notification_r8.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, notification_r8.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r8.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", notification_r8.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("user-menu-icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "x");
} }
const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, configService, authService, router, serviseMenu, languageService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.serviseMenu = serviseMenu;
        this.languageService = languageService;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.menuOpen = true;
        this.listLang = [
            { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
            { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
            { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
        ];
        this.notifications = [
            {
                message: "Please check your mail",
                time: "14 mins ago",
                icon: "mail",
                color: "nfc-green",
                status: "msg-unread",
            },
            {
                message: "New Employee Added..",
                time: "22 mins ago",
                icon: "person_add",
                color: "nfc-blue",
                status: "msg-read",
            },
            {
                message: "Your leave is approved!! ",
                time: "3 hours ago",
                icon: "event_available",
                color: "nfc-orange",
                status: "msg-read",
            },
            {
                message: "Lets break for lunch...",
                time: "5 hours ago",
                icon: "lunch_dining",
                color: "nfc-blue",
                status: "msg-read",
            },
            {
                message: "Employee report generated",
                time: "14 mins ago",
                icon: "description",
                color: "nfc-green",
                status: "msg-read",
            },
            {
                message: "Please check your mail",
                time: "22 mins ago",
                icon: "mail",
                color: "nfc-red",
                status: "msg-read",
            },
            {
                message: "Salary credited...",
                time: "3 hours ago",
                icon: "paid",
                color: "nfc-purple",
                status: "msg-read",
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.img;
        if (true) {
            this.homePage = "admin/dashboard/main";
        }
        else {}
        this.langStoreValue = localStorage.getItem("lang");
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = "assets/images/flags/us.jpg";
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem("theme")) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem("menuOption")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("menuOption"));
        }
        else {
            this.renderer.addClass(this.document.body, "menu_" + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem("choose_logoheader")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_logoheader"));
        }
        else {
            this.renderer.addClass(this.document.body, "logo-" + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem("sidebar_status")) {
            if (localStorage.getItem("sidebar_status") === "close") {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
            else {
                this.renderer.removeClass(this.document.body, "side-closed");
                this.renderer.removeClass(this.document.body, "submenu-closed");
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, "side-closed");
                this.renderer.addClass(this.document.body, "submenu-closed");
            }
        }
    }
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
        this.languageService.setLanguage(lang);
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
        const hasClass = this.document.body.classList.contains("side-closed");
        if (hasClass) {
            this.renderer.removeClass(this.document.body, "side-closed");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
        else {
            this.renderer.addClass(this.document.body, "side-closed");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    logout() {
        this.subs.sink = this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/authentication/signin"]);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_3__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 64, vars: 7, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], [1, "material-symbols-outlined"], ["ngbDropdown", "", 1, "nav-item", "langSelItem"], ["ngbDropdownToggle", "", 1, "lang-dropdown"], ["height", "16", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "lang-item", "dropdown-menu-right", "pullDown"], ["href", "javascript:void(0);", "class", "dropdown-item lang-item-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "nav-item", "btnNotification"], ["mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "350px"], [1, "menu"], [1, "nfc-header"], [1, "mb-0"], ["href", "#", "onClick", "return false;", 3, "ngClass", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "nav-item", "user_profile", "btnUserDropdown"], ["ngbDropdownToggle", "", 1, "nav-notification-icons", "pt-0"], ["width", "32", "height", "32", "alt", "User", 1, "user_img", 3, "src"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["href", "javascript:void(0);", 3, "click"], ["height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "lang-item-list", 3, "ngClass", "click"], ["height", "12", 1, "flag-img", 3, "src"], [1, "align-middle"], ["href", "#", "onClick", "return false;", 3, "ngClass"], [1, "table-img", "msg-user"], [1, "material-icons-two-tone", "nfc-type-icon", 3, "ngClass"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc", "mt-2"], [1, "material-icons"], [1, "nfc-close"], [3, "icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0, 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Kuber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "ul", 10)(12, "li")(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ul", 12)(17, "li", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon")(20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " fullscreen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li", 16)(23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, HeaderComponent_img_24_Template, 1, 1, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HeaderComponent_img_25_Template, 1, 1, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, HeaderComponent_a_27_Template, 4, 5, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 21)(29, "button", 22)(30, "mat-icon")(31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "ul", 26)(37, "li", 27)(38, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Notitications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, HeaderComponent_a_41_Template, 13, 12, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 30)(43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Ella Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 24)(48, "div", 33)(49, "ul", 26)(50, "li", 34)(51, "ul", 35)(52, "li")(53, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "li")(56, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li")(59, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "li")(62, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_62_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", ctx.homePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/menu.service */ 3225);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





class HomeComponent {
    constructor(serviceMenu) {
        this.serviceMenu = serviceMenu;
        this.openMenu = true;
        this.iniciarAnimacion = false;
    }
    ngOnInit() {
        this.serviceMenu.listen().subscribe((event) => {
            this.openMenu = event.event;
            this.iniciarAnimacion = true;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 3, consts: [[1, "conteiner", 2, "width", "90%"], [1, "row"], [1, "col-1", 3, "ngClass"], [1, "col"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " One ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " One of three columns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("inicio-animacion", ctx.iniciarAnimacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.openMenu ? "c1" : "c2");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: [".c1[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 93vh;\n  background-color: white;\n}\n\n.c2[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 93vh;\n  background-color: white;\n}\n\n.inicio-animacion[_ngcontent-%COMP%] {\n  transition: width 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYzEge1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBoZWlnaHQ6IDkzdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jMiB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA5M3ZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5pY2lvLWFuaW1hY2lvbiB7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5245);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3340);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);












class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule] }); })();


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
    apiUrl: "http://localhost:4200",
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