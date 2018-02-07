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

  defval = 50;

  constructor() { }

  ngOnInit() {
    if (!this.scale) {
      this.scale = 1;
    }
    this.sizeValues.width = (this.defval * this.scale) + 'px';
    this.sizeValues.height = (this.defval * this.scale) + 'px';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.sizeValues.width = (this.defval * this.scale) + 'px';
    this.sizeValues.height = (this.defval * this.scale) + 'px';
  }

}
