import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'subheader',
  templateUrl:'/app/common/component/subheader.html',
  styleUrls:[],
})
export class SubheaderComponent implements OnInit{ 
   backgroundImage: any;

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
        
    }

}