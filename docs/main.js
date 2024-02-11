"use strict";
(self["webpackChunkcaliel_portfolio"] = self["webpackChunkcaliel_portfolio"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 3575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 5307);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/header/header.component */ 2632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 2895);







class AppComponent {
    constructor(titleService, metaService, languageService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.languageService = languageService;
        this.title = "caliel-portfolio";
    }
    ngOnInit() {
        this.languageService.initLanguage();
        this.titleService.setTitle("Florece Ann Robles | MEAN Stack Developer | MERN Stack Developer | Software Engineer");
        this.metaService.addTags([
            {
                name: "keywords",
                content: "Frontend, MEAN Stack Developer , MERN Stack Development , Software Engineer, software, developer",
            },
            {
                name: "description",
                content: "As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express.",
            },
        ]);
        aos__WEBPACK_IMPORTED_MODULE_0__.init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, directives: [_components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 7142);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 3970);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-animate-on-scroll */ 1993);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 4766);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-google-analytics */ 5943);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);


















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule,
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__.AnimateOnScrollModule.forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production }),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.trackAnalyticID),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__.AnimateOnScrollModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__.NgxGoogleAnalyticsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 2895:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);



class FooterComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 1, consts: [[1, "footer-left-bar", "d-none", "d-md-block"], ["href", "https://github.com/annrobles", "target", "_blank", 3, "click"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/florece-robles/", "target", "_blank", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "footer-right-bar", "d-none", "d-md-block"], ["href", "mailto:annr.dev@gmail.com", "target", "_blank", 3, "click"], [1, "footer-credits", "text-center"], ["href", "https://github.com/annrobles", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], ["href", "https://annrobles.github.io/", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], [1, "mt-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0)(3, "li")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() { return ctx.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "annr.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_florece", "footer", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Built with Angular by Florece Ann Robles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_florece", "footer", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Designed by Brittany Chiang & Jo\u015Be Andre\u015B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDSSxjREdZO0FDSGhCO0FBRUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRExRO0FDS2hCO0FBR0k7RUFDSSxnQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRlI7QUFJUTtFQUNJLGVBQUE7RUFDQSxjRHBCSTtBQ2tCaEI7QUFLUTtFQUNJLGdCQUFBO0FBSFo7QUFLWTtFQUNJLG1CQUFBO0FBSGhCO0FBUUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTlI7QUFRUTtFQUNJLHdCQUFBO0FBTlo7QUFTUTtFQUNJLDBGRHBDRDtFQ3FDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNEdERJO0FDK0NoQjtBQVVJO0VBQ0ksMEZEbkRHO0VDb0RILGVBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQVRSO0FBV1E7RUFDSSxjRHJFSTtFQ3VFSiwwREFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnRUFBQTtFQUNBLG9CQUFBO0FBVFo7QUFXWTtFQUNJLHFCQUFBO0VBQ0EsY0Q1RUE7QUNtRWhCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuZm9vdGVye1xuICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcblxuICAgIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIsIC5mb290ZXItcmlnaHQtYmFyOmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodFNsYXRlO1xuICAgIH1cblxuICAgIC5mb290ZXItbGVmdC1iYXIgbGksIC5mb290ZXItcmlnaHQtYmFyIGxpe1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5mb290ZXItbGVmdC1iYXJ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAtMTZweDtcbiAgICAgICAgbGVmdDogNTFweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXItcmlnaHQtYmFye1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICByaWdodDogNDFweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBsaXtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgLXdlYmtpdC1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIC1tcy1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1ybDtcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJExpZ2h0U2xhdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3Rlci1jcmVkaXRze1xuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuXG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJExpZ2h0U2xhdGU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("animateFooter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0, transform: "translateY(100%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 3970:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "GeneralModule": () => (/* binding */ GeneralModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 2895);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2632);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
}
GeneralModule.ɵfac = function GeneralModule_Factory(t) { return new (t || GeneralModule)(); };
GeneralModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 2632:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 5307);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function HeaderComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "First content");
} }
function HeaderComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
class HeaderComponent {
    constructor(router, analyticsService, languageService) {
        this.router = router;
        this.analyticsService = analyticsService;
        this.languageService = languageService;
        this.responsiveMenuVisible = false;
        this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.cvName = "";
    }
    ngOnInit() {
        this.languageFormControl.valueChanges.subscribe((val) => this.languageService.changeLanguage(val));
        this.languageFormControl.setValue(this.languageService.language);
    }
    scroll(el) {
        if (document.getElementById(el)) {
            document.getElementById(el).scrollIntoView({ behavior: "smooth" });
        }
        else {
            this.router
                .navigate(["/home"])
                .then(() => document.getElementById(el).scrollIntoView({ behavior: "smooth" }));
        }
        this.responsiveMenuVisible = false;
    }
    downloadCV() {
        this.languageService.translateService
            .get("Header.cvName")
            .subscribe((val) => {
            this.cvName = val;
            // app url
            let url = window.location.href;
            // Open a new window with the CV
            window.open(url + "/../assets/cv/" + this.cvName, "_blank");
        });
    }
    getScrollPosition(event) {
        this.pageYPosition = window.pageYOffset;
    }
    changeLanguage(language) {
        this.languageFormControl.setValue(language);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.getScrollPosition(ctx.getScrollPosition($event)); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 93, vars: 45, consts: [[1, "navbar", "main-navbar", "on-top"], [1, "header-container"], ["tabindex", "-1", 1, "logo", "fade-enter-done"], ["href", "/", "aria-label", "home"], [1, "hex-container"], [1, "logo-container"], ["id", "logo", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "viewBox", "0 0 84 96"], ["transform", "translate(-8.000000, -2.000000)"], ["transform", "translate(11.000000, 5.000000)"], ["id", "Shape", "stroke", "currentColor", "stroke-width", "5", "stroke-linecap", "round", "stroke-linejoin", "round", "points", "39 0 0 22 0 67 39 90 78 68 78 23"], ["d", "M35,30 L45,30 L45,35 L35,35 L35,30 Z M35,40 L45,40 L45,45 L35,45 L35,40 Z M30,30 L35,30 L35,65 L30,65 L30,30 Z", "fill", "currentColor"], ["ngbNav", "", 1, "menu-ul"], ["nav", "ngbNav"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], [1, "main-btn", "cv-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 6)(7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "g", 7)(10, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "polygon", 9)(12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 11, 12)(15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_15_listener() { return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HeaderComponent_ng_template_22_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_23_listener() { return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_24_listener() { return ctx.scroll("jobs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, HeaderComponent_ng_template_30_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_31_listener() { return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, HeaderComponent_ng_template_38_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_39_listener() { return ctx.analyticsService.sendAnalyticEvent("click_testimonial", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_40_listener() { return ctx.scroll("testimonial"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, HeaderComponent_ng_template_46_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_47_listener() { return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_48_listener() { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "05. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, HeaderComponent_ng_template_54_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li", 18)(56, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_56_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 20)(60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_60_listener() { return ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22)(62, "aside", 23)(63, "nav")(64, "ol")(65, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_65_listener() { return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_66_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_71_listener() { return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_72_listener() { return ctx.scroll("jobs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_77_listener() { return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_78_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_83_listener() { return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_84_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li")(90, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_90_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 21, "Header.Item1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 23, "Header.Item2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 25, "Header.Item3"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 27, "Header.Item4"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 29, "Header.Item5"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 31, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 33, "Header.Item1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 35, "Header.Item2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 37, "Header.Item3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 39, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](92, 41, "Header.cvBtn"), " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #0a192f;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0px;\n  z-index: 11;\n  padding: 0px 50px;\n  width: 100%;\n  height: 100px;\n  background-color: rgba(10, 25, 47, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: var(--transition);\n  filter: none !important;\n  pointer-events: auto !important;\n  -webkit-user-select: auto !important;\n          user-select: auto !important;\n  padding: 0 50px;\n}\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n  .dropdown-toggle::after {\n  display: none;\n}\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%] {\n  fill: #0a192f;\n}\n#logo[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda;\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .hex-container[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda;\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQ0E7RUFDQyxZQUFBO0VBQ0EsbUJERGU7RUNFZiwwRkRTVTtBQ1JYO0FBQ0U7RUFDQyxnQkFBQTtBQUNIO0FBRUU7RUFDQyxnQkFBQTtBQUFIO0FBRUU7RUFDQyxpQkFBQTtBQUFIO0FBR0M7RUFDQyxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtBQURGO0FBR0c7RUFDQyx3QkFBQTtBQURKO0FBR0c7RUFDQyxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdHO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHRztFQUNDLGFBQUE7QUFESjtBQUVJO0VBQ0MsV0FBQTtBQUFMO0FBS0M7RUFDQyw2REFBQTtFQUNBLFVBQUE7QUFIRjtBQUtDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkQ3RGM7RUM4RGQsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEZEeERTO0VDeURULHFEQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBSEY7QUFJRTtFQUNDLGFBQUE7RUFFQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRDNFYTtBQ3lFaEI7QUFHRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREo7QUFFSTtFQUNDLGVBQUE7RUFDQSxxQkFBQTtBQUFMO0FBQ0s7RUFDQyxjQUFBO0VBQ0EsY0RwRlU7RUNxRlYsZUFBQTtFQUNBLGtCQUFBO0FBQ047QUFDSztFQUNDLHFCQUFBO0VBQ0EsaUNBQUE7VUFBQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2REFBQTtFQUNBLHNCQUFBO0FBQ047QUFLQztFQUNDLDRCQUFBO0FBSEY7QUFLQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUNDLGNEaEhhO0FDOEdoQjtBQUtDO0VBQ0MsY0RwSGM7RUNxSGQsZUFBQTtBQUhGO0FBS0M7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLQztFQUNDLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSEY7QUFJRTs7O0VBR0MsV0FBQTtFQUNBLGFBQUE7QUFGSDtBQUlFO0VBQ0Msa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CRDdJYTtFQzhJYix5QkFBQTtBQUZIO0FBR0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRHBKWTtFQ3FKWiw2R0FBQTtBQURKO0FBSUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CRDdKWTtFQzhKWiwwR0FBQTtBQUZKO0FBS0c7RUFDQyxrQ0FBQTtBQUhKO0FBSUk7RUFDQyxNQUFBO0VBQ0Esd0JBQUE7RUFDQSwwR0FBQTtBQUZMO0FBS0k7RUFDQyxTQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FBQTtBQUhMO0FBVUM7RUFDQyxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0FBUkY7QUFZQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFURDtBQVlBO0VBQ0MsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkRBQUE7QUFURDtBQVlBO0VBRUU7SUFDQyxTQUFBO0lBQ0Esc0JBQUE7RUFWRDtBQUNGO0FBY0E7RUFDQztJQUNDLGFBQUE7RUFaQTtBQUNGO0FBZUE7RUFDQzs7SUFFQyxhQUFBO0VBYkE7QUFDRjtBQWdCQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBGRDdPVTtBQytOWDtBQWlCQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZEQ7QUFpQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBZEQ7QUFpQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBZEQ7QUFpQkE7RUFDQyw4QkFBQTtBQWREO0FBNkJBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTFCRDtBQTZCQTtFQUNDLGFBQUE7QUExQkQ7QUE2QkE7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7QUExQkQ7QUE2QkE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUExQkQ7QUE4QkM7RUFDQyxtQkFBQTtBQTNCRjtBQStCQTtFQUNDLGFBQUE7QUE1QkQ7QUErQkE7RUFDQyxjQUFBO0FBNUJEO0FBK0JBO0VBQ0MsVUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE1QkQ7QUErQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUE1QkQ7QUErQkE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUE1QkQ7QUErQkE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUE1QkQ7QUErQkE7RUFDQywwREFBQTtBQTVCRDtBQStCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTVCRDtBQStCQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQTVCRDtBQStCQTtFQUNDLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0FBNUJEIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcbi5tYWluLW5hdmJhciB7XG5cdGhlaWdodDogNzBweDtcblx0YmFja2dyb3VuZDogJE5hdnk7XG5cdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdC5tZW51LXVsIHtcblx0XHRsaSB7XG5cdFx0XHRtYXJnaW46IDBweCAxM3B4O1xuXHRcdH1cblx0XHQvLyBGaXJzdCBhbmQgTGFzdCBsaSBoYXMgbm8gbWFyZ2luXG5cdFx0bGk6Zmlyc3QtY2hpbGQge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHR9XG5cdFx0bGk6bGFzdC1jaGlsZCB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHR9XG5cdH1cblx0Lm1lbnUtcmVzcG9uc2l2ZSB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHRvcDogMHB4O1xuXHRcdGJvdHRvbTogMHB4O1xuXHRcdHJpZ2h0OiAwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHR6LWluZGV4OiAxMDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdG91dGxpbmU6IDBweDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuXHRcdGxpIHtcblx0XHRcdGEge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQuY3YtYnRuIHtcblx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0Lmxhbmd1YWdlLWNvbnRhaW5lciB7XG5cdFx0XHRcdHdpZHRoOiAyMDBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE4cHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMHB4O1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1xuXHRcdFx0fVxuXHRcdFx0Lmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDM1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmFzaWRlLXNob3cge1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG5cdFx0cmlnaHQ6IDBweDtcblx0fVxuXHRhc2lkZSB7XG5cdFx0d2lkdGg6IDc1dnc7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHJpZ2h0OiAtNjI1cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcblx0XHRib3gtc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KSAtMTBweCAwcHggMzBweCAtMTVweDtcblx0XHRwYWRkaW5nOiAyNXB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG5cdFx0bmF2IHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG5cdFx0XHRvbCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMHB4IGF1dG8gMTBweDtcblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRHcmVlbjtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG5cdFx0XHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDNweCAyMHB4IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5jdi1idG4ge1xuXHRcdHBhZGRpbmc6IDdweCAxNXB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0Lm5hdi1saW5rIHtcblx0XHRwYWRkaW5nOiA1cHggMHB4O1xuXHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHQmOmhvdmVyIHtcblx0XHRcdGNvbG9yOiAkR3JlZW47XG5cdFx0fVxuXHR9XG5cdC5uYXYtbnVtYmVyIHtcblx0XHRjb2xvcjogJEdyZWVuO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0fVxuXHQubmF2LXRleHQge1xuXHRcdGNvbG9yOiAkTGlnaHRlc3RTbGF0ZSAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctYm90dG9tOiA0cHg7XG5cdH1cblx0Lm1lbnUtd3JhcHBlciB7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHdpZHRoOiAzNnB4O1xuXHRcdGhlaWdodDogNjBweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ei1pbmRleDogMTE7XG5cdFx0LmhhbWJ1cmdlci1tZW51LFxuXHRcdC5oYW1idXJnZXItbWVudTphZnRlcixcblx0XHQuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcblx0XHRcdHdpZHRoOiAzNnB4O1xuXHRcdFx0aGVpZ2h0OiAxLjVweDtcblx0XHR9XG5cdFx0LmhhbWJ1cmdlci1tZW51IHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcblx0XHRcdGJhY2tncm91bmQ6ICRHcmVlbjtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XG5cdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0Ym90dG9tOiA4cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRHcmVlbjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcblx0XHRcdFx0XHR0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuXHRcdFx0fVxuXHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0dG9wOiA4cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRHcmVlbjtcblx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcblx0XHRcdFx0XHR0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuXHRcdFx0fVxuXHRcdFx0Ji5hbmltYXRlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcblx0XHRcdFx0XHRcdHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0dG9wOiAwcHg7XG5cdFx0ei1pbmRleDogMTE7XG5cdFx0cGFkZGluZzogMHB4IDUwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAyNSwgNDcsIDAuODUpO1xuXHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcblx0XHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblx0XHRmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcblx0XHRwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuXHRcdHVzZXItc2VsZWN0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZzogMCA1MHB4O1xuXHR9XG59XG5cbi5vbi10b3Age1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDk7XG5cdGhlaWdodDogMTAwcHg7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG5cbi5uYXYtc2hhZG93IHtcblx0aGVpZ2h0OiA3MHB4O1xuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTBweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHQubWFpbi1uYXZiYXIge1xuXHRcdC5uYXYtbGluayB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcblx0bmF2IC5uYXYge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgyN3B4KSB7XG5cdC5tZW51LXdyYXBwZXIsXG5cdC5tZW51LXJlc3BvbnNpdmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLmZsYWctdGV4dCB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRtYXJnaW46IDAgMTBweDtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRmb250LWZhbWlseTogJENvZGVGb250O1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyIHtcblx0cGFkZGluZy1sZWZ0OiAxNnB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6ICMwYTE5MmYgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcblx0Y29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcblx0cGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3I6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlOmFmdGVyIHtcbi8vICAgICBjb250ZW50OiBcIiBcIjtcbi8vICAgICBiYWNrZ3JvdW5kOiAjNThlMmM0O1xuLy8gICAgIHdpZHRoOiA2MSU7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXJnaW46IGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogMjFweDtcbi8vIH1cbi5hcnJvdy1sYW5ndWFnZSB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0aGVpZ2h0OiAxMHB4O1xuXHR3aWR0aDogMTBweDtcblx0ZmlsbDogIzY0ZmZkYTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LnNob3cge1xuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kOiAjY2NkNmY2ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcblx0bGVmdDogMjBweCAhaW1wb3J0YW50O1xuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2IoMiAxMiAyNyAvIDcwJSk7XG59XG5cbi5hcnJvdy1hY3RpdmUge1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0d2lkdGg6IDI1cHg7XG5cdGZpbGw6ICM2NGZmZGE7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuXHQuYXJyb3ctYWN0aXZlIHtcblx0XHR2aXNpYmlsaXR5OiBpbmhlcml0O1xuXHR9XG59XG5cbi5sb2dvIGEgLmxvZ28tY29udGFpbmVyIHN2ZyBwb2x5Z29uIHtcblx0ZmlsbDogIzBhMTkyZjtcbn1cblxuI2xvZ28ge1xuXHRjb2xvcjogIzY0ZmZkYTtcbn1cblxuLmxvZ28gYSAubG9nby1jb250YWluZXIgc3ZnIHtcblx0ZmlsbDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbnN2ZyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZpbGw6IGN1cnJlbnRjb2xvcjtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvZ28gYSAubG9nby1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIGEge1xuXHRjb2xvcjogIzY0ZmZkYTtcblx0d2lkdGg6IDQycHg7XG5cdGhlaWdodDogNDJweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xufVxuXG4ubG9nbyBhIC5oZXgtY29udGFpbmVyIHtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cblxuc3ZnIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0ZmlsbDogY3VycmVudGNvbG9yO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nbyBhIHtcblx0Y29sb3I6ICM2NGZmZGE7XG5cdHdpZHRoOiA0MnB4O1xuXHRoZWlnaHQ6IDQycHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcbn1cblxuLmxvZ28ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateMenu", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: "translateY(-50%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1, transform: "none" })),
                        ]),
                    ]),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 2491:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function AboutComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 21);
} if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AboutComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 55, vars: 6, consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skills-list"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "lbrXps"], [1, "wrapper"], ["data-gatsby-image-wrapper", "", 1, "gatsby-image-wrapper", "gatsby-image-wrapper-constrained", "img"], [2, "max-width", "500px", "display", "block"], ["alt", "", "role", "presentation", "aria-hidden", "true", "src", "data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E", 2, "max-width", "100%", "display", "block", "position", "static"], ["aria-hidden", "true", "data-placeholder-image", "", 2, "opacity", "0", "transition", "opacity 500ms linear 0s", "background-color", "rgb(232, 232, 232)", "position", "absolute", "inset", "0px", "object-fit", "cover"], ["width", "300", "height", "300", "data-main-image", "", "sizes", "(min-width: 500px) 500px, 100vw", "decoding", "async", "src", "assets/images/me/florece.jpeg", "srcset", "\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/florece.jpeg 125w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/florece.jpeg 250w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/florece.jpeg 500w\n\t\t\t\t\t\t\t\t\t\t", "alt", "Headshot", 2, "object-fit", "cover", "opacity", "1"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 1, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10)(15, "li", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "MongoDB, Express, Angular, NodeJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "RxJS, NgRx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11)(22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "HTML & (S)CSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 11)(25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "JavaScript, TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 11)(28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Swift, ReactNative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 11)(31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "PHP, Python ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 11)(34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Jest (TDD) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 11)(37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "CI / CD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 11)(40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Bootstrap, Material, PrimeFaces, Tailwind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 11)(43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "WordPress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13)(46, "div", 14)(47, "div", 15)(48, "div", 16)(49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "AboutMe.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 4, "AboutMe.Paragraphs"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  border-radius: 3px;\n  bottom: 290px;\n  left: 23px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  color: #8892b0;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n.lbrXps[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 300px;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: block;\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  background-color: #64ffda;\n}\n.wrapper[_ngcontent-%COMP%]::before {\n  top: 0px;\n  left: 0px;\n  background-color: #0a192f;\n  mix-blend-mode: screen;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  border: 2px solid #64ffda;\n  top: 14px;\n  left: 14px;\n  z-index: -1;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::before, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n  transform: translate(-4px, -4px);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover::after, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus::after {\n  transform: translate(8px, 8px);\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   [data-main-image][_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateZ(0);\n  transition: opacity 0.25s linear;\n  will-change: opacity;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: 0;\n  max-width: none;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  object-fit: cover;\n}\nimg[alt=\"\"][_ngcontent-%COMP%], img[_ngcontent-%COMP%]:not([alt]) {\n  filter: blur(5px);\n}\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], .gatsby-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  mix-blend-mode: multiply;\n  filter: grayscale(100%) contrast(1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.gatsby-image-wrapper-constrained[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%], .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus   .img[_ngcontent-%COMP%] {\n  filter: none;\n  mix-blend-mode: normal;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLDhFQUFBO0FER0M7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQztFQUNDLFlBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRkg7QUFLRTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQUhIO0FBT0M7RUFDQyxhQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEY7QUFRQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwRkNoQ1M7RURpQ1QsY0N6Q2M7QURtQ2hCO0FBT0U7RUFDQyxtQkFBQTtBQUxIO0FBUUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0M5Q2E7RUQrQ2IsZUFBQTtFQUNBLGlCQUFBO0FBTkg7QUFXQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSRDtBQVdBO0VBQ0Msa0RBQUE7RUFDQSwwREFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2pFZTtBRHlEaEI7QUFXQTtFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQVJEO0FBV0E7RUFDQyx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVJEO0FBV0E7O0VBRUMsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtBQVJEO0FBV0E7O0VBRUMsWUFBQTtFQUNBLGdDQUFBO0FBUkQ7QUFXQTs7RUFFQyxrREFBQTtBQVJEO0FBVUE7O0VBRUMsOEJBQUE7QUFQRDtBQVNBO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQU5EO0FBUUE7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTEQ7QUFRQTs7RUFFQyxpQkFBQTtBQUxEO0FBUUE7OztFQUdDLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFMRDtBQVFBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwREFBQTtBQUxEO0FBUUE7RUFDQyxxQkFBQTtBQUxEO0FBUUE7RUFDQyxnQkFBQTtBQUxEO0FBUUE7O0VBRUMsWUFBQTtFQUNBLHNCQUFBO0FBTEQ7QUFRQTtFQUNDO0lBQ0MsaUJBQUE7SUFDQSxlQUFBO0VBTEE7QUFDRjtBQVFBO0VBRUU7SUFDQyxZQUFBO0lBQ0EsYUFBQTtFQVBEO0VBU0E7SUFDQyxZQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBUEQ7QUFDRjtBQVdBO0VBRUU7SUFDQyxXQUFBO0VBVkQ7RUFZQztJQUNDLFlBQUE7SUFDQSxhQUFBO0VBVkY7RUFhQztJQUNDLGFBQUE7RUFYRjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmFib3V0IHtcblx0LmFib3V0LWRlc2NyaXB0aW9uIHtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdG1heC13aWR0aDogNDgwcHg7XG5cdH1cblxuXHQuYWJvdXQtaW1nLWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDMyNHB4O1xuXHRcdG1hcmdpbjogYXV0bztcblxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdC8vIGJvcmRlcjogMnB4IHNvbGlkICRHcmVlbjtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHdpZHRoOiAzMDBweDtcblx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRib3R0b206IDI5MHB4O1xuXHRcdFx0bGVmdDogMjNweDtcblx0XHR9XG5cblx0XHRpbWcge1xuXHRcdFx0ei1pbmRleDogMjtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cdH1cblxuXHQuc2tpbGxzLWxpc3Qge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAyMDBweCkpO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDIwcHggMCAwIDA7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0fVxuXG5cdC5za2lsbC1lbGVtZW50IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdFx0Y29sb3I6ICRTbGF0ZTtcblx0XHRzcGFuIHtcblx0XHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0fVxuXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCLilrlcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRjb2xvcjogJEdyZWVuO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEycHg7XG5cdFx0fVxuXHR9XG59XG5cbi5sYnJYcHMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5sYnJYcHMgLndyYXBwZXIge1xuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJEdyZWVuO1xufVxuXG4ud3JhcHBlcjo6YmVmb3JlIHtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcblx0bWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbn1cblxuLmxiclhwcyAud3JhcHBlcjo6YWZ0ZXIge1xuXHRib3JkZXI6IDJweCBzb2xpZCAkR3JlZW47XG5cdHRvcDogMTRweDtcblx0bGVmdDogMTRweDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6OmJlZm9yZSxcbi5sYnJYcHMgLndyYXBwZXI6OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyOmhvdmVyLFxuLmxiclhwcyAud3JhcHBlcjpmb2N1cyB7XG5cdG91dGxpbmU6IDBweDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTRweCk7XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6aG92ZXIsXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzLXZpc2libGUge1xuXHRib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbn1cbi5sYnJYcHMgLndyYXBwZXI6aG92ZXI6OmFmdGVyLFxuLmxiclhwcyAud3JhcHBlcjpmb2N1czo6YWZ0ZXIge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDhweCk7XG59XG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIgW2RhdGEtbWFpbi1pbWFnZV0ge1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgbGluZWFyO1xuXHR3aWxsLWNoYW5nZTogb3BhY2l0eTtcbn1cbi5nYXRzYnktaW1hZ2Utd3JhcHBlciBpbWcge1xuXHRib3R0b206IDA7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0bWFyZ2luOiAwO1xuXHRtYXgtd2lkdGg6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5pbWdbYWx0PVwiXCJdLFxuaW1nOm5vdChbYWx0XSkge1xuXHRmaWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuaW1nLFxuc3ZnLFxuLmdhdHNieS1pbWFnZS13cmFwcGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogMTAwJTtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxiclhwcyAud3JhcHBlciAuaW1nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcblx0ZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgY29udHJhc3QoMSk7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG5cbi5nYXRzYnktaW1hZ2Utd3JhcHBlci1jb25zdHJhaW5lZCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmdhdHNieS1pbWFnZS13cmFwcGVyIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxiclhwcyAud3JhcHBlcjpob3ZlciAuaW1nLFxuLmxiclhwcyAud3JhcHBlcjpmb2N1cyAuaW1nIHtcblx0ZmlsdGVyOiBub25lO1xuXHRtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcblx0LmFib3V0LWltZy1jb250YWluZXIge1xuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblx0LmFib3V0IHtcblx0XHQuYWJvdXQtaW1nLWNvbnRhaW5lciBpbWcge1xuXHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHR9XG5cdFx0LmFib3V0LWltZy1jb250YWluZXI6YWZ0ZXIge1xuXHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdGJvdHRvbTogMTkwcHg7XG5cdFx0XHRsZWZ0OiA3NHB4O1xuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblx0LmFib3V0IHtcblx0XHQuYWJvdXQtaW1nLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDE4MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */"] });


/***/ }),

/***/ 7206:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class BannerComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 19, vars: 7, consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], ["href", "mailto:annr.dev@gmail.com", "target", "_black", 1, "main-btn", 3, "click"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hello! My name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Florece Ann Robles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "I build digital platforms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_16_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "banner", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bannerTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 3, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 5, "Banner.ActionBtn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  background: linear-gradient(120deg, #50efb5, #8ff4ca, #7e57c2, #0087f2, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);\n  color: #fff;\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDQyxpQkFBQTtBQUFEO0FBRUM7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQUFGO0FBRUU7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0FBQUg7QUFFRztFQUNDLGdCQUFBO0FBQUo7QUFHRztFQUNDLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBGRFRPO0FDUVg7QUFJRzs7RUFFQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtSkRuQk87RUNvQlAsb0hBQUE7RUFZQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQWJKO0FBZ0JHO0VBQ0MsY0QzQ1k7QUM2QmhCO0FBaUJHO0VBQ0MsY0RqRFk7QUNrQ2hCO0FBa0JHO0VBQ0MsbUJBQUE7QUFoQko7QUFtQkc7RUFDQyxnQkFBQTtBQWpCSjtBQW9CRztFQUNDLFlBQUE7QUFsQkoiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XG5cbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYmFubmVyIHtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cblx0LmNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogdGFibGU7XG5cdFx0aGVpZ2h0OiAxMDB2aDtcblxuXHRcdC5zZWN0aW9uLWJveC1iYW5uZXIge1xuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cblx0XHRcdC5jb250ZW50IHtcblx0XHRcdFx0bWFyZ2luLXRvcDogOThweDtcblx0XHRcdH1cblxuXHRcdFx0aDEge1xuXHRcdFx0XHRjb2xvcjogIzY0ZmZkYTtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMjBweCAzcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcblx0XHRcdH1cblxuXHRcdFx0aDIsXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogODBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRmb250LWZhbWlseTogJE1haW5Gb250O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0XHRcdFx0MTIwZGVnLFxuXHRcdFx0XHRcdCM1MGVmYjUsXG5cdFx0XHRcdFx0IzhmZjRjYSxcblx0XHRcdFx0XHQjN2U1N2MyLFxuXHRcdFx0XHRcdCMwMDg3ZjIsXG5cdFx0XHRcdFx0IzI2YzZkYSxcblx0XHRcdFx0XHQjNDNhMDQ3LFxuXHRcdFx0XHRcdCNlZWZmNDEsXG5cdFx0XHRcdFx0I2Y5YTgyNSxcblx0XHRcdFx0XHQjZmY1NzIyXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG5cdFx0XHRcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRjb2xvcjogJFNsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHQuYmFubmVyLWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNzBweDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdG1heC13aWR0aDogODAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5kaXYtYnRuLWJhbm5lciB7XG5cdFx0XHRcdGhlaWdodDogNDNweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0, transform: "translateX(-50px)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 1605:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class ContactComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 12, consts: [["id", "contact", 1, "section", "contact"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:annr.dev@gmail.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_14_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" 05. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Contact.Pretitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Contact.Content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "Contact.Btn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0k7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBRFI7QUFJSTtFQUVJLGtCQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRHhCUTtFQ3lCUixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUhSO0FBS0k7RUFDSSxrQkFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjRHpDUTtFQzBDUixlQUFBO0VBQ0EsMEZEdkNHO0VDd0NILG1CQUFBO0VBQ0EsbUJBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFRQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VBTk47RUFRTTtJQUNJLG1CQUFBO0lBQ0Esc0JBQUE7RUFOVjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcblxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jb250YWN0e1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtdGl0bGV7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5jb250YWN0LXByZS10aXRsZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICBcbiAgICAuY29udGFjdHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 3575:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 7206);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2491);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/jobs.component */ 185);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 2711);
/* harmony import */ var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-projects/more-projects.component */ 6437);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4407);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ 1605);









class HomeComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-banner")(2, "app-about")(3, "app-jobs")(4, "app-projects")(5, "app-more-projects")(6, "app-testimonial")(7, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__.JobsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.projectsComponent, _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_5__.MoreprojectsComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__.TestimonialComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7142:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3575);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2491);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 7206);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1605);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4407);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobs/jobs.component */ 185);
/* harmony import */ var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-projects/more-projects.component */ 6437);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ 2711);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__.JobsComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.projectsComponent,
        _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__.MoreprojectsComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
        _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__.TestimonialComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 185:
/*!********************************************************!*\
  !*** ./src/app/components/home/jobs/jobs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsComponent": () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function JobsComponent_li_12_ng_template_3_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const jobDescriptionParagraph_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobsComponent_li_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, JobsComponent_li_12_ng_template_3_p_6_Template, 2, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
} if (rf & 2) {
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", job_r2.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@ ", job_r2.Tab, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r2.Description);
} }
function JobsComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JobsComponent_li_12_ng_template_3_Template, 8, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", job_r2.Tab)("ngbNavItem", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Tab);
} }
class JobsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.active = 0;
    }
    ngOnInit() {
    }
}
JobsComponent.ɵfac = function JobsComponent_Factory(t) { return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
JobsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobsComponent, selectors: [["app-jobs"]], decls: 15, vars: 8, consts: [["id", "jobs", 1, "section", "jobs"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "ul", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function JobsComponent_Template_ul_activeIdChange_10_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobsComponent_li_12_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Experience.Jobs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 185px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: #303c55;\n}\n.jobs[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n    padding-left: 30px;\n  }\n\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEVBQUE7QURFQTtFQUNDLGFBQUE7QUFDRDtBQUNDO0VBQ0MsaUJBQUE7QUFDRjtBQUVDO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQztFQUNDLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBREY7QUFJQztFQUNDLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQztFQUNDLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLGVBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRkMzQ1M7RUQ0Q1QsZUFBQTtFQUNBLGNDckRjO0FEa0RoQjtBQU1DO0VBQ0MsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFKRjtBQVFBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBTEQ7QUFPQztFQUNDLGNDbkVjO0VEb0VkLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFPRTtFQUNDLGNDdkVhO0FEa0VoQjtBQVNDO0VBQ0MsMEZDeEVTO0VEeUVULGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0N0RmM7RUR1RmQsbUJBQUE7QUFQRjtBQVVDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJGO0FBVUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0NqR2E7QUR5RmhCO0FBYUE7RUFFRTtJQUNDLFlBQUE7SUFDQSxrQkFBQTtFQVhEOztFQWNEO0lBQ0MseUJBQUE7RUFYQTtFQWFBO0lBQ0MsMkJBQUE7RUFYRDtFQWNBO0lBQ0MsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFaRDtBQUNGIiwiZmlsZSI6ImpvYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0LnRhYi1jb250ZW50IHtcblx0XHRtYXJnaW4tbGVmdDogMzhweDtcblx0fVxuXG5cdHVsIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMTg1cHg7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHR9XG5cblx0YS5hY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnkgIWltcG9ydGFudDtcblx0XHRjb2xvcjogJEdyZWVuICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0fVxuXG5cdGE6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnkgIWltcG9ydGFudDtcblx0XHRjb2xvcjogJEdyZWVuICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0fVxuXG5cdGEge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG5cdFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuXHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdGhlaWdodDogNDJweDtcblx0XHRwYWRkaW5nOiAwIDIwcHggMnB4O1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRjb2xvcjogJFNsYXRlO1xuXHR9XG5cblx0bGkge1xuXHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgJExpZ2h0ZXN0TmF2eTtcblx0XHRib3JkZXItbGVmdC13aWR0aDogMnB4O1xuXHRcdGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItbGVmdC1jb2xvcjogcmdiKDQ4LCA2MCwgODUpO1xuXHR9XG59XG5cbi5qb2JzIHtcblx0bWF4LXdpZHRoOiA3MDBweDtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdC50aXRsZS10YWItY29udGVudCB7XG5cdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcblxuXHRcdC5jb21wYW55LXRhYi1jb250ZW50IHtcblx0XHRcdGNvbG9yOiAkR3JlZW47XG5cdFx0fVxuXHR9XG5cblx0LmpvYi10aW1lIHtcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcblx0XHQtbW96LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG5cdFx0LW1zLWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcblx0XHRjb2xvcjogJExpZ2h0U2xhdGU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXG5cdC5qb2ItZGVzY3JpcHRpb24ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIuKWuVwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdGNvbG9yOiAkR3JlZW47XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuam9icyB7XG5cdFx0LmpvYi1kZXNjcmlwdGlvbiB7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdFx0fVxuXHR9XG5cdDo6bmctZGVlcCAuam9icy10YWJzIHtcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG5cdFx0LnRhYi1jb250ZW50IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHR1bCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHRcdH1cblx0fVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XG5cbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */"] });


/***/ }),

