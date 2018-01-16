import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabNames = [];

  @Output() tabChange: EventEmitter<Number>;

  activeTab = 2;
  tabStyle = {
    width: ''
  };
  underlineStyle = {
    width: '',
    'margin-left': ''
  };

  constructor() {
    this.tabChange = new EventEmitter<Number>();
  }

  ngOnInit() {
    const val = 100 / this.tabNames.length;
    this.tabStyle.width = val + '%';
    this.underlineStyle.width = val + '%';
    this.switchTo(this.activeTab);
  }

  switchTo(ind: number) {
    this.activeTab = ind;
    this.underlineStyle['margin-left'] = (100 * this.activeTab / this.tabNames.length) + '%';
    this.tabChange.emit(this.activeTab);
  }


}
