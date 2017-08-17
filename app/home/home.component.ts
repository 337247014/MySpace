import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HomeService} from './home.service';
import {UserService} from '../common/service/index';
import {User} from '../models/index';
// declare var $: any;

@Component({
  selector: 'my-home',
  templateUrl:'./home.html',
//   styles: require('./home.css') 
  styleUrls:['./home.css']
})
export class HomeComponent implements OnInit{ 
   title: any;
   users: User[] = [];

    constructor(
        private router: Router,
        private homeService: HomeService,
        private userService:UserService
        ) {
    }

    ngOnInit(): void {
        this.title = 'My Space';

        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
        //this.homeService.getHomeInfo().then(data => this.title = data.title, error => console.log(error));
    }

    gotoScroll():void{
        // document.location = "home#tileCard";
    }

    gotoImages():void{
        this.router.navigate(['/images']);
    }

    gotoCharts():void{
        this.router.navigate(['/chart']);
    }


}