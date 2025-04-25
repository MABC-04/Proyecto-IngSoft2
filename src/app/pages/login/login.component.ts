import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../partials/navbar/navbar.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [NavbarComponent,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(){

  }

  ngOnInit(): void {

  }

}
