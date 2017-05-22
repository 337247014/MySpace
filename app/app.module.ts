import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts'

//common
import { AuthGuard } from './common/guards/index';
import {SubheaderComponent,SiteFooterComponent,NgbdCarouselBasic} from './common/component/index';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/home.component';
import { BrandImagesComponent } from './brandImages/brandImages.component';
import { MyChartsComponent } from './myCharts/myCharts.component';

//services
import { AuthenticationService, UserService } from './common/service/index';
import { HomeService } from './home/home.service';

//fack
import { fakeBackendProvider } from './common/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,AppRoutingModule,ChartsModule,NgbModule.forRoot()],
  declarations: [AppComponent,LoginComponent,HomeComponent,BrandImagesComponent,SubheaderComponent,MyChartsComponent,SiteFooterComponent,NgbdCarouselBasic],
  providers: [AuthGuard,AuthenticationService,UserService,HomeService,
  fakeBackendProvider,MockBackend,BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
