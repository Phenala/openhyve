import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-descriptor',
  templateUrl: './entity-descriptor.component.html',
  styleUrls: ['./entity-descriptor.component.scss']
})
export class EntityDescriptorComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
