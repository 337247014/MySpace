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
var index_1 = require("../models/index");
var FormAndUserInputComponent = (function () {
    function FormAndUserInputComponent(router) {
        this.router = router;
        this.tempList = ['aaa', 'bbb'];
        this.types = ['books', 'tv', 'game'];
        this.model = new index_1.Order(1, '111', this.types[0], 'aaa');
    }
    FormAndUserInputComponent.prototype.ngOnInit = function () {
        this.subHeaderImage = "/app/content/images/home/carousel-6.jpg";
        this.subHeaderText = "Form & User Input";
    };
    FormAndUserInputComponent.prototype.onKey = function (event) {
        //event.target 表示<input>元素本身
        this.tempValue += event.target.value + ' | ';
    };
    FormAndUserInputComponent.prototype.addList = function (data) {
        if (data) {
            this.tempList.push(data);
        }
    };
    return FormAndUserInputComponent;
}());
FormAndUserInputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-form',
        templateUrl: '/app/formAndUserInput/formAndUserInput.html',
        styleUrls: ['./formAndUserInput.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], FormAndUserInputComponent);
exports.FormAndUserInputComponent = FormAndUserInputComponent;
//# sourceMappingURL=formAndUserInput.component.js.map