import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './Hello/hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { AuthGuard } from './common/guards/index';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'hello', component: HelloComponent },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }