import { Component, ElementRef, ViewChild } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FlowbiteService } from '../../../services/flowbite.service';
@Component({
  selector: 'app-gallery',
  standalone: true,
   imports: [
     LightboxModule,
     NgxImageZoomModule
   ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
   @ViewChild ('myimage') myImage!: ElementRef<HTMLImageElement>;
 _album:any ; 
  selectedImage: any
  isOpen: boolean = false
  public myThumbnail="/images/story page/Pic1.png";
public myFullresImage="/images/story page/Pic1.png";
constructor(private _lightbox: Lightbox,private flowbiteService: FlowbiteService) {
  // this._album = [
   
  //    { src:  "/images/story page/Pic4.png", caption: "caption", thumb: "thumb" }
  //   // "/images/story page/Pic5.png",
  //   // "/images/story page/Pic6.png",
  //   // "/images/story page/Pic7.png",
  //   //   "/images/story page/Pic8.png",
  // ]
} 

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
  

  // ngAfterViewInit() {
  //   this.magnify(this.myImage.nativeElement, 3);
  // }

  // magnify(img: HTMLImageElement, zoom: number) {
  //   let glass = document.createElement('DIV');
  //   glass.setAttribute('class', 'img-magnifier-glass');
  //   img.parentElement!.insertBefore(glass, img);

  //   glass.style.backgroundImage = `url('${img.src}')`;
  //   glass.style.backgroundRepeat = 'no-repeat';
  //   glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px';
    
  //   let bw = 3;
  //   let w = glass.offsetWidth / 2;
  //   let h = glass.offsetHeight / 2;

  //   const moveMagnifier = (e: MouseEvent | TouchEvent) => {
  //     e.preventDefault();
  //     let pos = this.getCursorPos(e, img);
  //     let x = pos.x;
  //     let y = pos.y;

  //     if (x > img.width - w / zoom) x = img.width - w / zoom;
  //     if (x < w / zoom) x = w / zoom;
  //     if (y > img.height - h / zoom) y = img.height - h / zoom;
  //     if (y < h / zoom) y = h / zoom;

  //     glass.style.left = x - w + 'px';
  //     glass.style.top = y - h + 'px';
  //     glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${y * zoom - h + bw}px`;
  //   };

  //   glass.addEventListener('mousemove', moveMagnifier);
  //   img.addEventListener('mousemove', moveMagnifier);
  //   glass.addEventListener('touchmove', moveMagnifier);
  //   img.addEventListener('touchmove', moveMagnifier);
  // }

  // getCursorPos(e: MouseEvent | TouchEvent, img: HTMLImageElement) {
  //   let a = img.getBoundingClientRect();
  //   let x = 0,
  //     y = 0;
  //   if (e instanceof MouseEvent) {
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //   } else {
  //     x = e.touches[0].pageX - a.left;
  //     y = e.touches[0].pageY - a.top;
  //   }
  //   x = x - window.pageXOffset;
  //   y = y - window.pageYOffset;
  //   return { x: x, y: y };
  // }
  open(img: string): void { // open lightbox 
    console.log(img)
    if (img) {
        this.myThumbnail = img
    this.myFullresImage=img
    console.log(typeof (this.myThumbnail));
      console.log(typeof(this.myFullresImage));
    console.log(this.myThumbnail)
      console.log(this.myFullresImage)
      this.isOpen = true
      console.log(this.isOpen)
    }
  
    // this.isOpen=true
    // this._lightbox.open(this._album, index,{showDownloadButton:true}); 
} 
close(): void { // close lightbox programmatically 
this._lightbox.close(); 
}
  
}
