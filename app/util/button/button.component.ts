import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label = '';
  @Input() lean = 'Right';
  @Input() icon = '';
  @Input() scale = 1;

  imagesource = '';

  style = {};

  imgstyle = {};

  constructor() { }

  ngOnInit() {
    this.imagesource = '../../../assets/images/svgs/' + this.icon + '.svg';
    switch (this.lean) {
      case 'right':
        this.style['margin-left'] = 'auto';
        break;
      case 'left':
        this.style['margin-right'] = 'auto';
        break;
      case 'center':
        this.style['margin'] = 'auto';
        break;
      default:
        this.style['display'] = 'inline-block';
    }
    this.imgstyle['width'] = (30 * this.scale) + 'px';
  }


}
