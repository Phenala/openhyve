import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-image',
  templateUrl: './entity-image.component.html',
  styleUrls: ['./entity-image.component.scss']
})
export class EntityImageComponent implements OnInit {

  @Input() scale: number;

  sizeValues = {
    width: '400px',
    height: '400px'
  };

  constructor() { }

  ngOnInit() {
    if (!this.scale) {
      this.scale = 1;
    }
    const defval = 50;
    console.log(this.scale);
    this.sizeValues.width = (defval * this.scale) + 'px';
    this.sizeValues.height = (defval * this.scale) + 'px';
  }

}
