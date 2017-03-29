import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AnimatesDirective } from 'css-animator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './Hello/hello.component';
import {HomeComponent} from './home/home.component';

// import {HomeService} from './home/home.service';

@NgModule({
  imports: [BrowserModule,FormsModule, AppRoutingModule,HttpModule, NgbModule.forRoot()],
  declarations: [AppComponent,HelloComponent,HomeComponent],
  // providers:[HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
