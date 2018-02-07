import { LoginService } from './../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hyve-loader',
  templateUrl: './hyve-loader.component.html',
  styleUrls: ['./hyve-loader.component.scss']
})
export class HyveLoaderComponent implements OnInit {

  @Input() scale = 1;
  @Input() lean: string;

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

  constructor(public login: LoginService) {
    for (let i = 0; i < 17; i++) {
      this.loaderClass[i] = Math.round(Math.random() * 10);
      this.loaderIds[i] = 'loader' + i;
    }
   }

  ngOnInit() {
    this.loaderstyle.width = (200 * this.scale) + 'px';
    this.loaderstyle.height = this.loaderstyle.width;
    switch (this.lean) {
        case 'right':
          this.loaderstyle['margin-left'] = 'auto';
          break;
        case 'left':
          this.loaderstyle['margin-right'] = 'auto';
          break;
        case 'center':
          this.loaderstyle['margin'] = 'auto';
          break;
        default:
          this.loaderstyle['margin'] = 'auto';
    }
  }

}
