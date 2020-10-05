webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Inconsolata');\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\t}\nbody { \n\tfont: 80% georgia, sans-serif;\n\tline-height: 1.88889;\n\tcolor: #555753; \n\tbackground: lightblue;\n\tmargin: 0; \n\tpadding: 0;\n}\nabbr {\n\tborder-bottom: none;\n}\n.content {\n\tpadding-top: 50px;\n\tmargin-top: 50px;\n}\n.navbar  {\n\twidth:100%;\n\theight:50px; /* height of the background image? */\n\tbackground:url('neural-net.b8ea23bfb91ae729b793.jpg');\n\ttext-align:top;\n    position: fixed;\n\tbackground: #f8f8f8;\n\tcolor:#282828;\n\n}\n.navbar-brand {\n\t\t  color:#282828;\n}\n.btn-info{\n\t\tbackground: #f8f8f8;\n}\n#wrapperHeader #header {\n\twidth:1000px;\n\theight:125px;\n\tmargin:0 auto;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"btn btn-info btn-sm\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n\n  </div>\n      <a class=\"navbar-brand\" href=\"#\">Portfolio</a>\n</nav>\n/.Navbar-->\n\n<div class=\"container\">\n  <div class=\"row content\">\n    <app-sidebar class=\"col-md-2\"></app-sidebar>\n    <main class=\"col-md-10 col-sm-6\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n<!--/row-offcanvas -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
    constructor() {
        this.environmentName = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].envName;
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_service__ = __webpack_require__("./src/app/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/bundles/ngx-bootstrap.es2015.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slideshow_slideshow_component__ = __webpack_require__("./src/app/slideshow/slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_markdown__ = __webpack_require__("./node_modules/angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_project_component__ = __webpack_require__("./src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gists_gist_component__ = __webpack_require__("./src/app/gists/gist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_gist_dist_ngx_gist_module__ = __webpack_require__("./node_modules/ngx-gist/dist/ngx-gist.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_gist_dist_ngx_gist_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_gist_dist_ngx_gist_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__slideshow_slideshow_component__["a" /* SlideshowComponent */],
            __WEBPACK_IMPORTED_MODULE_11__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__gists_gist_component__["a" /* GistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["b" /* routing */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_gist_dist_ngx_gist_module__["NgxGistModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* appRoutingProviders */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_component__ = __webpack_require__("./src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gists_gist_component__ = __webpack_require__("./src/app/gists/gist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");




const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_1__project_project_component__["a" /* ProjectComponent */] },
    { path: 'project/:name', component: __WEBPACK_IMPORTED_MODULE_1__project_project_component__["a" /* ProjectComponent */] },
    { path: 'gists/:id/:desc', component: __WEBPACK_IMPORTED_MODULE_2__gists_gist_component__["a" /* GistComponent */] }
];
/* unused harmony export routes */

const appRoutingProviders = [];
/* harmony export (immutable) */ __webpack_exports__["a"] = appRoutingProviders;

const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { onSameUrlNavigation: 'reload' });
/* harmony export (immutable) */ __webpack_exports__["b"] = routing;



/***/ }),

/***/ "./src/app/gists/gist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gists/gist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n      <div class=\"row\">\n            <span></span>\n            <div class=\"col-md-12 content\">\n                  <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Description</div>\n                        <div class=\"panel-body\">\n                              <p>{{gistDesc}}</p>\n                        </div>\n                  </div>\n                  <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Code</div>\n                        <div class=\"panel-body\">\n                              <ngx-gist class=\"tab-pane active\" id=\"panel-287268\" style=\"height:1000px\" gistId=\"atangeman/{{gistId}}\"></ngx-gist>   \n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/gists/gist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_github_service__ = __webpack_require__("./src/app/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GistComponent = class GistComponent {
    constructor(router, route, githubService) {
        this.router = router;
        this.route = route;
        this.githubService = githubService;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.route.params.subscribe(params => {
            this.gistId = params["id"]; // cast to number
            this.gistDesc = params["desc"];
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    }
};
GistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gist',
        template: __webpack_require__("./src/app/gists/gist.component.html"),
        styles: [__webpack_require__("./src/app/gists/gist.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_app_github_service__["a" /* GithubService */]])
], GistComponent);



/***/ }),