/***/ 6437:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/more-projects/more-projects.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreprojectsComponent": () => (/* binding */ MoreprojectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function MoreprojectsComponent_div_9_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r4);
} }
function MoreprojectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const project_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.redirect(project_r1["demoLink"], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13)(6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.analyticsService.sendAnalyticEvent("click_pokemonlist_external_link", "projects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.analyticsService.sendAnalyticEvent("click_pokemonlist_github", "projects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoreprojectsComponent_div_9_li_16_Template, 3, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
} }
class MoreprojectsComponent {
    constructor(router, analyticsService) {
        this.router = router;
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    redirect(route, event) {
        const id = event.target.id;
        if (id == "demoLink" || id == "ghLink") {
            return;
        }
        window.open(route, "_blank");
    }
}
MoreprojectsComponent.ɵfac = function MoreprojectsComponent_Factory(t) { return new (t || MoreprojectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
MoreprojectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoreprojectsComponent, selectors: [["app-more-projects"]], decls: 11, vars: 6, consts: [[1, "section", "more-projects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 project-col", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "project-col", 3, "click"], [1, "more-project-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["src", "assets/images/folder.svg", "width", "40"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "href", "click"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-project-title", "mt-4"], [1, "other-project-description"], [1, "more-projects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"]], template: function MoreprojectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MoreprojectsComponent_div_9_Template, 17, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "OtherProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "OtherProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover, .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwibW9yZS1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0dDO0VBQ0MsYUFBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBQ0Msa0RBQUE7RUFFQSwwREFBQTtFQUlBLGFBQUE7RUFJQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0Esc0JBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLHlCRGpDYTtFQ2tDYixlQUFBO0FBREg7QUFHRztFQUdDLDJCQUFBO0FBREo7QUFHRztFQUVDLGtEQUFBO0FBRko7QUFLRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0QzQ1k7QUN3Q2hCO0FBTUc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjRG5EWTtBQytDaEI7QUFPRztFQUNDLGVBQUE7RUFDQSxjRHpEWTtBQ29EaEI7QUFRRztFQUlDLGFBQUE7RUFJQSxxQkFBQTtFQUlBLFlBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0MsZUFBQTtFQUNBLGNEbkZXO0VDb0ZYLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRkQ5RU07QUN3RVg7QUFPSztFQUNDLHFCQUFBO0FBTE47QUFhQTtFQUVFO0lBQ0MsWUFBQTtFQVhEO0FBQ0YiLCJmaWxlIjoibW9yZS1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xuXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1vcmUtcHJvamVjdHMge1xuXHQucHJvamVjdC1jb2wge1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0aGVpZ2h0OiA0MDBweDtcblxuXHRcdC5tb3JlLXByb2plY3QtYm94IHtcblx0XHRcdGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcblx0XHRcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdFx0XHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcblx0XHRcdC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRwYWRkaW5nOiAycmVtIDEuNzVyZW07XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHRcdFx0XHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG5cdFx0XHR9XG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0Jjpmb2N1cyB7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdmcge1xuXHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRjb2xvcjogJEdyZWVuO1xuXHRcdFx0fVxuXG5cdFx0XHQub3RoZXItcHJvamVjdC10aXRsZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDEwcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHQub3RoZXItcHJvamVjdC1kZXNjcmlwdGlvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcblx0XHRcdFx0Y29sb3I6ICRMaWdodFNsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHQubW9yZS1wcm9qZWN0cy1za2lsbHMge1xuXHRcdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdFx0XHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcblx0XHRcdFx0LW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdC13ZWJraXQtYm94LWZsZXg6IDE7XG5cdFx0XHRcdC13ZWJraXQtZmxleC1ncm93OiAxO1xuXHRcdFx0XHQtbXMtZmxleC1wb3NpdGl2ZTogMTtcblx0XHRcdFx0ZmxleC1ncm93OiAxO1xuXHRcdFx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRtYXJnaW46IDIwcHggMCAwIDA7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRjb2xvcjogJFNsYXRlO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjc1O1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xuXHRcdFx0XHRcdC51bmRlcmxpbmUge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDMuNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG5cdC5tb3JlLXByb2plY3RzIHtcblx0XHQucHJvamVjdC1jb2wge1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdH1cblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 2711:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsComponent": () => (/* binding */ projectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





const _c0 = ["imgContainer"];
function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r16.$implicit;
    const i_r2 = ctx_r16.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r10.slide + i_r2);
} }
function projectsComponent_div_9_owl_carousel_o_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function projectsComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function projectsComponent_div_9_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r19);
} }
function projectsComponent_div_9_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function projectsComponent_div_9_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r27.$implicit;
    const i_r2 = ctx_r27.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r22.slide + i_r2);
} }
function projectsComponent_div_9_owl_carousel_o_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r8.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function projectsComponent_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function projectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, projectsComponent_div_9_div_2_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function projectsComponent_div_9_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.debug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, projectsComponent_div_9_li_13_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, projectsComponent_div_9_a_15_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, projectsComponent_div_9_a_16_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, projectsComponent_div_9_owl_carousel_o_17_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, projectsComponent_div_9_div_18_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", project_r1.img, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("project-info-right", i_r2 % 2 == 0)("project-info-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 33, "FeatureProjects.Label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", project_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("justify-content-end", i_r2 % 2 == 0)("justify-content-start", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["ghLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["demoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
} }
class projectsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            navSpeed: 700,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
        };
    }
    ngOnInit() { }
    debug() {
        this.imgContainer.nativeElement.scroll({
            top: this.imgContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }
}
projectsComponent.ɵfac = function projectsComponent_Factory(t) { return new (t || projectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
projectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: projectsComponent, selectors: [["app-projects"]], viewQuery: function projectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
    } }, decls: 12, vars: 6, consts: [["id", "projects", 1, "section", "projects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["class", "d-flex project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "project-container"], ["class", "owl-carousel-o", 3, "options", 4, "ngIf"], ["class", "img-feature-project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], [1, "h-100"], [1, "project-box"], [1, "feature-project"], [1, "project-name"], [1, "project-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], [1, "project-skills"], ["class", "ml-3", 4, "ngFor", "ngForOf"], [1, "project-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], [1, "owl-carousel-o", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "img-container"], ["imgContainer", ""], [1, "img-feature-project", "rounded", 3, "src", "alt"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-project-container"], [1, "img-feature-project-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-project", "rounded", 3, "src", "alt"], [1, "ml-3"], [1, "underline", "technology"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "ml-3", "fab", "fa-github"], [1, "ml-3", "fas", "fa-external-link-alt"]], template: function projectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, projectsComponent_div_9_Template, 19, 35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "FeatureProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n  height: 450px;\n  margin: 100px 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .feature-project[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.img-feature-project-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-feature-project-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .img-feature-project-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .projects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: #0a192fe3;\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  background: #ffffff33;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 420px;\n  overflow: auto;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQztFQUNDLGFBQUE7RUFDQSxlQUFBO0FBQUY7QUFDRTtFQUNDLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNIO0FBQ0U7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSDtBQUNFO0VBQ0MsbUJBQUE7RUFDQSxzQkFBQTtBQUNIO0FBQUc7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGRZO0VDZVosMEZEWE87RUNZUCxnQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUFHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0R4Qlk7QUMwQmhCO0FBQUc7RUFDQyxrREFBQTtFQUVBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRHJDWTtFQ3NDWixjRG5DWTtFQ29DWixlQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFHO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDQyxlQUFBO0VBQ0EsMEZEL0NNO0VDZ0ROLGVBQUE7RUFDQSxjRHpEVztFQzBEWCxrQkFBQTtFQUNBLG1CQUFBO0FBR0w7QUFGSztFQUNDLG1CQUFBO0FBSU47QUFBRztFQUNDLGdCQUFBO0FBRUo7QUFESTtFQUNDLGVBQUE7QUFHTDtBQUlBO0VBQ0MsWUFBQTtBQUREO0FBR0E7RUFDQyxhQUFBO0FBQUQ7QUFHQTtFQUNDO0lBQ0MsYUFBQTtFQUFBOztFQUVEO0lBQ0MsVUFBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7RUFDQTtFQUFBO0lBQ0MsbUJBQUE7SUFDQSxzQkFBQTtFQUVEO0VBQUE7SUFDQyxXQUFBO0VBRUQ7O0VBQ0Q7O0lBRUMsVUFBQTtFQUVBO0FBQ0Y7QUFDQTtFQUNDOztJQUVDLGlDQUFBO0VBQ0E7QUFDRjtBQUVBO0VBQ0M7SUFDQyxhQUFBO0VBQUE7O0VBR0E7SUFDQyx1QkFBQTtJQUNBLHlCQUFBO0VBQUQ7RUFDQztJQUNDLFdBQUE7RUFDRjtFQUNDO0lBQ0MsV0FBQTtFQUNGO0VBQ0M7SUFDQyx1QkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLHdDQUFBO0lBQ0EsY0RuSVk7SUNvSVosZUFBQTtJQUNBLGtCQUFBO0VBQ0Y7RUFDQzs7SUFFQyx5QkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0Esa0JBQUE7RUFDRjtFQUFFOztJQUNDLGNBQUE7RUFHSDtFQUFDO0lBQ0MsYUFBQTtFQUVGO0VBQ0E7O0lBRUMsWUFBQTtFQUNEO0VBQ0E7O0lBRUMsNkJBQUE7RUFDRDtFQUNBO0lBQ0Msa0NBQUE7RUFDRDtFQUNBO0lBQ0Msa0NBQUE7RUFDRDtFQUVBOztJQUVDLGFBQUE7SUFDQSxxQkFBQTtFQUFEO0FBQ0Y7QUFJQTs7RUFFQyxrQ0FBQTtBQUZEO0FBS0E7RUFDQyxxQkFBQTtBQUZEO0FBS0E7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRDtBQUtBLFVBQUE7QUFFQTtFQUNDLFVBQUE7QUFIRDtBQU1BLFVBQUE7QUFFQTtFQUNDLGlDQUFBO0VBQ0Esa0JBQUE7QUFKRDtBQU9BLFdBQUE7QUFFQTtFQUNDLG1CRDNNZTtFQzRNZixrQkFBQTtBQUxEO0FBUUEsb0JBQUE7QUFFQTtFQUNDLG1CRGxOZTtBQzRNaEIiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcblxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG4ucHJvamVjdHMge1xuXHQucHJvamVjdC1jb250YWluZXIge1xuXHRcdGhlaWdodDogNDUwcHg7XG5cdFx0bWFyZ2luOiAxMDBweCAwO1xuXHRcdC5wcm9qZWN0LWluZm8tbGVmdCB7XG5cdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtNTdweDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0XHRkaXNwbGF5OiB0YWJsZTtcblx0XHR9XG5cdFx0LnByb2plY3QtaW5mby1yaWdodCB7XG5cdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IC01N3B4O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRkaXNwbGF5OiB0YWJsZTtcblx0XHR9XG5cdFx0LnByb2plY3QtYm94IHtcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0LmZlYXR1cmUtcHJvamVjdCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0Y29sb3I6ICRHcmVlbjtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1uYW1lIHtcblx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4O1xuXHRcdFx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1kZXNjcmlwdGlvbi1ib3gge1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRTbGF0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHR9XG5cdFx0XHQucHJvamVjdC1za2lsbHMge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdFx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRtYXJnaW46IDI1cHggMCAxMHB4O1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdGNvbG9yOiAkU2xhdGU7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0LnRlY2hub2xvZ3kge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5wcm9qZWN0LWxpbmtzIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5vd2wtY2Fyb3VzZWwtbyB7XG5cdHdpZHRoOiA2MDBweDtcbn1cbi5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuXHQub3dsLWNhcm91c2VsLW8ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmltZy1mZWF0dXJlLXByb2plY3QtY29udGFpbmVyIHtcblx0XHR3aWR0aDogNTAlO1xuXHRcdGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG5cdFx0aGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuXHRcdC5pbWctZmVhdHVyZS1wcm9qZWN0LWJveCB7XG5cdFx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHR9XG5cdFx0LmltZy1mZWF0dXJlLXByb2plY3Qge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG5cdC5wcm9qZWN0LWluZm8tcmlnaHQsXG5cdC5wcm9qZWN0LWluZm8tbGVmdCB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LnByb2plY3QtaW5mby1yaWdodCxcblx0LnByb2plY3QtaW5mby1sZWZ0IHtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5vd2wtY2Fyb3VzZWwtbyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQucHJvamVjdHMge1xuXHRcdC5wcm9qZWN0LWNvbnRhaW5lciB7XG5cdFx0XHRoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcblx0XHRcdG1hcmdpbjogMzNweCAwICFpbXBvcnRhbnQ7XG5cdFx0XHQucHJvamVjdC1pbmZvLWxlZnQge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHRcdC5wcm9qZWN0LWluZm8tcmlnaHQge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHRcdC5wcm9qZWN0LWRlc2NyaXB0aW9uLWJveCB7XG5cdFx0XHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ei1pbmRleDogMjtcblx0XHRcdFx0cGFkZGluZzogMjVweDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdFx0Y29sb3I6ICRMaWdodFNsYXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdH1cblx0XHRcdC5wcm9qZWN0LWluZm8tcmlnaHQsXG5cdFx0XHQucHJvamVjdC1pbmZvLWxlZnQge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXHRcdFx0XHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdFx0LnByb2plY3QtYm94IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmltZy1mZWF0dXJlLXByb2plY3QtY29udGFpbmVyIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnByb2plY3QtaW5mby1yaWdodCxcblx0XHQucHJvamVjdC1pbmZvLWxlZnQge1xuXHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdH1cblx0XHQudGV4dC1yaWdodCxcblx0XHQudGV4dC1sZWZ0IHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdH1cblx0XHQuanVzdGlmeS1jb250ZW50LWVuZCB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdH1cblx0XHQuanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cdFx0LnByb2plY3QtaW5mby1yaWdodCAucHJvamVjdC1ib3gsXG5cdFx0LnByb2plY3QtaW5mby1sZWZ0IC5wcm9qZWN0LWJveCB7XG5cdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogIzBhMTkyZmUzO1xuXHRcdH1cblx0fVxufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcblx0YmFja2dyb3VuZDogI2ZmZmZmZjMzO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA2MDBweDtcblx0bWF4LWhlaWdodDogNDIwcHg7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIHdpZHRoICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHR3aWR0aDogN3B4O1xufVxuXG4vKiBUcmFjayAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjODg5MmIwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZDogJEdyZWVuO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0YmFja2dyb3VuZDogJEdyZWVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 4407:
/*!**********************************************************************!*\
  !*** ./src/app/components/home/testimonial/testimonial.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialComponent": () => (/* binding */ TestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function TestimonialComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 8)(3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const testimonial_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", testimonial_r1.Comment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", testimonial_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" -", testimonial_r1.Name, ", ", testimonial_r1.Position, " of ", testimonial_r1.Company, " ");
} }
class TestimonialComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() { }
}
TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
TestimonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 11, vars: 6, consts: [["id", "testimonial", 1, "section", "testimonials"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], [4, "ngFor", "ngForOf"], [1, "testimonial-content"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["alt", "", 1, "testimonial-photo", 3, "src"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestimonialComponent_ng_container_9_Template, 6, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "Testimonial.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Testimonial.Items"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".testimonials.section[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.testimonial-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 20px;\n}\n\n.testimonial-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNEIiwiZmlsZSI6InRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy5zZWN0aW9uIC5zZWN0aW9uLWJveCB7XG5cdHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udGVzdGltb25pYWwtcGhvdG8ge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRlc3RpbW9uaWFsLWNvbnRlbnQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3325:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 5943);


class AnalyticsService {
    constructor($gaService) {
        this.$gaService = $gaService;
    }
    sendAnalyticEvent(action, category, label) {
        this.$gaService.event(action, category, label);
    }
    sendAnalyticPageView(path, title) {
        this.$gaService.pageView(path, title);
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService)); };
AnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5307:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class LanguageService {
    constructor(translateService, location) {
        this.translateService = translateService;
        this.location = location;
    }
    initLanguage() {
        this.translateService.addLangs(["en", "es"]);
        let language = navigator.language || navigator.userLanguage;
        language = "en";
        this.translateService.setDefaultLang(language);
        // Change the URL without navigate:
        this.location.go(language);
        this.language = language;
    }
    changeLanguage(language) {
        this.translateService.setDefaultLang(language);
        this.location.go(language);
        this.language = language;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4766:
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
    trackAnalyticID: "G-XE9X54XCMH"
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

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map