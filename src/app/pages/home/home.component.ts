import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../partials/navbar/navbar.component';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from '../../partials/footer/footer.component';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,
    NgFor,FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit{

  imagenes=[
    "medicamentos/betametasona.png",
    "medicamentos/loradatina.webp",
    "medicamentos/omeprazol.png",
    "medicamentos/paracetamol.png",
    "medicamentos/betametasona.png",
    "medicamentos/loradatina.webp",
    "medicamentos/omeprazol.png",
    "medicamentos/paracetamol.png",


  ];
  constructor(){

  }

  ngOnInit(): void {
    this.iniciarswiper();
  }

  public iniciarswiper():void{
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

    });


  }

}
