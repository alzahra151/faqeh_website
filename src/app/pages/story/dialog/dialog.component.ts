import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxImageZoomModule } from 'ngx-image-zoom';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [NgxImageZoomModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
 myThumbnail: string;
  myFullresImage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { thumbnail: string, fullresImage: string }) {
    // Initialize properties with data passed into the dialog
    this.myThumbnail = data.thumbnail;
    this.myFullresImage = data.fullresImage;
  }
}
