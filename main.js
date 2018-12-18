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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Inconsolata');\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\t}\nbody { \n\tfont: 80% georgia, sans-serif;\n\tline-height: 1.88889;\n\tcolor: #555753; \n\tbackground: lightblue;\n\tmargin: 0; \n\tpadding: 0;\n\t}\nabbr {\n\tborder-bottom: none;\n\t}\ndiv #wrapperHeader {\n\twidth:100%;\n\theight:125px; /* height of the background image? */\n\tbackground:url('neural-net.jpg');\n\ttext-align:center;\n\tdisplay: block;\n\topacity: .75;\n\tmargin-bottom: 25px;\n    border-bottom: 1px solid darkgray;\n}\n#wrapperHeader #header {\n\twidth:1000px;\n\theight:125px;\n\tmargin:0 auto;\n}\n\t"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--/.navbar -->\n\n<div class=\"container-fluid\">\n  <div id=\"wrapperHeader\">\n    <div id=\"header\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <app-sidebar class=\"col-md-3\"></app-sidebar>\n    <main class=\"col-md-8 col-sm-6\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n  <!--/row-offcanvas -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
    constructor() {
        this.environmentName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].envName;
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _repos_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repos/repo.service */ "./src/app/repos/repo.service.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/bundles/ngx-bootstrap.es2015.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "./src/app/slideshow/slideshow.component.ts");
/* harmony import */ var angular2_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_9__["SlideshowComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
            angular2_markdown__WEBPACK_IMPORTED_MODULE_10__["MarkdownModule"].forRoot(),
            _app_routes__WEBPACK_IMPORTED_MODULE_12__["routing"]
        ],
        exports: [_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]],
        providers: [_repos_repo_service__WEBPACK_IMPORTED_MODULE_5__["RepoService"], _app_routes__WEBPACK_IMPORTED_MODULE_12__["appRoutingProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes, appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"] },
    { path: 'project/:name', component: _project_project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"] }
];
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Inconsolata');\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\t}\n.container-fluid {\n\tpadding-top: 5px;\n\n}\n.slide-row {\n\theight: 400px;\n}\nbody { \n\tfont: 80% georgia, sans-serif;\n\tline-height: 1.88889;\n\tcolor: #555753; \n\tmargin: 50px; \n\tpadding: 0;\n\t}\np { \n\tmargin-top: 0; \n\ttext-align: justify;\n\t}\nh3 { \n\tfont: italic normal 1.2em georgia, sans-serif;\n\tletter-spacing: 1px; \n\tmargin-bottom: 0; \n\tcolor: #7D775C;\n\t}\na:link { \n\tfont-weight: bold; \n\ttext-decoration: none; \n\tcolor: #B7A5DF;\n\t}\na:visited { \n\tfont-weight: bold; \n\ttext-decoration: none; \n\tcolor: #D4CDDC;\n\t}\na:hover, a:focus, a:active { \n\ttext-decoration: underline; \n\tcolor: #9685BA;\n\t}\nabbr {\n\tborder-bottom: none;\n\t}\n/* specific divs\n.page-wrapper { \n\tbackground: url(http://csszengarden.com/001/zen-bg.jpg) no-repeat top left; \n\tpadding: 0 175px 0 110px;  \n\tmargin: 0; \n\tposition: relative;\n\t}\n */\n.intro { \n\tmin-width: 470px;\n\twidth: 100%;\n\t}\nh1 { \n    font-size: 3.2em;\n\t}\nh2 { \n\tfont: italic normal 2.2em georgia, sans-serif;\n\tletter-spacing: 1px; \n\tmargin-bottom: 0; \n}\nh4, h5, h6 { \n\tfont: italic normal 2.2em georgia, sans-serif;\n\tletter-spacing: 1px; \n\tmargin-bottom: 0; \n}\n.summary {\n\tclear: both; \n\tmargin: 20px 20px 20px 10px; \n\twidth: 160px; \n\tfloat: left;\n\t}\n.summary p {\n\tfont: italic 1.1em/2.2 georgia; \n\ttext-align: center;\n\t}\n.preamble {\n\tclear: right; \n\tpadding: 0px 10px 0 10px;\n\t}\n.supporting {\t\n\tpadding-left: 10px; \n\tmargin-bottom: 40px;\n\t}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Home</div>\n    <div class=\"panel-body\">\n-->\n      <div class=\"row\">\n      <div class=\"slide-row\">\n        <app-slideshow class=\"slideshow\"></app-slideshow>\n      </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <h1>Dashboard</h1>\n          <div class=\"blog-post\">\n            <h2 class=\"blog-post-title\">Cum Sociis Natoque</h2>\n            <hr>\n            <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean\n              eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.\n              Cras mattis consectetur purus sit amet fermentum.</p>\n            <blockquote>\n              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo.\n                Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            </blockquote>\n            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean\n              lacinia bibendum nulla sed consectetur.</p>\n            <h2>Heading</h2>\n            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi\n              erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum\n              at eros.\n            </p>\n            <h3>Sub-heading</h3>\n            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n            <pre><code>Example code block</code></pre>\n            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,\n              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n            <h3>Sub-heading</h3>\n            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum\n              nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo,\n              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n            <ul>\n              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n              <li>Donec id elit non mi porta gravida at eget metus.</li>\n              <li>Nulla vitae elit libero, a pharetra augue.</li>\n            </ul>\n            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n            <ol>\n              <li>Vestibulum id ligula porta felis euismod semper.</li>\n              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\n            </ol>\n            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\n          </div>\n\n          <div class=\"blog-post\">\n            <h2 class=\"blog-post-title\">Another blog post</h2>\n            <p class=\"blog-post-meta\">December 23, 2013 by <a href=\"#\">Jacob</a></p>\n\n            <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean\n              eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.\n              Cras mattis consectetur purus sit amet fermentum.</p>\n            <blockquote>\n              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo.\n                Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            </blockquote>\n            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean\n              lacinia bibendum nulla sed consec>\n              <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean\n                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.\n                Cras mattis consectetur purus sit amet fermentum.</p>\n              <blockquote>\n                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo.\n                  Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n              </blockquote>\n              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n                Aenean lacinia bibendum nulla sed consectetur.</p>\n              <h2>Heading</h2>\n              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,\n                nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum\n                at eros.\n              </p>\n              <h3>Sub-heading</h3>\n              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n              <pre><code>Example code block</code></pre>\n              <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,\n                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n              <h3>Sub-heading</h3>\n              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum\n                nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo,\n                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n              <ul>\n                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n                <li>Donec id elit non mi porta gravida at eget metus.</li>\n                <li>Nulla vitae elit libero, a pharetra augue.</li>\n              </ul>\n              <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n              <ol>\n                <li>Vestibulum id ligula porta felis euismod semper.</li>\n                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\n              </ol>\n              <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\n          </div>\n\n          <div class=\"blog-post\">\n            <h2 class=\"blog-post-title\">Another blog post</h2>\n            <p class=\"blog-post-meta\">December 23, 2013 by <a href=\"#\">Jacob</a></p>\n\n            <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean\n              eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.\n              Cras mattis consectetur purus sit amet fermentum.</p>\n            <blockquote>\n              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo.\n                Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            </blockquote>\n            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean\n              lacinia tetur.\n            </p>\n            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi\n              erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum\n              at eros.\n            </p>\n          </div>\n        </div>\n      </div>\n<!--\n    </div>\n  </div>-->\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomeComponent = class HomeComponent {
    constructor() {
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.panel-body .markdown h1, h2 { color: #ff4411; font-size: 48px; font-family: 'Signika', sans-serif; padding-bottom: 10px; }\n\n.nav-tabs {\n    padding-top: 25px;\n    width: 100%;\n}\n\n#readme-panel {\n    padding-top: 50px;\n}\n\n.content {\n    padding-left: 75px;\n    padding-right: 50px;\n}"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <span></span>\n        <div class=\"col-md-12\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#readme-panel\" data-toggle=\"tab\">Readme</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#panel-287268\" data-toggle=\"tab\">Code</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-12 content\">\n            <div class=\"tabbable\" id=\"tabs-93517\">\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"readme-panel\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">Documentation</div>\n                            <div class=\"panel-body\">\n                                <markdown class=\"markdown\" [data]=\"markdownSrc\"></markdown>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"panel-287268\">\n                        <p>\n                            Howdy, I'm in Section 2.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repos_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repos/repo.service */ "./src/app/repos/repo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let ProjectComponent = class ProjectComponent {
    constructor(route, repoService) {
        this.route = route;
        this.repoService = repoService;
        this.markdownSrc = '### test';
    }
    getRepos(repoName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repoService.getRepoReadme(repoName)
                .subscribe(proj => {
                this.markdownSrc = atob(proj.content);
                //console.log(proj);
            });
        });
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params["name"]; // cast to number
            this.getRepos(this.name);
            //.catch(this.handleError)
        });
    }
    ngOnDestroy() {
        if (this.route)
            this.sub.unsubscribe();
    }
};
ProjectComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
        styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _repos_repo_service__WEBPACK_IMPORTED_MODULE_1__["RepoService"]])
], ProjectComponent);



