import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HelloService} from './hello.service';

@Component({
  moduleId: module.id,
  selector: 'hello-world',
  templateUrl:'/app/Hello/hello.html',
  providers:[HelloService]  
})
export class HelloComponent implements OnInit{ 
    title: any;

    constructor(
        private router: Router,
        private helloService: HelloService) {
    }

    ngOnInit(): void {
        this.title = 'Hello World';
        //this.helloService.getHelloInfo().then(data => this.title = data.title, error => console.log(error));
    }

}