import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeroNavbarComponent } from '../hero-navbar/hero-navbar.component';
import { AboutFaqehComponent } from '../about-faqeh/about-faqeh.component';
import { DesignSiteBannerComponent } from '../design-site-banner/design-site-banner.component';
import { GallaryComponent } from '../gallary/gallary.component';
import { NotesGallaryBannerComponent } from '../notes-gallary-banner/notes-gallary-banner.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../../../../services/flowbite.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeroNavbarComponent, AboutFaqehComponent, DesignSiteBannerComponent,
    GallaryComponent,
    NotesGallaryBannerComponent,
    ContactUsComponent,
  RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  currentNavImage = '/images/Pic1.png';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private flowbiteService: FlowbiteService, private router: Router) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.initializeFlowbite();
      }
    });
  }
   ngAfterViewInit() {
    this.initializeFlowbite();
  }

  private initializeFlowbite() {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
      // Initialize modal or other Flowbite components here
      // const myModal = new flowbite.Modal(document.getElementById('small-modal'));
      // myModal.show();
    });
  }
//  currentPageContent: any;
//   constructor(private router: Router) {
//     // Listen to route changes and update the navbar image
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         console.log('Navigated to URL:', event.urlAfterRedirects); // Debugging log
//         this.updateNavImage(event.urlAfterRedirects);
//           this.updatePageContent(event.urlAfterRedirects);
//       }
//     });
//   }
//   ngOnInit(): void {

   
//     // // Listen to route changes and update the navbar image
//     // this.router.events.subscribe((event) => {
//     //   if (event instanceof NavigationEnd) {
//     //     this.updateNavImage(event.urlAfterRedirects);
//     //      console.log("tsrtt")
//     //   }
//     // });
//   }

//   updateNavImage(url: string): void {
//     console.log("test")
//     // Set different images based on the route
//     if (url === '/' || url === '') {
//       console.log("test 1")
//       this.currentNavImage = '/images/Pic1.png';
//    } else if (url.includes('story')) {
//      console.log("test 2")
//       this.currentNavImage = '/images/story page/Pic1.png';
//     }
   
//   }
//   updatePageContent(url: string): void {
//     if (url === '/' || url === '') {
//       this.currentPageContent = {
//         title: '70 عامًا من الإبداع',
//         description: 'من تراثنا السعودي حيث تتجسد الأناقة .. نحن ومع كل خيط نغزل لكم قصًة كل يوم',
//         buttonText: 'تعرف أكثر',
//       };
//     }  else if (url.includes('story')) {
//       this.currentPageContent = {
//         title: 'من نحن',
//         description: 'تعرف علينا عن قرب ومعرفة رؤيتنا ورسالتنا.',
//         buttonText: 'المزيد عنا',
//       };
//     }
    
    
//   }
}

