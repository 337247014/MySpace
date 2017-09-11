import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/index';
import { AuthGuard } from './common/guards/index';
import { HomeComponent } from './home/home.component';
import { BrandImagesComponent } from './brandImages/brandImages.component';
import { MyChartsComponent } from './myCharts/myCharts.component';
import {FormAndUserInputComponent} from './formAndUserInput/formAndUserInput.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'images', component: BrandImagesComponent, canActivate: [AuthGuard] },
    { path: 'chart', component: MyChartsComponent, canActivate: [AuthGuard] },
    { path: 'form', component: FormAndUserInputComponent, canActivate: [AuthGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }