import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-register-page',
  imports: [MatFormFieldModule,NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit{
  public hide_1: boolean = false;
  public hide_2: boolean = false;

  constructor(){

  }

  ngOnInit(): void {

  }

  regresar(){

  }

  registrar(){

  }

  actualizar(){

  }

  soloLetras(){

  }

  showPassword(){

  }

  showPwdConfirmar(){

  }

}
