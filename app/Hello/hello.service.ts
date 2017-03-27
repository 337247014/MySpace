import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { GlobalVariable } from '../app.global';

@Injectable()
export class HelloService {

    private baseUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http) { }

    getHelloInfo() : Promise<{}>{
        return Promise.resolve({title:'Hello world'});
        
        // var detailUrl = this.baseUrl + 'your api url';
        // return this.http.get(detailUrl)
        //     .map(response => response.json())
        //     .catch(this.handleError);
    }

    private handleError(error: any) {
        let errorMsg = error.message
        console.error(errorMsg);
        // throw an application level error
        return Observable.throw(errorMsg);
    }

}