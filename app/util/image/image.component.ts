import { UiService } from './../../services/ui.service';
import { Image } from './../../service-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: Image;

  imageData = {
    backgroundImage: 'url("../../../assets/images/svgs/image-.svg")'
  };

  constructor(private ui: UiService) { }

  ngOnInit() {
    this.imageData.backgroundImage = this.getImg();
  }

  getImg() {
    return 'url("' + this.image.src + '")';
  }

  showImage() {
    this.ui.showImage(this.image.src);
  }

}
