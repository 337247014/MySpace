import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HomeService} from './home.service'

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl:'/app/home/home.html',
  styleUrls:['./home.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit{ 
   title: any;

    constructor(
        private router: Router,
        private homeService: HomeService) {
    }

    ngOnInit(): void {
        this.title = 'My Home';
        //this.homeService.getHomeInfo().then(data => this.title = data.title, error => console.log(error));
    }

}