/***/ "./src/app/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let GithubService = class GithubService {
    constructor(http) {
        this.http = http;
        this.rootApi = 'https://api.github.com/';
        this.reposUrl = this.rootApi + 'users/atangeman/repos';
        this.repoUrl = this.rootApi + 'repos/atangeman/';
        this.gistsUrl = this.rootApi + 'users/atangeman/gists';
        this.requestOptions = null;
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.mercy-preview+json'
        };
        const requestOpt = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
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
    getGists() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.gistsUrl)
                .map(this.extractData)
                .catch(this.handleError)
                .toPromise();
        });
    }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
};
GithubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GithubService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Inconsolata');\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\t}\n.container-fluid {\n\tpadding-top: 0px;\n\n}\n.slide-row {\n\theight: 400px;\n}\nbody { \n\tfont: 80% georgia, sans-serif;\n\tline-height: 1.88889;\n\tcolor: #555753; \n\tmargin: 10px; \n\tpadding: 0;\n\t}\np { \n\tmargin-top: 0; \n\ttext-align: justify;\n\t}\nh3 { \n\tfont: italic normal 1.2em georgia, sans-serif;\n\tletter-spacing: 1px; \n\tmargin-bottom: 0; \n\tcolor: #7D775C;\n\t}\na:link { \n\tfont-weight: bold; \n\ttext-decoration: none; \n\tcolor: #B7A5DF;\n\t}\na:visited { \n\tfont-weight: bold; \n\ttext-decoration: none; \n\tcolor: #D4CDDC;\n\t}\na:hover, a:focus, a:active { \n\ttext-decoration: underline; \n\tcolor: #9685BA;\n\t}\nabbr {\n\tborder-bottom: none;\n\t}\n/* specific divs\n.page-wrapper { \n\tbackground: url(http://csszengarden.com/001/zen-bg.jpg) no-repeat top left; \n\tpadding: 0 175px 0 110px;  \n\tmargin: 0; \n\tposition: relative;\n\t}\n */\n.intro { \n\tmin-width: 470px;\n\twidth: 100%;\n\t}\nh1 { \n    font-size: 3.2em;\n\t}\nh2 { \n\tfont: italic normal 2.2em georgia, sans-serif;\n\tletter-spacing: 1px; \n\tmargin-bottom: 0; \n}\nh4, h5, h6 { \n\tfont: italic normal 2.2em georgia, sans-serif;\n\tletter-spacing: 1px; \n\tmargin-bottom: 0; \n}\n.summary {\n\tclear: both; \n\tmargin: 20px 20px 20px 10px; \n\twidth: 160px; \n\tfloat: left;\n\t}\n.summary p {\n\tfont: italic 1.1em/2.2 georgia; \n\ttext-align: center;\n\t}\n.preamble {\n\tclear: right; \n\tpadding: 0px 10px 0 10px;\n\t}\n.supporting {\t\n\tpadding-left: 10px; \n\tmargin-bottom: 40px;\n\t}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"slide-row\">\n      <app-slideshow class=\"slideshow\"></app-slideshow>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"blog-post\">\n        <h2 class=\"blog-post-title\">Welcome to my Portfolio\n        </h2>\n        <p class=\"blog-post-meta\">October 5, 2020 by <a href=\"#\">Andy Tangeman</a></p>\n        <hr>\n        <p>This portfolio is designed to showcase the breadth and scope of my skill-set. It is built using Angular 6.x and leverages\n          the GitHub API for populating and displaying my work in the Projects menu on the left sidebar. I will add more functionality \n          as time allows. \n        </p>\n\n        <p>Since this portfolio is technically still in development consider yourself a bonafide tester. As such, you may feel free \n          to navigate freely throughout the site and email me if you encounter any bugs. \n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomeComponent = class HomeComponent {
    constructor() {
    }
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/project/project.component.css":
/***/ (function(module, exports) {

module.exports = "\n.panel-body .markdown h1, h2 { color: #ff4411; font-size: 48px; font-family: 'Signika', sans-serif; padding-bottom: 10px; }\n\n.nav-tabs {\n    padding-top: 25px;\n    width: 100%;\n}\n\n#readme-panel {\n    padding-top: 50px;\n}\n\n.content {\n    padding-left: 75px;\n    padding-right: 50px;\n}"

/***/ }),

