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
var SubheaderComponent = (function () {
    function SubheaderComponent(router) {
        this.router = router;
    }
    SubheaderComponent.prototype.ngOnInit = function () {
        //  this.backgroundImage = "/app/content/images/home-header.jpg";
    };
    return SubheaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SubheaderComponent.prototype, "backgroundImage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SubheaderComponent.prototype, "headerText", void 0);
SubheaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sub-header',
        templateUrl: '/app/common/component/subheader.html',
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SubheaderComponent);
exports.SubheaderComponent = SubheaderComponent;
//# sourceMappingURL=subheader.component.js.map