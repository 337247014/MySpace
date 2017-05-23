"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_charts_1 = require("ng2-charts");
//common
var index_1 = require("./common/guards/index");
var index_2 = require("./common/component/index");
//components
var app_component_1 = require("./app.component");
var index_3 = require("./login/index");
var home_component_1 = require("./home/home.component");
var brandImages_component_1 = require("./brandImages/brandImages.component");
var myCharts_component_1 = require("./myCharts/myCharts.component");
//services
var index_4 = require("./common/service/index");
var home_service_1 = require("./home/home.service");
//fack
var index_5 = require("./common/helpers/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, ng2_charts_1.ChartsModule, ng_bootstrap_1.NgbModule.forRoot()],
        declarations: [app_component_1.AppComponent, index_3.LoginComponent, home_component_1.HomeComponent, brandImages_component_1.BrandImagesComponent, index_2.SubheaderComponent, myCharts_component_1.MyChartsComponent, index_2.SiteFooterComponent, index_2.NgbdCarouselBasic, index_2.NavigationComponent],
        providers: [index_1.AuthGuard, index_4.AuthenticationService, index_4.UserService, home_service_1.HomeService,
            index_5.fakeBackendProvider, testing_1.MockBackend, http_2.BaseRequestOptions],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map