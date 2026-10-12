import { Component } from '@angular/core';
import { AboutFaqehComponent } from '../about-faqeh/about-faqeh.component';
import { GallaryComponent } from '../gallary/gallary.component';
import { NotesGallaryBannerComponent } from '../notes-gallary-banner/notes-gallary-banner.component';
import { DesignSiteBannerComponent } from '../design-site-banner/design-site-banner.component';
import { HeroNavbarComponent } from '../hero-navbar/hero-navbar.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutFaqehComponent,
    GallaryComponent,
    NotesGallaryBannerComponent,
    DesignSiteBannerComponent,
    HeroNavbarComponent,
ContactUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentNavImage = '/images/Pic1.png';
}
