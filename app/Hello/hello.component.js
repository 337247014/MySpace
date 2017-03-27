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
var router_1 = require('@angular/router');
var hello_service_1 = require('./hello.service');
var HelloComponent = (function () {
    function HelloComponent(router, helloService) {
        this.router = router;
        this.helloService = helloService;
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.title = 'Hello World';
        //this.helloService.getHelloInfo().then(data => this.title = data.title, error => console.log(error));
    };
    HelloComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hello-world',
            templateUrl: '/app/Hello/hello.html',
            providers: [hello_service_1.HelloService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hello_service_1.HelloService])
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.component.js.map