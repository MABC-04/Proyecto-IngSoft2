import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DrugsComponent } from './pages/drugs/drugs.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'productos', component: DrugsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterPageComponent}
];
