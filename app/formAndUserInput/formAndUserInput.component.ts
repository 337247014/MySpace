import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Order} from '../models/index';

@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl:'/app/formAndUserInput/formAndUserInput.html',
    styleUrls:['./formAndUserInput.css'],
  })
  export class FormAndUserInputComponent implements OnInit{ 
    subHeaderImage:string;
    subHeaderText:string;
    tempList:any;
    tempValue:string;

    types:any;
    model:Order;

    constructor(
        private router: Router) {
            this.tempList = ['aaa','bbb'];

            this.types = ['books','tv','game'];
            this.model = new Order(1,'111',this.types[0],'aaa');
    }

    ngOnInit(): void {
        this.subHeaderImage = "/app/content/images/home/carousel-6.jpg"
        this.subHeaderText = "Form & User Input";
    }

    onKey(event:any){
        //event.target 表示<input>元素本身
        this.tempValue += event.target.value + ' | ';
    }

    addList(data: string){
        if(data){
            this.tempList.push(data);
        }
    }

  }