import { HorizontalNavVal } from './../../service-values';
import { of } from 'rxjs/observable/of';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss']
})
export class HorizontalNavComponent implements OnInit {

  @Output() selectNav: EventEmitter<string> = new EventEmitter<string>();
  @Input() navValues: HorizontalNavVal[];
  @Input() updateVals: EventEmitter<HorizontalNavVal[]>;

  elementWidth = 300;

  meta = {
    valid: 'In progress',
    past: 'Complete',
    future: 'Due'
  };

  loadingNav = false;

  navenc = {
    width: '100%',
    marginLeft: '0px'
  };

  navIndex = 0;

  constructor() { }

  ngOnInit() {
    this.loadingNav = true;
    if (this.updateVals != null) {
      this.updateVals.subscribe((navval) => {
        this.navValues = navval;
        this.adjustWidth();
        this.navIndex = this.navValues.indexOf(this.navValues.find((val) => val.status === this.meta.valid));
        this.emit();
      });
    }
  }

  adjustWidth() {
    const windowWidth = document.getElementById('viewer').offsetWidth;

    this.navenc.width = (this.navValues.length * this.elementWidth) + 'px';
    this.navenc.width = '100000px';

    const hidwidth = this.navIndex * this.elementWidth;
    const showwidth = (windowWidth - this.elementWidth) / 2;
    const offset = -1 * Math.max(0, Math.min(((this.navValues.length) * this.elementWidth - windowWidth), (hidwidth - showwidth)));
    this.navenc.marginLeft = offset + 'px';
    this.loadingNav = false;
  }

  scroll(val) {
    this.navIndex += val;
    this.navIndex = Math.max(0, Math.min(this.navValues.length - 1, this.navIndex));
    this.adjustWidth();
    this.emit();
  }

  setScroll(val) {
    this.navIndex = val;
    this.navIndex = Math.max(0, Math.min(this.navValues.length - 1, this.navIndex));
    this.adjustWidth();
  }

  clicked(val) {
    this.setScroll(val);
    this.emit();
  }

  emit() {
    this.selectNav.emit(this.navValues[this.navIndex].id);
  }
}
