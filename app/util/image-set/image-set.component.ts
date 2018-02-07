import { ImageSet, Image } from './../../service-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-set',
  templateUrl: './image-set.component.html',
  styleUrls: ['./image-set.component.scss']
})
export class ImageSetComponent implements OnInit {

  @Input() imageSet: Image[];

  currentImage = 0;

  thumbnailWidth: string;

  styles = [];

  constructor() {
   }

  ngOnInit() {
    this.imageSet.forEach((val) => {
      this.styles.push({
        backgroundImage: 'url("' + val.src + '")'
      });
    });
  }

  setImage(num) {
    this.currentImage = num;
  }

}