/***/ }),

/***/ "./src/app/repos/repo.service.ts":
/*!***************************************!*\
  !*** ./src/app/repos/repo.service.ts ***!
  \***************************************/
/*! exports provided: RepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoService", function() { return RepoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/*import { Repo } from './repo.model';*/
let RepoService = class RepoService {
    constructor(http) {
        this.http = http;
        this.rootApi = 'https://api.github.com/';
        this.reposUrl = this.rootApi + 'users/atangeman/repos';
        this.repoUrl = this.rootApi + 'repos/atangeman/';
        this.requestOptions = null;
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.mercy-preview+json'
        };
        const requestOpt = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"](headerDict),
        };
        this.requestOptions = requestOpt;
    }
    getRepos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.reposUrl)
                .map(this.extractData)
                .catch(this.handleError)
                .toPromise();
        });
    }
    getRepoReadme(name) {
        return this.http.get(this.repoUrl + name + '/readme')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getRepoTags(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.http.get(this.repoUrl + name + '/topics', this.requestOptions)
                .map(this.extractData)
                .catch(this.handleError)
                .toPromise();
            return resp["names"];
        });
    }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    }
};
RepoService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
], RepoService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.customClass,\n.card.customClass .card-header,\n.panel.customClass {\n  background-color: #5bc0de;\n\n}\n.panel.customClass .panel-body {\n  background-color: #337aa7;\n}\n.panel-body{\n  /*background-color: #282828;*/\n  background-color: #FFFFFF;\n  color:#282828;\n\n}\n.side-nav {\n    left: 0;\n    top:0;\n    max-width: 350px;\n    background-color: #FFFFFF;\n    color : #404040;\n    \n}\n.background {\n  color: #282828;\n}\n.collapsible ul {\n  background-color: whitesmoke;\n    color: #282828;\n}\n.userView {\n    background-color: white;\n    color: lightgray;\n}\n.collapse-panel {\n  background-color: whitesmoke;\n  height: auto;\n}\n.collapsible li {\n  background-color: #fcfcfc;\n    color: #282828;\n    border: 1px solid #f9f9f9;\n}\n.collapsible-header {\n  color:#282828;\n  background-color: whitesmoke;\n}\n.collapsible-header .active:hover {\n  color:#282828;\n  font-size: 12px;\n  background-color:lightsteelblue;\n}\nli .collapsible a {\n  font-size: 9px;\n  background-color: whitesmoke;\n  color:#282828;\n}\n.collapsible li:hover {\n  background-color:whitesmoke;\n  color:#282828;\n}\n.collapsible li .active:hover {\n  background-color:lightsteelblue;\n  color: #282828;\n}\n.collapsible ul li {\n  background-color: whitesmoke;\n  color: #282828;\n  margin-left: 15px;\n}\n.collapsible div {\n  background-color: whitesmoke;\n  color: #282828;\n  margin-left: 15px;\n}\n.collapsible div .active:hover{\n  background-color: whitesmoke;\n  color: #282828;\n  margin-left: 15px;\n}\n.collapsible .active:hover {\n  background-color: whitesmoke;\n  color: #282828;\n}\n.userView li a{\n  background-color: whitesmoke;\n  color: #282828;\n  font-weight: bolder;\n}\nli .active {\n  color: #282828;\n  \n  background-color:lightsteelblue;\n}\n.active {\n    color: #282828;\n  opacity: .9;\n  background-color:lightsteelblue;\n}\nul a{\n    color: #282828;\n  opacity: .75;\n}\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n  <ul id=\"slide-out\" class=\"side-nav fixed\">\n      <li *ngFor=\"let repo of repos\">\n        <a href=\"#\"> {{repo.name}} </a>\n      </li>\n  </ul>\n</div>\n-->\n\n<div class=\"button-collapse top-nav full\">\n  <ul class=\"side-nav fixed\">\n    <li>\n      <div class=\"userView\">\n\n        <div class=\"background\">\n        <img src=\"assets/img/neural-net.jpg\">\n        </div>\n        <div class=\"userInfo\">\n          <div class=\"userView\">\n            <a href=\"#!user\"><img class=\"circle\" src=\"https://github.com/atangeman.png?size=50\"></a>\n            <a href=\"#!name\"><span class=\"name\">Andy Tangeman</span></a>\n            <a href=\"#!email\"><span class=\"email\">andytangeman@gmail.com</span></a>\n          </div>\n        </div>\n        <hr>\n      </div>\n    </li>\n    <li><a href=\"https://github.com/atangeman/\"><i class=\"material-icons\">github:</i>atangeman.github.io</a></li>\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <!--<li><a href=\"#!\"><i class=\"material-icons\">code</i>portfolio-angular</a></li>-->\n    <li>\n      <div class=\"divider\"></div>\n    </li>\n    <div class=\"collapse-panel\">\n    <ul class=\"collapsible\" data-collapsible=\"accordion\">\n      <li><a class=\"collapsible-header\" (click)=\"getRepos()\">Projects</a>\n        <div class=\"collapsible-body\">\n          <ul>\n            <li *ngFor=\"let repo of repos\">              \n              <a [routerLink]=\"['/project', repo.name]\">{{repo.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li><a class=\"collapsible-header\">Cartography</a>\n        <div class=\"collapsible-body\">\n          <ul>\n            <li><a href=\"http://quartic.maps.arcgis.com/apps/Solutions/s2.html?appid=a1322152d26440ff860b429304f18845\">Community Map (Interactive)</a></li>\n            <li><a href=\"https://drive.google.com/file/d/0B4qYzXRLWySeaFdRWVZEWDJlaG8/edit\">Intergenerational Planning</a></li>\n            <li><a href=\"https://drive.google.com/file/d/0B4qYzXRLWySeT0ZBelE1ODhmMkU/edit\">SNAP Education</a></li>\n            <li><a href=\"https://drive.google.com/file/d/0B4qYzXRLWySeVlBIMDJBUFVTR0U/edit\">Getis Cluster - ELA</a></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n    </div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repos_repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repos/repo.service */ "./src/app/repos/repo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let SidebarComponent = class SidebarComponent {
    // end button control
    constructor(repoService) {
        this.repoService = repoService;
        this.title = 'Project Repositories';
        this.repos = [];
        // start button control
        this.isCollapsed = false;
        this.customClass = 'customClass';
        //this.getRepos();
    }
    getRepos() {
        return __awaiter(this, void 0, void 0, function* () {
            let repoList = yield this.repoService.getRepos();
            for (let repo of repoList) {
                let list = yield this.repoService.getRepoTags(repo.name);
                if (list.indexOf("portfolio") > -1) {
                    this.repos.push(repo);
                }
            }
        });
    }
};
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [_repos_repo_service__WEBPACK_IMPORTED_MODULE_1__["RepoService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/slideshow/slideshow.component.css":
/*!***************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#carouselControls img {\n\nwidth: 100%;\n\nheight: auto;\nmin-height: 500px;\nmargin-bottom: auto;\n    transition: 0.6s ease-in-out left;\n}"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.html":
/*!****************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"item active slider-size\">\n        <img src=\"assets/img/map-dcmetro.jpg\" alt=\"Los Angeles\" />\n    </div>\n    <div class=\"item slider-size\">\n        <img src=\"assets/img/NYCRace.jpg\" alt=\"Second slide\" />\n    </div>\n    <div class=\"item slider-size\">\n        <img src=\"assets/img/map-kitsap-landvalue.jpg\" alt=\"New york\" />\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.ts":
/*!**************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.ts ***!
  \**************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SlideshowComponent = class SlideshowComponent {
};
SlideshowComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-slideshow',
        template: __webpack_require__(/*! ./slideshow.component.html */ "./src/app/slideshow/slideshow.component.html"),
        styles: [__webpack_require__(/*! ./slideshow.component.css */ "./src/app/slideshow/slideshow.component.css")]
    })
], SlideshowComponent);



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false,
    envName: 'dev'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zeus/Development/portfolio-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map