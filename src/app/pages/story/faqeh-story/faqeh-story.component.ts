import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { HeroNavbarComponent } from '../../../components/main/main/hero-navbar/hero-navbar.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { isPlatformBrowser } from '@angular/common';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FlowbiteService } from '../../../services/flowbite.service';
import { DialogModule } from 'primeng/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { ContactUsComponent } from '../../../components/main/main/contact-us/contact-us.component';
@Component({
  selector: 'app-faqeh-story',
  standalone: true,
  imports: [HeroNavbarComponent,
    GalleryComponent,
    ContactUsComponent,
    NgxImageZoomModule,
       DialogModule
  ],
  templateUrl: './faqeh-story.component.html',
  styleUrl: './faqeh-story.component.scss'
})
export class FaqehStoryComponent {
  currentNavImage = '/images/story page/Pic1.png';
    @ViewChild ('myimage') myImage!: ElementRef<HTMLImageElement>;
  selectedImage: any
  isModalOpen: boolean = false
  visible: boolean = false; 
  isBrowser: boolean;
  public myThumbnail="/images/story page/Pic1.png";
public myFullresImage="/images/story page/Pic1.png";
  public imagePaths: string[] = [
    '/images/story page/Pic18.png',
    '/images/story page/Pic17.png',
    '/images/story page/Pic16.png',
    '/images/story page/Pic15.png',
    '/images/story page/Pic14.png'
  ];

  // Current image sources for each image element
  public imageSrcs: string[] = [];
  private currentIndex: number = 0;  // Track the current index for sequential switching
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private flowbiteService: FlowbiteService, private el: ElementRef, private renderer: Renderer2,
    private primengConfig: PrimeNGConfig) {
      this.isBrowser = isPlatformBrowser(this.platformId);
   }

  ngOnInit() {
      this.primengConfig.ripple = true; 
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  
    // Initialize images with the first set of images
    this.imageSrcs = [...this.imagePaths];

    // Switch images every 3 seconds sequentially or randomly
   if (isPlatformBrowser(this.platformId)) {
      setInterval(() => this.switchImagesSequentially(), 3000);
      // Uncomment for random switching
      // setInterval(() => this.switchImagesRandomly(), 3000);
    } 
    this.scrollToTop()
    // Uncomment the line below for random switching
    // setInterval(() => this.switchImagesRandomly(), 3000);
  }

  switchImagesSequentially() {
    // Increment the index and loop back to 0 if it exceeds the array length
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;

    // Shift images in the array by adjusting their index
    this.imageSrcs = this.imagePaths.map((src, index) => {
      return this.imagePaths[(index + this.currentIndex) % this.imagePaths.length];
    });
  }

  switchImagesRandomly() {
    this.imageSrcs = this.imageSrcs.map(() => {
      const randomIndex = Math.floor(Math.random() * this.imagePaths.length);
      return this.imagePaths[randomIndex];
    });
  }
    open(img: string): void { // open lightbox 
    console.log(img)
      if (img) {
        this.myThumbnail = img
    this.myFullresImage=img
    console.log(typeof (this.myThumbnail));
      console.log(typeof(this.myFullresImage));
    console.log(this.myThumbnail)
      console.log(this.myFullresImage)
  this.showDialog()
    }
  

    // this.isOpen=true
    // this._lightbox.open(this._album, index,{showDownloadButton:true}); 
  } 
  // openmodel() {
  //         const modal = this.el.nativeElement.querySelector('#small-modal');
  //   this.renderer.removeClass(modal, 'hidden'); // Show modal
  // }
  //   closeModal() {
  
  //   this.isModalOpen = false;
  // }
   
  
    showDialog() { 
        this.visible = true; 
    } 
    scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
