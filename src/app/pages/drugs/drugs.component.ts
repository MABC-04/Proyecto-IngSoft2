import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../partials/navbar/navbar.component';
import { FooterComponent } from '../../partials/footer/footer.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-drugs',
  imports: [
    NavbarComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FooterComponent,
    MatMenuModule,
    MatInputModule,
    MatTableModule
  ],
  templateUrl: './drugs.component.html',
  styleUrl: './drugs.component.scss'
})
export class DrugsComponent {

}
