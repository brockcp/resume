(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Brock Patterson | Github';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"]
                //FontAwesomeModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n\n      <a download=\"brock-patterson-resume.pdf.zip\" target=\"_blank\" href=\"assets/brock-patterson-resume.pdf.zip\"\n        class='m-lr-10'\n        ngbTooltip=\"download my resume\" placement=\"left\">\n          <fa-icon [icon]=\"faFileDownload\" [classes]=\"['color-1b', 'font-size20']\"></fa-icon>\n      </a>\n      <a href=\"https://www.linkedin.com/in/brockcp/\"\n        target=\"-blank\" class='m-lr-10'\n        ngbTooltip=\"LinkedIn\" placement=\"top\">\n          <fa-icon [icon]=\"faLinkedin\" [classes]=\"['color-1b', 'font-size20']\"></fa-icon>\n      </a>\n      <a href=\"https://github.com/brockcp\"\n        target=\"-blank\" class='m-lr-10'\n        ngbTooltip=\"Github\" placement=\"top\">\n          <fa-icon [icon]=\"faGithub\" [classes]=\"['color-1b', 'font-size20']\"></fa-icon>\n      </a>\n      <a href=\"mailto:brockpatterson@gmail.com\"\n        class=\"m-lr-10\"\n        ngbTooltip=\"email me\" placement=\"right\">\n          <fa-icon [icon]=\"faEnvelope\" [classes]=\"['color-1b', 'font-size20']\"></fa-icon>\n      </a>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .tooltip-inner {\n  width: 400px;\n  color: white;\n  background-color: #999999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icm9ja3BhdHRlcnNvbi9HL1dEL1JFU1VNRS9zcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osYUFBVztFQUNYLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLnRvb2x0aXAtaW5uZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGNvbG9yOndoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileDownload"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"];
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/intro/intro.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/intro/intro.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-color-1 p-20\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h1 class=\"font-size40 font-300 color-1a\">Hello!</h1>\n      <h2 class=\"stretchRight animated font-size36\">My name is <span class=\"font-500 color-1b\">Brock</span>.</h2>\n      <h2 class=\"stretchLeft animated font-size36\">I am a <span class=\"font-300 color-1b\">Front End </span> <span class=\"font-300 color-1c\">Web Developer</span>...</h2>\n      <h2 class=\"stretchRight animated font-size26\">in South Orange County, California</h2>\n      <h2 class=\"text-center introSub-container\"></h2>\n      <i class=\"fa fa-chevron-down\"></i>\n    </div>\n  </div>\n</div>\n\n<div id=\"hero-image\"></div>\n\n<div class=\"container-fluid bg-color-1 p-20\">\n  <h1 class=\"text-center font-size40 font-300 color-1a\">Fascination!</h1>\n  <hr class=\"hr-skills\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-8 offset-md-2\">\n      <p class=\"font-size26 font-200 line-height-13\">\n        <span class=\"font-size30 font-200 color-1b\">One day in 2009 I found myself staring into the browser on my computer screen and wondering just what in the world was going on in there. </span>\n        <span class=\"font-size30 font-200 color-1c\">It seemed a good way to find out might be to try and build a website. And so I did...</span><br>\n        <span class=\"font-size30 font-200 color-1b\">Well, ten years have passed and I still feel like that fascinated boy every time I learn/build something new in web development.</span>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/intro/intro.component.scss":
/*!***********************************************!*\
  !*** ./src/app/ui/intro/intro.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hero-image {\n  height: 400px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 0;\n  -webkit-transition: opacity 3s ease;\n  transition: opacity 3s ease; }\n\n@media (min-width: 1200px) {\n  #hero-image {\n    background-attachment: fixed; } }\n\n#hero-image.add-fade {\n  opacity: 1; }\n\n.animated {\n  -webkit-animation-duration: 3s;\n  animation-duration: 3s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.stretchLeft {\n  animation-name: stretchLeft;\n  animation-duration: 1.5s;\n  animation-timing-function: ease-out;\n  transform-origin: 100% 0%;\n  -webkit-animation-name: stretchLeft;\n  -webkit-animation-duration: 1.5s;\n  -webkit-animation-timing-function: ease-out;\n  -webkit-transform-origin: 100% 0%;\n  -ms-transform-origin: 100% 0%; }\n\n@keyframes stretchLeft {\n  0% {\n    -webkit-transform: scaleX(0.3);\n            transform: scaleX(0.3); }\n  40% {\n    -webkit-transform: scaleX(1.02);\n            transform: scaleX(1.02); }\n  60% {\n    -webkit-transform: scaleX(0.98);\n            transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01);\n            transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(0.98);\n            transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01);\n            transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); } }\n\n@-webkit-keyframes stretchLeft {\n  0% {\n    -webkit-transform: scaleX(0.3); }\n  40% {\n    -webkit-transform: scaleX(1.02); }\n  60% {\n    -webkit-transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(1); } }\n\n.stretchRight {\n  animation-name: stretchRight;\n  animation-duration: 1.5s;\n  animation-timing-function: ease-out;\n  transform-origin: 0% 0%;\n  -webkit-animation-name: stretchRight;\n  -webkit-animation-duration: 1.5s;\n  -webkit-animation-timing-function: ease-out;\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%; }\n\n@keyframes stretchRight {\n  0% {\n    -webkit-transform: scaleX(0.3);\n            transform: scaleX(0.3); }\n  40% {\n    -webkit-transform: scaleX(1.02);\n            transform: scaleX(1.02); }\n  60% {\n    -webkit-transform: scaleX(0.98);\n            transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01);\n            transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(0.98);\n            transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01);\n            transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); } }\n\n@-webkit-keyframes stretchRight {\n  0% {\n    -webkit-transform: scaleX(0.3); }\n  40% {\n    -webkit-transform: scaleX(1.02); }\n  60% {\n    -webkit-transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(0.98); }\n  80% {\n    -webkit-transform: scaleX(1.01); }\n  100% {\n    -webkit-transform: scaleX(1); } }\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n          animation-name: bounceInUp;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icm9ja3BhdHRlcnNvbi9HL1dEL1JFU1VNRS9zcmMvYXBwL3VpL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLDZCQUE0QjtFQUM1QixtQ0FBa0M7RUFDbEMsdUJBQXNCO0VBQ3RCLFdBQVM7RUFDVCxvQ0FDRjtFQURFLDRCQUNGLEVBQUM7O0FBQ0Q7RUFDRTtJQUNFLDZCQUE0QixFQUM3QixFQUFBOztBQUVIO0VBQ0UsV0FBVSxFQUNYOztBQUdEO0VBQ0MsK0JBQThCO0VBQzdCLHVCQUFzQjtFQUN0QixzQ0FBcUM7RUFDckMsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0MsNEJBQTJCO0VBQzNCLHlCQUF3QjtFQUN4QixvQ0FBbUM7RUFDbEMsMEJBQXlCO0VBQzFCLG9DQUFtQztFQUNuQyxpQ0FBZ0M7RUFDaEMsNENBQTJDO0VBQzNDLGtDQUFpQztFQUNqQyw4QkFBNkIsRUFDN0I7O0FBRUQ7RUFDQztJQUFJLCtCQUFzQjtZQUF0Qix1QkFBc0IsRUFBQTtFQUMxQjtJQUFLLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUM1QjtJQUFLLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUM1QjtJQUFLLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUM1QjtJQUFNLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUM3QjtJQUFLLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUM1QjtJQUFNLDZCQUFvQjtZQUFwQixxQkFBb0IsRUFBQSxFQUFBOztBQUczQjtFQUNDO0lBQUksK0JBQThCLEVBQUE7RUFDbEM7SUFBSyxnQ0FBK0IsRUFBQTtFQUNwQztJQUFLLGdDQUErQixFQUFBO0VBQ3BDO0lBQUssZ0NBQStCLEVBQUE7RUFDcEM7SUFBTSxnQ0FBK0IsRUFBQTtFQUNyQztJQUFLLGdDQUErQixFQUFBO0VBQ3BDO0lBQU0sNkJBQTRCLEVBQUEsRUFBQTs7QUFHbkM7RUFDQyw2QkFBNEI7RUFDNUIseUJBQXdCO0VBQ3hCLG9DQUFtQztFQUNuQyx3QkFBdUI7RUFDdkIscUNBQW9DO0VBQ3BDLGlDQUFnQztFQUNoQyw0Q0FBMkM7RUFDM0MsZ0NBQStCO0VBQy9CLDRCQUEyQixFQUMzQjs7QUFFRDtFQUNDO0lBQUksK0JBQXNCO1lBQXRCLHVCQUFzQixFQUFBO0VBQzFCO0lBQUssZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBQzVCO0lBQUssZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBQzVCO0lBQUssZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBQzVCO0lBQU0sZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBQzdCO0lBQUssZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBQzVCO0lBQU0sNkJBQW9CO1lBQXBCLHFCQUFvQixFQUFBLEVBQUE7O0FBRzNCO0VBQ0M7SUFBSSwrQkFBOEIsRUFBQTtFQUNsQztJQUFLLGdDQUErQixFQUFBO0VBQ3BDO0lBQUssZ0NBQStCLEVBQUE7RUFDcEM7SUFBSyxnQ0FBK0IsRUFBQTtFQUNwQztJQUFNLGdDQUErQixFQUFBO0VBQ3JDO0lBQUssZ0NBQStCLEVBQUE7RUFDcEM7SUFBTSw2QkFBNEIsRUFBQSxFQUFBOztBQUduQztFQUNFO0lBQ0UsdUVBQW1FO1lBQW5FLCtEQUFtRSxFQUFBO0VBRXJFO0lBQU8sV0FBVTtJQUFFLDZDQUFvQztZQUFwQyxxQ0FBb0MsRUFBQTtFQUN2RDtJQUFNLFdBQVU7SUFBRSw0Q0FBbUM7WUFBbkMsb0NBQW1DLEVBQUE7RUFDckQ7SUFBTSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFDeEM7SUFBTSwyQ0FBa0M7WUFBbEMsbUNBQWtDLEVBQUE7RUFDeEM7SUFBSyx3Q0FBK0I7WUFBL0IsZ0NBQStCO0lBQUUsV0FBUyxFQUFBLEVBQUE7O0FBUmpEO0VBQ0U7SUFDRSx1RUFBbUU7WUFBbkUsK0RBQW1FLEVBQUE7RUFFckU7SUFBTyxXQUFVO0lBQUUsNkNBQW9DO1lBQXBDLHFDQUFvQyxFQUFBO0VBQ3ZEO0lBQU0sV0FBVTtJQUFFLDRDQUFtQztZQUFuQyxvQ0FBbUMsRUFBQTtFQUNyRDtJQUFNLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUN4QztJQUFNLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUN4QztJQUFLLHdDQUErQjtZQUEvQixnQ0FBK0I7SUFBRSxXQUFTLEVBQUEsRUFBQTs7QUFHakQ7RUFDRSxtQ0FBMEI7VUFBMUIsMkJBQTBCO0VBQzFCLCtCQUFzQjtVQUF0Qix1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC91aS9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZXJvLWltYWdlIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTowO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2Vcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAjaGVyby1pbWFnZXtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG59XG4jaGVyby1pbWFnZS5hZGQtZmFkZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8vQU5JTUFUSU9OUy8vXG4uYW5pbWF0ZWQge1xuIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uc3RyZXRjaExlZnR7XG5cdGFuaW1hdGlvbi1uYW1lOiBzdHJldGNoTGVmdDtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcblx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3RyZXRjaExlZnQ7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuXHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XG5cdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xufVxuXG5Aa2V5ZnJhbWVzIHN0cmV0Y2hMZWZ0IHtcblx0MCUge3RyYW5zZm9ybTogc2NhbGVYKDAuMyk7fVxuXHQ0MCUge3RyYW5zZm9ybTogc2NhbGVYKDEuMDIpO31cblx0NjAlIHt0cmFuc2Zvcm06IHNjYWxlWCgwLjk4KTt9XG5cdDgwJSB7dHJhbnNmb3JtOiBzY2FsZVgoMS4wMSk7fVxuXHQxMDAlIHt0cmFuc2Zvcm06IHNjYWxlWCgwLjk4KTt9XG5cdDgwJSB7dHJhbnNmb3JtOiBzY2FsZVgoMS4wMSk7fVxuXHQxMDAlIHt0cmFuc2Zvcm06IHNjYWxlWCgxKTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzdHJldGNoTGVmdCB7XG5cdDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuMyk7fVxuXHQ0MCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4wMik7fVxuXHQ2MCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMC45OCk7fVxuXHQ4MCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4wMSk7fVxuXHQxMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuOTgpO31cblx0ODAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMDEpO31cblx0MTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTt9XG59XG5cbi5zdHJldGNoUmlnaHR7XG5cdGFuaW1hdGlvbi1uYW1lOiBzdHJldGNoUmlnaHQ7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzdHJldGNoUmlnaHQ7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuXHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG59XG5cbkBrZXlmcmFtZXMgc3RyZXRjaFJpZ2h0IHtcblx0MCUge3RyYW5zZm9ybTogc2NhbGVYKDAuMyk7fVxuXHQ0MCUge3RyYW5zZm9ybTogc2NhbGVYKDEuMDIpO31cblx0NjAlIHt0cmFuc2Zvcm06IHNjYWxlWCgwLjk4KTt9XG5cdDgwJSB7dHJhbnNmb3JtOiBzY2FsZVgoMS4wMSk7fVxuXHQxMDAlIHt0cmFuc2Zvcm06IHNjYWxlWCgwLjk4KTt9XG5cdDgwJSB7dHJhbnNmb3JtOiBzY2FsZVgoMS4wMSk7fVxuXHQxMDAlIHt0cmFuc2Zvcm06IHNjYWxlWCgxKTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzdHJldGNoUmlnaHQge1xuXHQwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwLjMpO31cblx0NDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMDIpO31cblx0NjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuOTgpO31cblx0ODAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMDEpO31cblx0MTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwLjk4KTt9XG5cdDgwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjAxKTt9XG5cdDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7fVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgfVxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO31cbiAgNjAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7fVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO31cbiAgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTt9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgb3BhY2l0eToxO31cbn1cblxuLmJvdW5jZUluVXAge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/intro/intro.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/intro/intro.component.ts ***!
  \*********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('<img/>').attr('src', 'assets/img/sam.jpg').on('load', function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).remove(); //clean
                jquery__WEBPACK_IMPORTED_MODULE_2__('#hero-image').css('background-image', 'url(assets/img/sam.jpg');
                jquery__WEBPACK_IMPORTED_MODULE_2__('#hero-image').addClass('add-fade');
            });
        });
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/ui/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/ui/intro/intro.component.scss")]
        })
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-intro></app-intro>\n<app-skills></app-skills>\n<app-works></app-works>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ui/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/nav/nav.component.html":
/*!*******************************************!*\
  !*** ./src/app/ui/nav/nav.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\">brock patterson</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <div class=\"navbar-nav mr-auto\">\n      <a class=\"nav-item nav-link active\" href=\"#skills\">skills</a>\n      <a class=\"nav-item nav-link\" href=\"#works\">works</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/nav/nav.component.scss":
/*!*******************************************!*\
  !*** ./src/app/ui/nav/nav.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/nav/nav.component.ts":
/*!*****************************************!*\
  !*** ./src/app/ui/nav/nav.component.ts ***!
  \*****************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/ui/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/ui/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/ui/skills/skills.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/skills/skills.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"skills\">\n\n  <div class=\"skills-image\"></div>\n\n  <div class=\"container-fluid bg-color-1 p-b-50\">\n    <div class=\"col-xs-12 col-md-8 offset-md-2 p-t-30\">\n      <p class=\"color-1a font-size26 font-200\">During these years I have learned quite a lot, besides the obvious:\n      </p>\n    </div>\n    <hr class=\"hr-skills\">\n    <h1 class=\"text-center font-300 p-20 color-1a\"> Skillset</h1>\n    <div class=\"row\">\n\n      <!--HTML & CSS-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"200\">\n        <span class=\"icons-container\">\n            <i class=\"icon-html5 font-size100 color-2c\"></i>\n            <i class=\"icon-css3 font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">HTML & CSS</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>10 years writing HTML and CSS. Several projects built with <span class=\"font-500\">HTML5</span>, <span class=\"font-500\">CSS3 </span>and <span class=\"font-500\">Bootstrap4</span>.</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/blob/d17a52b5e8410efc6747307dab19dffc46bb3f98/src/index.html#L47\" target=\"_blank\" class=\"linkcolor-1a\">Custom code and Bootstrap working together</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/tree/master/src/scss\" target=\"_blank\" class=\"linkcolor-1a\">SCSS Breakdown</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/blob/d17a52b5e8410efc6747307dab19dffc46bb3f98/src/index.html#L23\" target=\"_blank\" class=\"linkcolor-1a\">Adding Animation to Bootstrap Nav</a></li>\n        </ul>\n      </div>\n      <!--JS-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"300\">\n        <span class=\"icons-container\">\n            <i class=\"icon-angular-alt font-size100 color-2c\"></i>\n            <i class=\"icon-reactjs font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">ANGULAR, REACT & JQUERY</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>7 Years working with vanilla JS and <span class=\"font-500\">jQuery</span>. 2 years working with <span class=\"font-500\">AngularJS</span> and <span class=\"font-500\">Angular</span>. One year working with <span class=\"font-500\">React</span>.</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/resume/blob/c40c9dad5910acf1c20a6c1be63126bc09f00cf5/src/index.html#L173\" target=\"_blank\" class=\"linkcolor-1a\">FadeIn BG Image with jQuery</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/brockjams-angular\" target=\"_blank\" class=\"linkcolor-1a\">Music Player Built With AngularJS</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://bitbucket.org/brockcp/resume-a/src/master/\" target=\"_blank\" class=\"linkcolor-1a\">Angular7 Site</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/wojtekkfineart\" target=\"_blank\" class=\"linkcolor-1a\">React Site</a></li>\n        </ul>\n      </div>\n      <!--ROR-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"400\">\n        <span class=\"icons-container\">\n            <i class=\"icon-ruby font-size100 color-2c\"></i>\n            <i class=\"icon-ruby-on-rails font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">RUBY & RAILS</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>2 years working with <span class=\"font-500\">Ruby</span> and <span class=\"font-500\">Ruby On Rails</span>.</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/eigopost\" target=\"_blank\" class=\"linkcolor-1a\">An App for Japanese Students Learning English</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/brockpedia\" target=\"_blank\" class=\"linkcolor-1a\">Another App for Collaborating Privately Or Publicly Online</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/eigopost/blob/ea45ae294e24e48d7a0d0ca5f5498a239bed311f/Gemfile#L46\" target=\"_blank\" class=\"linkcolor-1a\">List of Ruby Gems I Have Worked With</a></li>\n        </ul>\n      </div>\n      <!--DATABASE-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"200\">\n        <span class=\"icons-container\">\n            <i class=\"icon-mysql font-size100 color-2c\"></i>\n            <i class=\"icon-postgres-alt font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">DATABASE</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>5 years working with <span class=\"font-500\">Mysql</span> and <span class=\"font-500\">Postgresql</span>. 2 years working with Rails' <span class=\"font-500\">Active Record</span>. One year with <span class=\"font-500\">Firebase</span>.</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/eigopost/tree/master/db\" target=\"_blank\" class=\"linkcolor-1a\">Postgresql Scheme for Rails App</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/eigopost/blob/master/db/schema.rb\" target=\"_blank\" class=\"linkcolor-1a\">Active Record DB Scheme</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/brockchat/blob/89d88c17517e61c561b2444ef2b28ec01e7a8b77/app/scripts/services/Message.js#L1\" target=\"_blank\" class=\"linkcolor-1a\">AngularJS App Using Firebase</a></li>\n        </ul>\n      </div>\n      <!--GIT-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"300\">\n        <span class=\"icons-container\">\n            <i class=\"icon-git font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">GIT</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>2 years working with <span class=\"font-500\">Git</span> from the command line. I use both <span class=\"font-500\">Github</span> and <span class=\"font-500\">Bitbucket</span> and can commit, push, pull, merge, rebase, checkout...</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp\" target=\"_blank\" class=\"linkcolor-1a\">Github account</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://bitbucket.org/brockcp/resume-a/src/master/\" target=\"_blank\" class=\"linkcolor-1a\">Bitbucket account</a></li>\n        </ul>\n      </div>\n      <!--BUILD-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"400\">\n        <span class=\"icons-container\">\n            <i class=\"icon-npm font-size100 color-2c\"></i>\n            <i class=\"icon-gulp-alt font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">BUILD TOOLS</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>Four years working with the build tools  <span class=\"font-500\">Compass</span>, <span class=\"font-500\">WebPack</span>, <span class=\"font-500\">NPM</span>, etc...</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/tree/master/src/scss\" target=\"_blank\" class=\"linkcolor-1a\">SCSS Structure</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/wordpress-theme/blob/master/webpack.config.js\" target=\"_blank\" class=\"linkcolor-1a\">Webpack code(didn't author)</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/blob/master/package.json\" target=\"_blank\" class=\"linkcolor-1a\">Npm script/Package.json</a></li>\n        </ul>\n      </div>\n      <!--ANALYTICS-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"200\">\n        <span class=\"icons-container\">\n            <i class=\"icon-line-graph font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">ANALYTICS</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>6 years working with <span class=\"font-500\">Google Analytics</span>.</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/wojtekkfineart/blob/5fb6fc0edef45cd6e2b6528c73749edcaf1a1e6e/index.html#L28\" target=\"_blank\" class=\"linkcolor-1a\">Standard Analytics Code</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/eigopost/blob/ea45ae294e24e48d7a0d0ca5f5498a239bed311f/app/views/layouts/application.html.erb#L12\" target=\"_blank\" class=\"linkcolor-1a\">Rails Analytics Code</a></li>\n        </ul>\n      </div>\n      <!--DESIGN-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"300\">\n        <span class=\"icons-container\">\n            <i class=\"icon-svg font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">DESIGN</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>Several years making my own graphics via <span class=\"font-500\">GIMP</span> and <span class=\"font-500\">Inkscape </span>.</li>\n          <li class=\"text-center m-t-10\">Examples</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/blob/master/src/img/ocbg.png\" target=\"_blank\" class=\"linkcolor-1a\">Background Image</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/blob/master/1.0/img/main.png\" target=\"_blank\" class=\"linkcolor-1a\">Graphic Sample</a></li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"https://github.com/brockcp/ocwebworks/blob/master/1.0/img/orangebest1.png\" target=\"_blank\" class=\"linkcolor-1a\">Graphic sample</a></li>\n        </ul>\n      </div>\n      <!--WORDPRESS-->\n      <div class=\"col-md-6 col-lg-4 text-center\" data-aos='fade-up' data-aos-delay=\"400\">\n        <span class=\"icons-container\">\n            <i class=\"icon-wordpress font-size100 color-2c\"></i>\n        </span>\n        <h3 class=\"color-1d\">WORDPRESS</h3>\n        <ul class=\"ul-icon text-left w-80-m-0-a\">\n          <li><i class=\"icon-google-developers spin-container\"></i>One year working with <span class=\"font-500\">Wordpress</span> and <span class=\"font-500\">PHP</span>.</li>\n          <li class=\"text-center m-t-10\">Example</li>\n          <li><fa-icon [icon]=\"faGithub\" [classes]=\"['color-1a', 'spin-container', 'spinning']\"></fa-icon><a href=\"http://ocwebworks.com/works/wordpress/\" target=\"_blank\" class=\"linkcolor-1a\">Responsive Wordpress Theme</a></li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/ui/skills/skills.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/skills/skills.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/skills/skills.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/skills/skills.component.ts ***!
  \***********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");




var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/ui/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/ui/skills/skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/ui/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/ui/intro/intro.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/ui/skills/skills.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/works.component */ "./src/app/ui/works/works.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");











