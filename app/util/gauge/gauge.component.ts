import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  @Input() value = 5;
  @Input() max = 5;
  @Input() update: EventEmitter<number>;

  gaugeArr = [];
  gaugeStyle = {
    width: '100px',
    backgroundColor: '',
    display: 'inline-block'
  };

  eachStyle = [];

  @Input() colors = ['#ff0000', '#ffff00', '#00ff00'];

  constructor() {
    for (let i = 0; i < this.max; i++) {
      this.gaugeArr.push(i);
      this.eachStyle.push({
        width: this.gaugeStyle.width,
        backgroundColor: this.gaugeStyle.backgroundColor,
        display: this.gaugeStyle.display
      });
    }
  }

  ngOnInit() {
    if (this.update != null) {
      this.update.subscribe((val) => this.refresh(val));
    }
    const nwidth = ((100  - 2 * this.max) / this.max) + '%';
    this.eachStyle.forEach((val) => {
      val.width = nwidth;
    });
    this.refresh(this.value);
  }

  refresh(value) {
    const ncolor = this.colors[Math.floor((value / this.max) * this.colors.length - 1)];
    this.eachStyle.forEach((val, ind) => {
      val.display = ind < value ? 'inline-block' : 'none';
      val.backgroundColor = ncolor;
    });
    console.log(this.value);
  }

}
