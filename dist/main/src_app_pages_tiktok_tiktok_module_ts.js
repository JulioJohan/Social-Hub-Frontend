"use strict";
(self["webpackChunkkuber"] = self["webpackChunkkuber"] || []).push([["src_app_pages_tiktok_tiktok_module_ts"],{

/***/ 8652:
/*!*******************************************************!*\
  !*** ./src/app/pages/tiktok/tiktok-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiktokRoutingModule": () => (/* binding */ TiktokRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tiktok_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiktok.component */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _tiktok_component__WEBPACK_IMPORTED_MODULE_0__.TiktokComponent }];
class TiktokRoutingModule {
}
TiktokRoutingModule.ɵfac = function TiktokRoutingModule_Factory(t) { return new (t || TiktokRoutingModule)(); };
TiktokRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TiktokRoutingModule });
TiktokRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TiktokRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TiktokComponent {
    constructor() { }
    ngOnInit() {
    }
}
TiktokComponent.ɵfac = function TiktokComponent_Factory(t) { return new (t || TiktokComponent)(); };
TiktokComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TiktokComponent, selectors: [["app-tiktok"]], decls: 2, vars: 0, template: function TiktokComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tiktok works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWt0b2suY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tiktok_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiktok-routing.module */ 8652);
/* harmony import */ var _tiktok_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiktok.component */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class TiktokModule {
}
TiktokModule.ɵfac = function TiktokModule_Factory(t) { return new (t || TiktokModule)(); };
TiktokModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TiktokModule });
TiktokModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _tiktok_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiktokRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TiktokModule, { declarations: [_tiktok_component__WEBPACK_IMPORTED_MODULE_1__.TiktokComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _tiktok_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiktokRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tiktok_tiktok_module_ts.js.map