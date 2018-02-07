import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabNames = [];

  @Output() tabChange: EventEmitter<object>;

  outStyle = {
    outTabStyle: {
      width: '0%',
      marginLeft: '0%'
    },
    outTabdivStyle: {
      width: '0%'
    }
  };

  activeTab = 0;

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
    this.outStyle.outTabStyle.width = ((this.tabNames.length * 100) + (this.tabNames.length * 0.7)) + '%';
    this.outStyle.outTabdivStyle.width = (100 / this.tabNames.length - (1 / this.tabNames.length)) + '%';
    this.switchTo(this.activeTab);
  }

  switchTo(ind: number) {
    this.activeTab = ind;
    this.underlineStyle['margin-left'] = (100 * this.activeTab / this.tabNames.length) + '%';
    this.outStyle.outTabStyle.marginLeft = '-' + ind + '00%';
    this.tabChange.emit({ tab: this.activeTab, style: this.outStyle});
  }


}
