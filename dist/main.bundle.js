webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arbitrage_arbitrage_component__ = __webpack_require__("../../../../../src/app/arbitrage/arbitrage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'arbitrage', component: __WEBPACK_IMPORTED_MODULE_3__arbitrage_arbitrage_component__["a" /* ArbitrageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    background-color: #ffffff;\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    color: #444444; }\n\nh1, h2 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding-bottom: 1.2rem;\n    border-bottom: 1px solid #dfdfdf; }\n\nh3, h4, h5, h6 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\na, a:visited {\n    color: #7376df; }\n\na:hover, a:focus, a:active {\n    color: #6365d2;\n    text-decoration: none; }\n\n.nav-pills .nav-item.show .nav-link, .nav-pills .nav-link.active {\n    background-color: #7376df; }\n\nh1 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 2.4rem;\n    font-weight: 600; }\n\nh2 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 2.4rem;\n    font-weight: 500; }\n\nh3 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 1.8rem;\n    font-weight: 500; }\n\nh4 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 1.4rem;\n    font-weight: 500; }\n\nh5 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 1rem;\n    letter-spacing: .1rem;\n    font-weight: 600;\n    text-transform: uppercase; }\n\nh6 {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: .8rem;\n    letter-spacing: .1rem;\n    font-weight: 500;\n    text-transform: uppercase; }\n\np {\n    color: #7c7c7c;\n    font-size: .9rem; }\n\n.card-inverse p {\n    color: #fff;\n    font-size: .9rem; }\n\n.card h1 {\n    border: none;\n    margin: 0;\n    padding-bottom: .5rem; }\n\n.no-padding {\n    padding: 0; }\n\n.clear {\n    clear: both; }\n\n.justify-center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.text-muted {\n    color: #a0a0a0 !important; }\n\n.divider {\n    display: block;\n    width: 100%;\n    height: 1px;\n    background-color: #dfdfdf;\n    margin: 2rem auto; }\n\n.circle {\n    border-radius: 499rem; }\n\n.jumbotron {\n    padding: 3rem 2rem;\n    background-color: #f7f7f7; }\n\n.btn-primary, .btn-primary.disabled, .btn-primary:disabled, .btn-outline-primary:hover, .btn-outline-primary:active, .btn-outline-primary.active, .show > .btn-outline-primary.dropdown-toggle, .card-primary, .page-item.active .page-link, .list-group-item.active {\n    background-color: #7376df !important;\n    border-color: #7376df !important; }\n\n.btn-primary:hover, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {\n    background-color: #6365d2 !important;\n    border-color: #6365d2 !important; }\n\n.btn-outline-primary {\n    color: #7376df !important;\n    border-color: #7376df !important; }\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled, .btn-link, .page-link, .text-primary {\n    color: #7376df !important; }\n\n.btn-link:focus, .btn-link:hover, .page-link:focus, .page-link:hover, a.text-primary:focus, a.text-primary:hover {\n    color: #6365d2 !important; }\n\n.dropdown-item.active, .dropdown-item:active, .custom-control-input:checked ~ .custom-control-indicator, .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator, .nav-pills .nav-item.show .nav-link, .badge-primary, .progress-bar, .bg-primary {\n    background-color: #7376df !important;\n    background-image: none; }\n\n.nav-pills .nav-link.active, .badge-primary[href]:focus, .badge-primary[href]:hover, a.bg-primary:focus, a.bg-primary:hover {\n    background-color: #6365d2 !important; }\n\n.form-control:focus {\n    border-color: #7376df !important; }\n\n.btn-primary, .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #fff !important;\n    background-color: #7376df;\n    border-color: #7376df; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #6365d2;\n    border-color: #6365d2; }\n\n.btn-outline-primary, .btn-outline-primary:visited {\n    color: #7376df;\n    border-color: #7376df;\n    background: none; }\n\n.btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:active {\n    background-color: #7376df;\n    border-color: #7376df;\n    color: #fff; }\n\n.btn-secondary {\n    border-color: #7c7c7c;\n    background-color: #7c7c7c;\n    color: #fff; }\n\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n    border-color: #444444;\n    background-color: #444444;\n    color: #fff; }\n\n.btn-outline-secondary, .btn-outline-secondary:visited {\n    color: #7c7c7c;\n    border-color: #7c7c7c;\n    background: none; }\n\n.btn-outline-secondary:hover, .btn-outline-secondary:focus, .btn-outline-secondary:active {\n    border-color: #7c7c7c;\n    background: #7c7c7c;\n    color: #fff; }\n\n.btn {\n    border-radius: 499rem;\n    text-transform: uppercase;\n    letter-spacing: .1rem;\n    font-size: .8rem;\n    padding: .75rem 1.25rem;\n    cursor: pointer; }\n\n.btn:focus {\n    outline: none;\n    border: 0;\n    box-shadow: none; }\n\n.btn-xs {\n    font-size: .6rem;\n    padding: .5rem 1rem; }\n\n.btn-sm {\n    font-size: .7rem;\n    padding: .5rem 1rem; }\n\n.btn-md {\n    font-size: .8rem;\n    padding: .75rem 1.25rem; }\n\n.btn-lg {\n    font-size: .9rem;\n    padding: 1rem 1.5rem; }\n\n.btn-subtle {\n    border: none;\n    background: #f7f7f7;\n    color: #7376df;\n    -webkit-appearance: none;\n    cursor: pointer; }\n\n.btn-subtle:hover, .btn-subtle:focus, .btn-subtle:active {\n    color: #fff;\n    background-color: #7376df;\n    outline: none; }\n\n.btn-stripped {\n    border: none;\n    background: none !important;\n    color: #444444 !important;\n    -webkit-appearance: none;\n    cursor: pointer; }\n\n.btn-stripped:hover, .btn-stripped:focus, .btn-stripped:active {\n    color: #7376df;\n    background-color: none;\n    outline: none; }\n\n.dropdown a {\n    color: #444444; }\n\n.dropdown a:hover, .dropdown a:active, .dropdown a:focus {\n    background-color: #7376df;\n    color: #fff; }\n\n.sidebar {\n    position: fixed;\n    top: 56px;\n    bottom: 0;\n    left: 0;\n    padding: 20px;\n    padding-left: 0;\n    padding-right: 0;\n    z-index: 1000;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    border-right: 1px solid #eee;\n    background: #7376df; }\n.sidebar a {\n    color: #fff;\n    text-transform: uppercase;\n    font-size: .7rem;\n    letter-spacing: .2rem;\n    padding: .75rem 1rem; }\n.sidebar em {\n    font-size: 1rem; }\n.sidebar h1 {\n    color: #fff;\n    border: none;\n    font-size: 0.9rem;\n    padding: 0rem 1rem;\n    text-transform: uppercase;\n    letter-spacing: .2rem; }\n.sidebar .site-title {\n    margin-top: .5rem;\n    margin-bottom: 1.75rem; }\n.sidebar .site-title a {\n    font-size: .9rem;\n    padding-left: 0;\n    padding-right: 0;\n    cursor: pointer; }\n.sidebar .site-title a:hover {\n    background: none !important; }\n.sidebar .nav {\n    margin-bottom: 20px; }\n.sidebar .nav-item {\n    width: 100%; }\n.sidebar .nav-item + .nav-item {\n    margin-left: 0; }\n.sidebar .nav-link {\n    border-radius: 0; }\n.sidebar .logout-button {\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    width: 85%;\n    text-align: center;\n    border-radius: .3rem; }\n\n#wrapper.toggled .sidebar-nav {\n    display: none; }\n\n#menu-toggle {\n    position: absolute;\n    top: 1rem;\n    right: 1rem; }\n\n.sidebar a:focus, .sidebar a:visited, .sidebar a:hover, .sidebar a:active {\n    background-color: #6365d2 !important; }\n\n@media screen and (max-width: 576px) {\n    #wrapper .sidebar-nav {\n        display: none; }\n\n    #wrapper.toggled .sidebar-nav {\n        display: block !important; }\n\n    .sidebar {\n        position: inherit;\n        padding-bottom: 0px;\n        margin-bottom: 1rem; }\n\n    #menu-toggle {\n        background-color: #6365d2; } }\n@media screen and (min-width: 576px) {\n    #wrapper.toggled .sidebar-nav {\n        display: block; }\n\n    #menu-toggle {\n        display: none; } }\n.card-title {\n    margin-top: -.25rem;\n    padding-bottom: .25rem;\n    margin-bottom: 1rem; }\n\n.card-subtitle {\n    margin-top: -.75rem;\n    padding-bottom: .5rem; }\n\n.card-title-btn-container {\n    position: absolute;\n    top: 1.25rem;\n    right: 1.25rem;\n    list-style: none; }\n\n.alert {\n    color: #fff; }\n.alert a {\n    color: #fff !important; }\n\n.no-left-margin {\n    margin-left: 0; }\n\n.page-header {\n    font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin-top: 0rem;\n    margin-bottom: 2.4rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid #eee;\n    height: auto; }\n.page-header h1 {\n    display: inline;\n    border: none;\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    width: 100%; }\n\n.profile-photo {\n    border-radius: 499rem;\n    float: left; }\n\n.username {\n    float: left;\n    text-align: left;\n    margin: 0 0 0 1rem; }\n.username h1, .username h2, .username h3, .username h4 {\n    margin-bottom: 0;\n    text-transform: none !important;\n    letter-spacing: 0 !important; }\n\n.user-dropdown .dropdown-toggle::after {\n    margin-top: 1rem;\n    margin-left: 1rem; }\n\n.user-progress {\n    margin-top: 1rem; }\n.user-progress .profile-photo {\n    max-height: 75px;\n    max-width: 75px !important; }\n\n.progress-custom {\n    margin-top: .25rem; }\n\n.progress-label {\n    text-align: center !important;\n    color: #7376df;\n    font-size: .75rem;\n    margin-top: -.25rem; }\n\n.progress-bar {\n    height: .3rem; }\n\n#calendar, .datepicker-inline {\n    width: 100%;\n    text-align: center; }\n\n#calendar table {\n    width: 100%; }\n\n.datepicker-switch {\n    font-size: 16px;\n    height: 46px !important; }\n\n.datepicker table tr td.old,\n.datepicker table tr td.new {\n    color: #dfdfdf; }\n\n.datepicker table tr td {\n    padding: 2px 2px !important;\n    cursor: pointer;\n    border-radius: .3rem; }\n\n#calendar th {\n    text-align: center !important;\n    cursor: pointer;\n    border-radius: .3rem; }\n\n.datepicker table tr td.active, .datepicker table tr td.active:hover, .datepicker table tr td.active.disabled, .datepicker table tr td.active.disabled:hover, .datepicker table tr td.active:hover, .datepicker table tr td.active:hover:hover, .datepicker table tr td.active.disabled:hover, .datepicker table tr td.active.disabled:hover:hover, .datepicker table tr td.active:focus, .datepicker table tr td.active:hover:focus, .datepicker table tr td.active.disabled:focus, .datepicker table tr td.active.disabled:hover:focus, .datepicker table tr td.active:active, .datepicker table tr td.active:hover:active, .datepicker table tr td.active.disabled:active, .datepicker table tr td.active.disabled:hover:active, .datepicker table tr td.active.active, .datepicker table tr td.active:hover.active, .datepicker table tr td.active.disabled.active, .datepicker table tr td.active.disabled:hover.active, .open .dropdown-toggle.datepicker table tr td.active, .open .dropdown-toggle.datepicker table tr td.active:hover, .open .dropdown-toggle.datepicker table tr td.active.disabled, .open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\n    color: #ffffff;\n    background-color: #7376df;\n    text-shadow: none;\n    border-color: #285e8e; }\n\n.datepicker table tr td span:hover, .datepicker thead tr:first-child th:hover, .datepicker tfoot tr th:hover, .datepicker table tr td.day:hover, .datepicker table tr td.day.focused {\n    background: rgba(0, 0, 0, 0.05); }\n\n.panel-heading .glyphicon {\n    margin-right: 10px; }\n\n.timeline {\n    list-style: none;\n    padding: 20px 0 20px;\n    position: relative; }\n\n.timeline:before {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    content: \" \";\n    width: 2px;\n    background-color: #eeeeee;\n    left: 25px;\n    margin-right: -1.5px; }\n\n.timeline > li {\n    margin-bottom: 20px;\n    position: relative; }\n\n.timeline > li:before, .timeline > li:after {\n    content: \" \";\n    display: table; }\n\n.timeline > li:after {\n    clear: both; }\n\n.timeline > li > .timeline-panel {\n    width: calc( 100% - 65px );\n    float: right;\n    border: 1px solid #dfdfdf;\n    border-radius: 2px;\n    padding: 10px 20px;\n    position: relative;\n    box-shadow: none; }\n\n.timeline > li > .timeline-panel:before {\n    position: absolute;\n    top: 26px;\n    left: -11px;\n    display: inline-block;\n    border-top: 11px solid transparent;\n    border-right: 11px solid #dfdfdf;\n    border-left: 0 solid #dfdfdf;\n    border-bottom: 11px solid transparent;\n    content: \" \"; }\n\n.timeline > li > .timeline-panel:after {\n    position: absolute;\n    top: 27px;\n    left: -10px;\n    display: inline-block;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n    border-left: 0 solid #fff;\n    border-bottom: 10px solid transparent;\n    content: \" \"; }\n\n.timeline > li > .timeline-badge {\n    color: #444444;\n    width: 46px;\n    height: 46px;\n    line-height: 2.8rem;\n    font-size: 1.4rem;\n    text-align: center;\n    position: absolute;\n    top: 16px;\n    left: 0px;\n    margin-right: -25px;\n    margin-left: 3px;\n    border: 1px solid #dfdfdf;\n    background-color: #fff;\n    z-index: 100;\n    border-radius: 9999px; }\n\n.timeline-badge.primary {\n    background-color: #7376df !important;\n    color: #fff !important;\n    border: none !important; }\n\n.timeline-badge.success {\n    background-color: #8ad919 !important; }\n\n.timeline-badge.warning {\n    background-color: #ffb53e !important; }\n\n.timeline-badge.danger {\n    background-color: #f9243f !important; }\n\n.timeline-badge.info {\n    background-color: #30a5ff !important; }\n\n.article {\n    padding: 1rem 0;\n    border-bottom: 1px solid #dfdfdf;\n    margin-bottom: 1rem; }\n\n.article:first-child {\n    padding: 0 0 10px 0; }\n\n.article:last-child {\n    padding: 0 0 10px 0;\n    border: none;\n    margin-bottom: 0; }\n\n.article h4 a {\n    margin-bottom: 10px; }\n\n.article .date {\n    text-align: center;\n    font-size: 1.8rem;\n    margin: 0 auto;\n    display: block; }\n\n.article .date .text-muted {\n    font-size: .8rem;\n    text-transform: uppercase;\n    letter-spacing: .1rem; }\n\n.todo-list-item {\n    list-style: none;\n    padding: .75rem 1rem .15rem 1rem;\n    border-radius: .3rem; }\n.todo-list-item .fa {\n    margin: 0 .25rem 0 0;\n    color: #444444; }\n.todo-list-item .fa:hover {\n    color: #7376df; }\n.todo-list-item input[type=checkbox] {\n    margin: 0 0.5rem 0 0 !important;\n    border: 1px solid #333; }\n\n.todo-list {\n    padding: 0;\n    margin: -15px;\n    background: #fff;\n    color: #444444; }\n\ninput[type=checkbox]:checked + label {\n    text-decoration: line-through;\n    color: #a0a0a0; }\n\n.todo-list-item:hover, a.todo-list-item:focus {\n    text-decoration: none;\n    background-color: #f7f7f7; }\n\n.todo-list-item .trash .fa:hover {\n    color: #ef4040; }\n\n.todo-list-footer {\n    margin: -20px;\n    margin-top: 2rem; }\n.todo-list-footer .btn {\n    border-radius: .4rem; }\nmain {\n    padding-top: 0 !important;\n    right: 0px;\n    position: absolute;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1\">\n            <a href=\"#menu-toggle\" class=\"btn btn-default\" id=\"menu-toggle\"><em class=\"fa fa-bars\"></em></a>\n            <form class=\"form my-2 my-sm-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\n            </form>\n            <ul class=\"nav nav-pills flex-column sidebar-nav\">\n                <li class=\"nav-item\"><a class=\"nav-link active\" routerLink=\"/\"><em class=\"fa fa-dashboard\"></em> Dashboard <span class=\"sr-only\">(current)</span></a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/arbitrage\"><em class=\"fa fa-bolt\"></em> Arbitrage</a></li>\n                <!-- <li class=\"nav-item\"><a class=\"nav-link\" href=\"elements.html\"><em class=\"fa fa-hand-o-up\"></em> UI Elements</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"cards.html\"><em class=\"fa fa-clone\"></em> Cards</a></li> -->\n            </ul>\n\n            <a href=\"#\" class=\"logout-button\" (click)=\"signOut()\"><em class=\"fa fa-power-off\"></em> Signout</a>\n        </nav>\n        <main class=\"col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.navbarCollapsed = true;
    }
    AppComponent.prototype.getList = function () {
        this.res = 'fetching objects...';
    };
    AppComponent.prototype.ngOnInit = function () {
        // this.getList();
    };
    AppComponent.prototype.signOut = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configurator_configurator_module__ = __webpack_require__("../../../../../src/app/configurator/configurator.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components___ = __webpack_require__("../../../../../src/app/shared/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__arbitrage_arbitrage_component__ = __webpack_require__("../../../../../src/app/arbitrage/arbitrage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__arbitrage_arbitrage_component__["a" /* ArbitrageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__configurator_configurator_module__["a" /* ConfiguratorModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__shared_components___["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */]
                // ServiceModule.forRoot(),
                // StoreModule.provideStore(store)
                // Note that you must instrument after importing StoreModule
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_services_http_service__["a" /* HttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/arbitrage/arbitrage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/arbitrage/arbitrage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"page-header row justify-center\">\n  <div class=\"col-md-6 col-lg-8\">\n    <h1 class=\"float-left text-center text-md-left\">Dashboard</h1>\n  </div>\n</header>-->\n\n<section class=\"row\">\n  <div class=\"col-sm-12\">\n    <section class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <div class=\"jumbotron\">\n          <form>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">\n                Exchange From\n              </label>\n              <div class=\"col-sm-10\">\n                <!-- <input id=\"exchangeSelector\" name=\"exchange\" type=\"text\" class=\"form-control\" [(ngModel)]=\"exchange\" [ngbTypeahead]=\"searchExchange\" placeholder=\"Exchange\" aria-label=\"Exchange\"/> -->\n                <select class=\"form-control\" id=\"exchangeFromSelector\" [(ngModel)]=\"exchangeFrom\" (ngModelChange)=\"selectedExchangeFrom($event)\" name=\"exchangeFromSelector\">\n                  <option *ngFor=\"let x of exchangesFromList\" [value]=\"x\">{{x}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\" *ngIf=\"exchange\">\n              <label for=\"fromSymbolSelector\" class=\"col-sm-2 col-form-label\">Deposit Coin</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"fromSymbolSelector\" name=\"fromSymbolSelector\" [(ngModel)]=\"fromCoin\" (ngModelChange)=\"selectedFromCoin($event)\">\n                  <option *ngFor=\"let x of exchangeSelected\" [value]=\"x\">{{x}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">\n                Exchange To\n              </label>\n              <div class=\"col-sm-10\">\n                <!-- <input id=\"exchangeSelector\" name=\"exchange\" type=\"text\" class=\"form-control\" [(ngModel)]=\"exchange\" [ngbTypeahead]=\"searchExchange\" placeholder=\"Exchange\" aria-label=\"Exchange\"/> -->\n                <select class=\"form-control\" id=\"exchangeSelector\" [(ngModel)]=\"exchange\" (ngModelChange)=\"selectedExchange($event)\" name=\"exchangeSelector\">\n                  <option *ngFor=\"let x of exchangesList\" [value]=\"x\">{{x}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"\" *ngIf=\"toCoin && coinExchangeOutput\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item active\"><strong>Price:</strong> {{coinExchangeOutput.PRICE}}</li>\n              </ul>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/arbitrage/arbitrage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArbitrageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArbitrageComponent = (function () {
    function ArbitrageComponent(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.exchangesList = [];
        this.exchangeSelected = [];
        this.httpService.getExchanges().subscribe(function (data) {
            _this.exchanges = data;
            console.log('data', data);
            for (var exchangeFromList in data) {
                _this.exchangesList.push(exchangeFromList);
            }
            _this.exchangesList.sort();
        });
    }
    ArbitrageComponent.prototype.ngOnInit = function () {
    };
    ArbitrageComponent.prototype.initExchanges = function () {
        var _this = this;
        this.httpService.getExchanges().subscribe(function (data) {
            _this.exchanges = data;
            console.log('data', data);
            for (var exchangeFromList in data) {
                _this.exchangesList.push(exchangeFromList);
            }
            _this.exchangesList.sort();
        });
    };
    ArbitrageComponent.prototype.selectedExchange = function (exchange) {
        this.exchangeSelected = [];
        this.fromCoin = '';
        if (this.exchanges[exchange]) {
            for (var x in this.exchanges[exchange]) {
                this.exchangeSelected.push(x);
            }
            this.exchangeSelected.sort();
            // this.exchangeSelected = this.exchanges[exchange];
            console.log('exchage selected', this.exchangeSelected);
        }
    };
    ArbitrageComponent.prototype.selectedFromCoin = function (fromCoin) {
        this.toCoins = [];
        this.toCoin = '';
        if (this.exchanges[this.exchange]) {
            this.toCoins = this.exchanges[this.exchange][fromCoin];
            this.toCoins.sort();
        }
    };
    ArbitrageComponent.prototype.selectedToCoin = function (toCoin) {
        this.priceFromExchange();
    };
    ArbitrageComponent.prototype.priceFromExchange = function () {
        var _this = this;
        this.httpService.getPriceFromExchange(this.fromCoin, this.toCoin, this.exchange).subscribe(function (data) {
            _this.coinExchangeOutput = data.RAW[_this.fromCoin][_this.toCoin];
            console.log('data RAW', _this.coinExchangeOutput);
        });
    };
    ArbitrageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-arbitrage',
            template: __webpack_require__("../../../../../src/app/arbitrage/arbitrage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/arbitrage/arbitrage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__["a" /* HttpService */]])
    ], ArbitrageComponent);
    return ArbitrageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/configurator/configurator-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguratorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var ConfiguratorRoutingModule = (function () {
    function ConfiguratorRoutingModule() {
    }
    ConfiguratorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ConfiguratorRoutingModule);
    return ConfiguratorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/configurator/configurator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguratorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configurator_routing_module__ = __webpack_require__("../../../../../src/app/configurator/configurator-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguratorModule = (function () {
    function ConfiguratorModule() {
    }
    ConfiguratorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__configurator_routing_module__["a" /* ConfiguratorRoutingModule */]
            ],
            declarations: []
        })
    ], ConfiguratorModule);
    return ConfiguratorModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"page-header row justify-center\">\n  <div class=\"col-md-6 col-lg-8\">\n    <h1 class=\"float-left text-center text-md-left\">Dashboard</h1>\n  </div>\n</header>-->\n\n<section class=\"row\">\n  <div class=\"col-sm-12\">\n    <section class=\"row\">\n      <div class=\"col-md-12 col-lg-8\">\n        <div class=\"jumbotron\">\n          <form>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">\n                Exchange\n              </label>\n              <div class=\"col-sm-10\">\n                <!-- <input id=\"exchangeSelector\" name=\"exchange\" type=\"text\" class=\"form-control\" [(ngModel)]=\"exchange\" [ngbTypeahead]=\"searchExchange\" placeholder=\"Exchange\" aria-label=\"Exchange\"/> -->\n                <select class=\"form-control\" id=\"exchangeSelector\" [(ngModel)]=\"exchange\" (ngModelChange)=\"selectedExchange($event)\" name=\"exchangeSelector\">\n                  <option *ngFor=\"let x of exchangesList\" [value]=\"x\">{{x}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\" *ngIf=\"exchange\">\n              <label for=\"fromSymbolSelector\" class=\"col-sm-2 col-form-label\">Deposit Coin</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"fromSymbolSelector\" name=\"fromSymbolSelector\" [(ngModel)]=\"fromCoin\" (ngModelChange)=\"selectedFromCoin($event)\">\n                  <option *ngFor=\"let x of exchangeSelected\" [value]=\"x\">{{x}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\" *ngIf=\"fromCoin\">\n              <label for=\"toSymbolSelector\" name=\"toSymbolSelector\" class=\"col-sm-2 col-form-label\">Withdraw Coin</label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"toSymbolSelector\" name=\"toSymbolSelector\" [(ngModel)]=\"toCoin\" (ngModelChange)=\"selectedToCoin($event)\">\n                  <option *ngFor=\"let x of toCoins\" [value]=\"x\">{{x}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"\" *ngIf=\"toCoin && coinExchangeOutput\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item active\"><strong>Price:</strong> {{coinExchangeOutput.PRICE}}</li>\n              </ul>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__ = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.searchExchange = function (text$) {
            return _this.text = text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.exchangesList.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.exchangesList = [];
        this.exchangeSelected = [];
        this.httpService.getExchanges().subscribe(function (data) {
            _this.exchanges = data;
            console.log('data', data);
            for (var exchangeFromList in data) {
                _this.exchangesList.push(exchangeFromList);
            }
            _this.exchangesList.sort();
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.initExchanges = function () {
        var _this = this;
        this.httpService.getExchanges().subscribe(function (data) {
            _this.exchanges = data;
            console.log('data', data);
            for (var exchangeFromList in data) {
                _this.exchangesList.push(exchangeFromList);
            }
            _this.exchangesList.sort();
        });
    };
    HomeComponent.prototype.selectedExchange = function (exchange) {
        this.exchangeSelected = [];
        this.fromCoin = '';
        if (this.exchanges[exchange]) {
            for (var x in this.exchanges[exchange]) {
                this.exchangeSelected.push(x);
            }
            this.exchangeSelected.sort();
            // this.exchangeSelected = this.exchanges[exchange];
            console.log('exchage selected', this.exchangeSelected);
        }
    };
    HomeComponent.prototype.selectedFromCoin = function (fromCoin) {
        this.toCoins = [];
        this.toCoin = '';
        if (this.exchanges[this.exchange]) {
            this.toCoins = this.exchanges[this.exchange][fromCoin];
            this.toCoins.sort();
        }
    };
    HomeComponent.prototype.selectedToCoin = function (toCoin) {
        this.priceFromExchange();
    };
    HomeComponent.prototype.priceFromExchange = function () {
        var _this = this;
        this.httpService.getPriceFromExchange(this.fromCoin, this.toCoin, this.exchange).subscribe(function (data) {
            _this.coinExchangeOutput = data.RAW[_this.fromCoin][_this.toCoin];
            console.log('data RAW', _this.coinExchangeOutput);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__["a" /* HttpService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n    <div class=\"col-md-4\">\n        <h4 class=\"card-header\">Login</h4>\n        <div class=\"card-block\">\n\n            <form [formGroup]=\"loginForm\">\n                <div class=\"col-xs-12\">\n                    <div class=\"row mt-4\">\n                        <div class=\"col-sm-12\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\n                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                                 class=\"alert alert-danger mt-1\"  role=\"alert\">\n                                Please enter a valid email address\n                            </div>\n\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"text\" class=\"form-control\" id=\"password\" formControlName=\"password\" required>\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                                 class=\"alert alert-danger mt-1\"  role=\"alert\">\n                                Please enter a password of at least 5 characters\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 text-center\">\n                    <button (click)=\"cancel()\" class=\"btn btn-100\">Cancel</button>\n                    <button (click)=\"login()\" class=\"btn btn-success btn-100\" value=\"default\">Login</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({});
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(5)])
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        console.log('Hey Ima log you in');
    };
    LoginComponent.prototype.cancel = function () {
        console.log('Hey im cancelling now, this should eventually use a shared goBack function once a BaseController is factored out');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/app-header/app-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-expand-sm\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fa fa-rocket\"></i> Arbitrader</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n        <ul class=\"navbar-nav mr-auto\">\n            <!--\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            -->\n            <li class=\"nav-item\" *ngIf=\"!auth_status\">\n                <button class=\"nav-link btn btn-link\" (click)=\"openLogin()\">Login</button>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!auth_status\">\n                <button class=\"nav-link btn btn-link\" (click)=\"openSignUp()\">Sign Up</button>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"auth_status\">\n                <button type=\"button\" class=\"nav-link  btn btn-link\" (click)=\"signOut()\">Sign Out</button>\n            </li>\n            <!--\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Dropdown\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" routerLink=\"/login\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n            </li>\n            -->\n        </ul>\n        <span class=\"navbar-text\" *ngIf=\"auth_status\">\n          <i class=\"fa fa-user-o fa-lg\"></i> Hello, {{ firstName }}\n        </span>\n        <!--\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n        -->\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/shared/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/shared/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppHeaderComponent = (function () {
    function AppHeaderComponent(modalService) {
        this.modalService = modalService;
        this.auth_status = false;
        this.navbarCollapsed = true;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent.prototype.openSignUp = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */]);
    };
    AppHeaderComponent.prototype.openLogin = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]);
        modalRef.result.then(function (userResponse) {
            if (userResponse) {
                _this.auth_status = true;
            }
        });
    };
    AppHeaderComponent.prototype.signOut = function () {
        this.auth_status = null;
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/components/app-header/app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header_app_header_component__ = __webpack_require__("../../../../../src/app/shared/components/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/shared/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/shared/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__app_header_app_header_component__["a" /* AppHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
    __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
                // TranslateModule,
            ],
            declarations: COMPONENTS,
            exports: COMPONENTS,
            entryComponents: COMPONENTS
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Login</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <!--\n      <div>\n        <label *ngIf=\"auth_status == 'OK'\"><button type=\"button\" class=\"btn btn-warning\" (click)=\"signOut()\">Sign Out</button>{{loggedInUser}}</label>\n      </div>\n      -->\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"username\" class=\"col-xs-2 col-form-label\">Username</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"text\" [value]=\"username\" (input)=\"username = $event.target.value\" id=\"username\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-xs-2 col-form-label\">Password</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"password\" [value]=\"password\" (input)=\"password = $event.target.value\" id=\"password\">\n          </div>\n        </div>\n      </form>\n      <!-- <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"getAuthTokenSimple()\">Token Auth</button>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"useAnonymousAuth()\">Anonymous Auth</button>\n      </div>\n\n      <div *ngIf=\"auth_status\">\n        <div class=\"alert alert-success\" role=\"alert\">\n          <label>Using {{auth_type}} authentication</label>\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <label [class.alert]=\"is_auth_error\" [class.alert-danger]=\"is_auth_error\">{{auth_status}}</label>\n        </div>\n      </div>\n\n      <h2>Change Password</h2>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"form-group row\">\n            <label for=\"oldPassword\" class=\"col-xs-2 col-form-label\">Old Password</label>\n            <div class=\"col-xs-10\">\n              <input class=\"form-control\" type=\"password\" [value]=\"oldPassword\" (input)=\"oldPassword = $event.target.value\" id=\"oldPassword\">\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"form-group row\">\n            <label for=\"newPassword\" class=\"col-xs-2 col-form-label\">New Password</label>\n            <div class=\"col-xs-10\">\n              <input class=\"form-control\" type=\"password\" [value]=\"newPassword\" (input)=\"newPassword = $event.target.value\" id=\"newPassword\">\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"form-group row\">\n            <label for=\"confirmPassword\" class=\"col-xs-2 col-form-label\">Confirm Password</label>\n            <div class=\"col-xs-10\">\n              <input class=\"form-control\" type=\"password\" [value]=\"confirmNewPassword\" (input)=\"confirmNewPassword = $event.target.value\"\n                     id=\"confirmPassword\">\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"changePassword()\">Change Password</button>\n        </li>\n      </ul>\n      -->\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"getAuthTokenSimple()\">Sign In</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(activeModal) {
        this.activeModal = activeModal;
        this.username = '';
        this.password = '';
        this.auth_type = "N/A";
        this.is_auth_error = false;
        this.auth_status = null;
        this.loggedInUser = '';
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmNewPassword = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.getAuthTokenSimple = function () {
        this.auth_type = 'Token';
    };
    LoginComponent.prototype.signOut = function () {
        this.auth_status = null;
    };
    LoginComponent.prototype.changePassword = function () {
        if (this.newPassword !== this.confirmNewPassword) {
            alert('Passwords should match');
            return;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Sign Up</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-xs-2 col-form-label\">Email</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"email\" [value]=\"email\" (input)=\"email = $event.target.value\" id=\"email\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"first-name\" class=\"col-xs-2 col-form-label\">First Name</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"text\" [value]=\"firstName\" (input)=\"firstName = $event.target.value\" id=\"first-name\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"last-name\" class=\"col-xs-2 col-form-label\">Last Name</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"text\" [value]=\"lastName\" (input)=\"lastName = $event.target.value\" id=\"last-name\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"newPassword\" class=\"col-xs-2 col-form-label\">Password</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"password\" [value]=\"signUpPassword\" (input)=\"signUpPassword = $event.target.value\" id=\"signUpPassword\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"confirmPassword\" class=\"col-xs-2 col-form-label\">Confirm Password</label>\n          <div class=\"col-xs-10\">\n            <input class=\"form-control\" type=\"password\" [value]=\"confirmPassword\" (input)=\"confirmPassword = $event.target.value\" id=\"confirmPassword\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"signUp()\">Sign Up</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(activeModal) {
        this.activeModal = activeModal;
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.signUpPassword = '';
        this.confirmPassword = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        if (this.signUpPassword !== this.confirmPassword) {
            alert('Passwords should match');
            return;
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/shared/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    /*
    Get Coin Price from exchange (or comma delimited list - e=Binance,Coinbase,Kraken):
    https://min-api.cryptocompare.com/data/generateAvg?fsym=XRP&tsym=BTC&e=Binance

    Get FSYM, and list of TSYM for FSYM from: https://min-api.cryptocompare.com/data/all/exchanges
     */
    HttpService.prototype.getExchanges = function () {
        // Initialize Params Object
        return this.http.get('https://min-api.cryptocompare.com/data/all/exchanges');
    };
    HttpService.prototype.getPriceFromExchange = function (fromSymbol, toSymbol, exchanges) {
        var Params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        // Begin assigning parameters
        Params = Params.append('fsyms', fromSymbol);
        Params = Params.append('tsyms', toSymbol);
        Params = Params.append('e', exchanges);
        // Params = Params.append('tryConversion',  false);
        // try https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC&e=Binance if just getting price instead of object
        return this.http.get('https://min-api.cryptocompare.com/data/pricemultifull', { params: Params });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// default values for `dev`
var environment = {
    production: false,
    apiURL: "http://localhost:4100"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map