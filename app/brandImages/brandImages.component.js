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
var BrandImagesComponent = (function () {
    function BrandImagesComponent(router) {
        this.router = router;
    }
    BrandImagesComponent.prototype.ngOnInit = function () {
        this.subHeaderImage = "/app/content/images/home/carousel-6.jpg";
        this.subHeaderText = "Space Images";
        this.brandImages = [{ imageUrl: '/app/content/images/home/1.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/1.jpg' },
            { imageUrl: '/app/content/images/home/2.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/2.jpg' },
            { imageUrl: '/app/content/images/home/3.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/3.jpg' },
            { imageUrl: '/app/content/images/home/carousel-1.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/carousel-1.jpg' },
            { imageUrl: '/app/content/images/home/carousel-2.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/carousel-2.jpg' },
            { imageUrl: '/app/content/images/home/carousel-3.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/carousel-3.jpg' },
            { imageUrl: '/app/content/images/home/carousel-4.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/carousel-4.jpg' },
            { imageUrl: '/app/content/images/home/carousel-5.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/carousel-5.jpg' },
            { imageUrl: '/app/content/images/home/carousel-6.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/carousel-6.jpg' },
            { imageUrl: '/app/content/images/home/4.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/4.jpg' },
            { imageUrl: '/app/content/images/home/1.jpg', imageTitle: 'this is first image', detailUrl: '/app/content/images/home/1.jpg' },];
    };
    BrandImagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-images',
            templateUrl: '/app/brandImages/brandImages.html',
            styleUrls: ['./brandImages.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BrandImagesComponent);
    return BrandImagesComponent;
}());
exports.BrandImagesComponent = BrandImagesComponent;
//# sourceMappingURL=brandImages.component.js.map