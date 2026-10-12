import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hero-navbar',
  standalone: true,
  imports: [  MatToolbarModule,
  MatSidenavModule,
    MatIconModule,
  RouterOutlet],
  templateUrl: './hero-navbar.component.html',
  styleUrl: './hero-navbar.component.scss'
})
export class HeroNavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() navImageUrl: string = '/images/Pic1.png';
   @Input() navContent!: string 
  opened: boolean=false;

  constructor() { }

  ngOnInit() {
  }
  clickHandler() {
   console.log('clickHandler called');
  if (this.sidenav) {
    this.sidenav.close();
  }
  }
}
