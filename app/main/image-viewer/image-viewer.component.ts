import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  source = '../../../assets/images/backgrounds/openhyve-bg.jpg';


  constructor(public ui: UiService) { }

  ngOnInit() {
  }

  close() {
    this.ui.isShowingImage = false;
  }

}
