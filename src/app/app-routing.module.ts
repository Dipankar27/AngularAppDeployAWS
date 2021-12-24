import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'home' , component : HomeComponent, canActivate:[RouteGuardService]},
  {path : 'countries', component : CountriesComponent,canActivate:[RouteGuardService]},
  {path : 'logout', component : LogoutComponent,canActivate:[RouteGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
