import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{BrandImage} from '../models/index';

@Component({
  selector: 'my-images',
  templateUrl:'./brandImages.html',
//   styles: require('./brandImages.css') 
  styleUrls:['./brandImages.css']
})
export class BrandImagesComponent implements OnInit{ 
   subHeaderImage:string;
   subHeaderText:string;
   brandImages: BrandImage[];
   brandImagesSource:BrandImage[];
   paginationObject:any = {totals:0,currentPage:1,pageSize:30,};

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
        this.subHeaderImage = "/app/content/images/home/carousel-6.jpg"
        this.subHeaderText = "Space Images";

        this.brandImagesSource = [{imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        {imageUrl:'/app/content/images/home/2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/2.jpg'},
        {imageUrl:'/app/content/images/home/3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-1.jpg'},
        {imageUrl:'/app/content/images/home/carousel-2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-2.jpg'},
        {imageUrl:'/app/content/images/home/carousel-3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-4.jpg'},
        {imageUrl:'/app/content/images/home/carousel-5.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-5.jpg'},
        {imageUrl:'/app/content/images/home/carousel-6.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-6.jpg'},
        {imageUrl:'/app/content/images/home/4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/4.jpg'},
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        {imageUrl:'/app/content/images/home/2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/2.jpg'},
        {imageUrl:'/app/content/images/home/3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-1.jpg'},
        {imageUrl:'/app/content/images/home/carousel-2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-2.jpg'},
        {imageUrl:'/app/content/images/home/carousel-3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-4.jpg'},
        {imageUrl:'/app/content/images/home/carousel-5.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-5.jpg'},
        {imageUrl:'/app/content/images/home/carousel-6.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-6.jpg'},
        {imageUrl:'/app/content/images/home/4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/4.jpg'},
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        {imageUrl:'/app/content/images/home/2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/2.jpg'},
        {imageUrl:'/app/content/images/home/3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-1.jpg'},
        {imageUrl:'/app/content/images/home/carousel-2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-2.jpg'},
        {imageUrl:'/app/content/images/home/carousel-3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-4.jpg'},
        {imageUrl:'/app/content/images/home/carousel-5.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-5.jpg'},
        {imageUrl:'/app/content/images/home/carousel-6.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-6.jpg'},
        {imageUrl:'/app/content/images/home/4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/4.jpg'},
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},
        {imageUrl:'/app/content/images/home/2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/2.jpg'},
        {imageUrl:'/app/content/images/home/3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-1.jpg'},
        {imageUrl:'/app/content/images/home/carousel-2.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-2.jpg'},
        {imageUrl:'/app/content/images/home/carousel-3.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-3.jpg'},
        {imageUrl:'/app/content/images/home/carousel-4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-4.jpg'},
        {imageUrl:'/app/content/images/home/carousel-5.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-5.jpg'},
        {imageUrl:'/app/content/images/home/carousel-6.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/carousel-6.jpg'},
        {imageUrl:'/app/content/images/home/4.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/4.jpg'},
        {imageUrl:'/app/content/images/home/1.jpg',imageTitle:'this is first image',detailUrl:'/app/content/images/home/1.jpg'},];

        this.paginationObject.totals = this.brandImagesSource.length;
        this.changePage();
    }

    changePage():void{
        this.brandImages = this.brandImagesSource.slice(this.paginationObject.pageSize*(this.paginationObject.currentPage-1),this.paginationObject.pageSize*this.paginationObject.currentPage);
    }

}