/***/ "./src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <span></span>\n        <div class=\"col-md-12\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#readme-panel\" data-toggle=\"tab\">Readme</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#panel-287268\" data-toggle=\"tab\">Code</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-12 content\">\n            <div class=\"tabbable\" id=\"tabs-93517\">\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"readme-panel\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">Readme</div>\n                            <div class=\"panel-body\">\n                                <markdown class=\"markdown\" [data]=\"markdownSrc\"></markdown>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"panel-287268\">\n                        <iframe frameborder=0 style=\"min-width: 200px; width: 100%; height: 600px\" scrolling=\"no\" seamless=\"seamless\" srcdoc='<html><body><style type=\"text/css\">.gist .gist-data { height: 600px; }</style><script src=\"https://gist.github.com/atangeman/09743d8a67b552cd41ed6ad3c9a0eb52.js\"></script></body></html>'></iframe> \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_github_service__ = __webpack_require__("./src/app/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let ProjectComponent = class ProjectComponent {
    constructor(route, githubService) {
        this.route = route;
        this.githubService = githubService;
        this.markdownSrc = '### test';
    }
    getRepos(repoName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.githubService.getRepoReadme(repoName).subscribe(proj => {
                this.markdownSrc = atob(proj.content);
                //console.log(proj);
            });
        });
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params["name"]; // cast to number
            this.repoHtml = params["html_url"];
            this.getRepos(this.name);
        });
    }
    ngOnDestroy() {
        if (this.route)
            this.sub.unsubscribe();
    }
};
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__("./src/app/project/project.component.html"),
        styles: [__webpack_require__("./src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_app_github_service__["a" /* GithubService */]])
], ProjectComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".card.customClass,\n.card.customClass .card-header,\n.panel.customClass {\n  background-color: #5bc0de;\n\n}\n.panel.customClass .panel-body {\n  background-color: #5bc0de;\n}\n.panel-body{\n  /*background-color: #282828;*/\n  background-color: #FFFFFF;\n  color:#282828;\n\n}\n.side-nav {\n    left: 0;\n   \n    max-width: 350px;\n    background-color: #FFFFFF;\n    color : #404040;\n    \n}\n.background {\n  color: #FFF !important;\n}\n.collapsible ul {\n  background-color: whitesmoke;\n  color: #282828;\n}\n.userView .background {\n    background-color: white;\n    color:#282828;\n}\n.userView {\n    background-color: white;\n    opacity: .95;\n    color:#282828;\n}\n#sideNav .collapse-panel {\n  background-color: #2196f3 !important;\n  height: auto;\n}\n.collapsible li {\n  background-color: #fcfcfc;\n  color: #282828;\n  border: 1px solid #f9f9f9;\n}\n.collapsible-body {\n  text-overflow: ellipsis;\n}\n.collapsible-header {\n  color:#282828;\n  background-color: whitesmoke;\n  text-overflow: ellipsis;\n}\n.collapsible-header .active:hover {\n  color:#282828;\n  font-size: 12px;\n  background-color:#2196f3;\n}\nli .collapsible a {\n  font-size: 9px;\n        background-color: #2196f3 !important;\n        color:#282828;\n}\n.collapsible li:hover {\n  background-color:whitesmoke;\n  color:#282828;\n}\n.collapsible li .active:hover {\n  background-color:#2196f3;\n  color:#282828;\n}\n.collapsible ul li {\n  background-color: whitesmoke;\n  display: block;\n  color: #282828;\n  margin-left: 15px;\n  overflow-x: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.collapsible div {\n        background-color: #2196f3 !important;\n        color:#282828;\n  margin-left: 15px;\n}\n.collapsible div .active:hover{\n        background-color: #2196f3 !important;\n        color:#282828;\n  margin-left: 15px;\n}\n.collapsible .active:hover {\n        background-color: #2196f3 !important;\n        color:#282828;\n}\n.userView li a{\n        background-color: #2196f3 !important;\n        color:#282828;\n  font-weight: bolder;\n}\nli .active {\n  color:#282828;\n  \n  background-color:#2196f3;\n}\n.active {\n  color:#282828;\n  opacity: .9;\n  background-color:#2196f3;\n}\nul a{\n  color:#282828;\n  opacity: .75;\n  \n}\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n  <ul id=\"slide-out\" class=\"side-nav fixed\">\n      <li *ngFor=\"let repo of repos\">\n        <a href=\"#\"> {{repo.name}} </a>\n      </li>\n  </ul>\n</div>\n-->\n\n<div class=\"button-collapse top-nav full\">\n  <ul class=\"side-nav fixed\">\n    <li class=\"userViewList\">\n      <div class=\"userView\">\n        <div class=\"userInfo\">\n          <div class=\"userView\">\n            <a href=\"#!user\"><img class=\"circle\" src=\"https://github.com/atangeman.png?size=50\"></a>\n            <a href=\"#!name\"><span class=\"name\">Andy Tangeman</span></a>\n            <a href=\"#!email\"><span class=\"email\">andytangeman@gmail.com</span></a>\n          </div>\n        </div>\n        <hr>\n      </div>\n    </li>\n    <li><a href=\"https://github.com/atangeman/\"><i class=\"material-icons\">github:</i>atangeman.github.io</a></li>\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <!--<li><a href=\"#!\"><i class=\"material-icons\">code</i>portfolio-angular</a></li>-->\n    <li>\n      <div class=\"divider\"></div>\n    </li>\n    <div class=\"collapse-panel\">\n      <ul class=\"collapsible\" data-collapsible=\"accordion\">\n        <li><a class=\"collapsible-header\" (click)=\"getRepos()\">Projects</a>\n          <div class=\"collapsible-body\">\n            <ul>\n              <li *ngFor=\"let repo of repos\">              \n                <a [routerLink]=\"['/project', repo.name]\">{{repo.name}}</a>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <li><a class=\"collapsible-header\" (click)=\"getGists()\">Gists</a>\n          <div class=\"collapsible-body\">\n            <ul>\n              <li *ngFor=\"let gist of gists\">              \n                <a [routerLink]=\"['/gists', gist.id, gist.description]\">{{gist.description}}</a>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <li><a class=\"collapsible-header\">Cartography</a>\n          <div class=\"collapsible-body\">\n            <ul>\n              <li><a href=\"http://quartic.maps.arcgis.com/apps/Solutions/s2.html?appid=a1322152d26440ff860b429304f18845\">Community Map (Interactive)</a></li>\n              <li><a href=\"https://drive.google.com/file/d/0B4qYzXRLWySeaFdRWVZEWDJlaG8/edit\">Intergenerational Planning</a></li>\n              <li><a href=\"https://drive.google.com/file/d/0B4qYzXRLWySeT0ZBelE1ODhmMkU/edit\">SNAP Education</a></li>\n              <li><a href=\"https://drive.google.com/file/d/0B4qYzXRLWySeVlBIMDJBUFVTR0U/edit\">Getis Cluster - ELA</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__github_service__ = __webpack_require__("./src/app/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let SidebarComponent = class SidebarComponent {
    // end button control
    constructor(router, githubService) {
        this.router = router;
        this.githubService = githubService;
        this.title = 'Project Repositories';
        this.repos = [];
        this.gists = [];
        // start button control
        this.isCollapsed = false;
        this.customClass = 'customClass';
        //this.getRepos();
    }
    open(id) {
        this.router.navigateByUrl('/gists/' + id);
    }
    getGists() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.gists.length < 1) {
                let gistList = yield this.githubService.getGists();
                for (let gist of gistList) {
                    if (this.gists.map(function (e) { return e.id; }).indexOf(gist.id) == -1) {
                        this.gists.push(gist);
                    }
                }
            }
        });
    }
    getRepos() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.repos.length < 1) {
                let repoList = yield this.githubService.getRepos();
                for (let repo of repoList) {
                    let list = yield this.githubService.getRepoTags(repo.name);
                    if (list.indexOf("portfolio") > -1 &&
                        (this.repos.map(function (e) { return e.name; }).indexOf(repo.name) == -1)) {
                        this.repos.push(repo);
                    }
                }
            }
        });
    }
};
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__github_service__["a" /* GithubService */]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/slideshow/slideshow.component.css":
/***/ (function(module, exports) {

module.exports = "#carouselControls img {\n    width: 100%;\n    height: auto;\n    min-height: 500px;\n    margin-bottom: auto;\n    -webkit-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left;\n    border-bottom: 1px;\n    border-bottom-color: gainsboro;\n}"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"item active slider-size\">\n        <img src=\"assets/img/map-dcmetro.jpg\" alt=\"Los Angeles\" />\n    </div>\n    <div class=\"item slider-size\">\n        <img src=\"assets/img/NYCRace.jpg\" alt=\"Second slide\" />\n    </div>\n    <div class=\"item slider-size\">\n        <img src=\"assets/img/map-kitsap-landvalue.jpg\" alt=\"New york\" />\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SlideshowComponent = class SlideshowComponent {
};
SlideshowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slideshow',
        template: __webpack_require__("./src/app/slideshow/slideshow.component.html"),
        styles: [__webpack_require__("./src/app/slideshow/slideshow.component.css")]
    })
], SlideshowComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false,
    envName: 'dev'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map