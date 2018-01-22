import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hyve-loader',
  templateUrl: './hyve-loader.component.html',
  styleUrls: ['./hyve-loader.component.scss']
})
export class HyveLoaderComponent implements OnInit {

  @Input() scale = 1;

  loaderClass = [];
  loaderIds = [];
  loaderStyles = [];

  loaderstyle = {
    width: '',
    height: ''
  };

  test = {
    backgroundColor: 'blue',
    backgroundImage: 'url(\'../../../assets/images/svgs/loader-set/5.svg\');'
  };

  constructor() {
    for (let i = 0; i < 17; i++) {
      this.loaderClass[i] = Math.round(Math.random() * 10);
      this.loaderIds[i] = 'loader' + i;
    }
   }

  ngOnInit() {
    this.loaderstyle.width = (200 * this.scale) + 'px';
    this.loaderstyle.height = this.loaderstyle.width;
  }

}
