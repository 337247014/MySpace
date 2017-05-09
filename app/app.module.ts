import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AnimatesDirective } from 'css-animator';

// used to create fake backend
import { fakeBackendProvider } from './common/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './Hello/hello.component';
import { HomeComponent } from './home/home.component';
import { NgbdCarouselBasic } from './common/carousel-basic'

import { AuthGuard } from './common/guards/index';
import { AuthenticationService, UserService } from './common/service/index';
import { LoginComponent } from './login/index';

import { HomeService } from './home/home.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule, NgbModule.forRoot()],
  declarations: [AppComponent, HelloComponent, HomeComponent, LoginComponent, NgbdCarouselBasic],
  providers: [AuthGuard,
    AuthenticationService,
    UserService,
    HomeService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
