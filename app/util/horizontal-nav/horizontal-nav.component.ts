import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss']
})
export class HorizontalNavComponent implements OnInit {

  navValues = [{
    descriptor: 'Set 10',
    value: 'Controller Testing',
    status: 'Complete'
  },
  {
    descriptor: 'Set 11',
    value: 'Database Installation',
    status: 'Complete'
  },
  {
    descriptor: 'Set 12',
    value: 'Studio Demolition',
    status: 'In Progress'
  },
  {
    descriptor: 'Set 13',
    value: 'Duck Hunting',
    status: 'Due'
  },
  {
    descriptor: 'Set 14',
    value: 'Shoe Design',
    status: 'Due'
  },
  ];

  meta = {
    valid: 'In Progress',
    past: 'Complete',
    future: 'Due'
  };

  elementWidth = 300;

  navenc = {
    width: '',
    marginLeft: ''
  };

  navIndex = this.navValues.indexOf(this.navValues.find((val) => val.status === this.meta.valid));

  constructor() { }

  ngOnInit() {
    this.adjustWidth();
  }

  adjustWidth() {
    const windowWidth = document.getElementById('viewer').offsetWidth;

    this.navenc.width = (this.navValues.length * this.elementWidth) + 'px';
    console.log('Wala' + windowWidth);

    const hidwidth = this.navIndex * this.elementWidth;
    const showwidth = (windowWidth - this.elementWidth) / 2;
    const offset = -1 * Math.max(0, Math.min(((this.navValues.length) * this.elementWidth - windowWidth), (hidwidth - showwidth)));
    this.navenc.marginLeft = offset + 'px';
  }

  scroll(val) {
    this.navIndex += val;
    this.navIndex = Math.max(0, Math.min(this.navValues.length - 1, this.navIndex));
    this.adjustWidth();
  }

  setScroll(val) {
    this.navIndex = val;
    this.navIndex = Math.max(0, Math.min(this.navValues.length - 1, this.navIndex));
    this.adjustWidth();
  }
}
