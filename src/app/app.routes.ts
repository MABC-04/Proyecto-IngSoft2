import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DrugsComponent } from './pages/drugs/drugs.component';


export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'drugs', component: DrugsComponent},
  {path:'login', component: LoginComponent}
];
