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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_service_1 = require("./home.service");
var index_1 = require("../common/service/index");
// declare var $: any;
var HomeComponent = (function () {
    function HomeComponent(router, homeService, userService) {
        this.router = router;
        this.homeService = homeService;
        this.userService = userService;
        this.users = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'My Space';
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
        //this.homeService.getHomeInfo().then(data => this.title = data.title, error => console.log(error));
    };
    HomeComponent.prototype.gotoScroll = function () {
        // document.location = "home#tileCard";
    };
    HomeComponent.prototype.gotoImages = function () {
        this.router.navigate(['/images']);
    };
    HomeComponent.prototype.gotoCharts = function () {
        this.router.navigate(['/chart']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-home',
        templateUrl: '/app/home/home.html',
        styleUrls: ['./home.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        home_service_1.HomeService,
        index_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map