var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
            ],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/works/works.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/works/works.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"works\">\n\n  <div class=\"works-image\"></div>\n\n  <div class=\"container-fluid bg-color-1\">\n\n    <div class=\"col-xs-12 col-md-8 offset-md-2 p-t-30\">\n      <p class=\"color-1a font-size26 font-200\">Build website after website, and perhaps even an app. That is my goal. Here are a few I've already done:\n      </p>\n    </div>\n    <hr class=\"hr-background\">\n\n\n    <h1 class=\"text-center font-300 p-20 color-1a\">Works</h1>\n    <!-- <hr class=\"hr-background\"> -->\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <ul class=\"p-l-xs25p-sm33p\">\n          <li><a href=\"http://eigopost.herokuapp.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Eigopost</a></li>\n          <li><a href=\"http://www.ocwebworks.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">OCwebworks</a></li>\n          <li><a href=\"http://www.teboconsulting.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Tebo Consulting</a></li>\n          <li><a href=\"http://www.wojtekkfineart.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Wojtekk Fine Art</a></li>\n          <li><a href=\"http://ocwebworks.com//works/wordpress/\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Wordpress Theme</a></li>\n          <li><a href=\"http://ocwebworks.com//works/kimmyvilla/\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Kimmyvilla (archived)</a></li>\n          <li><a href=\"http://www.hi-tech-products.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Hi Tech Products</a></li>\n          <li><a href=\"http://brockjams-angular.herokuapp.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Brock Jams</a></li>\n          <li><a href=\"http://brockit.herokuapp.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Brockit</a></li>\n          <li><a href=\"http://brockpedia.herokuapp.com\" target=\"_blank\" class=\"font-size26 linkcolor-1a\">Brockpedia</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/ui/works/works.component.scss":
/*!***********************************************!*\
  !*** ./src/app/ui/works/works.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/works/works.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/works/works.component.ts ***!
  \*********************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/ui/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.scss */ "./src/app/ui/works/works.component.scss")]
        })
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brockpatterson/G/WD/RESUME/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map