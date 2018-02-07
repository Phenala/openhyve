import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() src: string;
  @Input() scale = 1;
  @Input() lean = '';

  imgsrc = '';
  styleIcon = {
    width: ''
  };

  constructor() {
  }

  ngOnInit() {
    this.opdate();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.opdate();
  }

  opdate () {
    this.imgsrc = '../../../assets/images/svgs/' + this.src + '.svg';
    switch (this.lean) {
      case 'right':
        this.styleIcon['margin-left'] = 'auto';
        break;
      case 'left':
        this.styleIcon['margin-right'] = 'auto';
        break;
      case 'center':
        this.styleIcon['margin'] = 'auto';
        break;
      default:
        this.styleIcon['display'] = 'inline-block';
    }
    this.styleIcon.width = (40 * this.scale) + 'px';
  }

}
