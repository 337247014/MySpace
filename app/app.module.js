"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var ng2_charts_1 = require('ng2-charts');
//common
var index_1 = require('./common/guards/index');
var subheader_component_1 = require('./common/component/subheader.component');
//components
var app_component_1 = require('./app.component');
var index_2 = require('./login/index');
var home_component_1 = require('./home/home.component');
var brandImages_component_1 = require('./brandImages/brandImages.component');
var myCharts_component_1 = require('./myCharts/myCharts.component');
//services
var index_3 = require('./common/service/index');
var home_service_1 = require('./home/home.service');
//fack
var index_4 = require('./common/helpers/index');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, ng2_charts_1.ChartsModule],
            declarations: [app_component_1.AppComponent, index_2.LoginComponent, home_component_1.HomeComponent, brandImages_component_1.BrandImagesComponent, subheader_component_1.SubheaderComponent, myCharts_component_1.MyChartsComponent],
            providers: [index_1.AuthGuard, index_3.AuthenticationService, index_3.UserService, home_service_1.HomeService,
                index_4.fakeBackendProvider, testing_1.MockBackend, http_2.BaseRequestOptions],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map