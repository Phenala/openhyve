import { User } from './../../service-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-user',
  templateUrl: './entity-user.component.html',
  styleUrls: ['./entity-user.component.scss']
})
export class EntityUserComponent implements OnInit {

  @Input() user: User = {
    id: 'asdf',
    name: 'Donna Sparkles',
    imageUrl: 'asdfadsf',
    title: 'UI Designer',
    description: 'Not related to Pink Sparkles',
    skills: ['UI Design', 'UX Consulting']
  };

  constructor() { }

  ngOnInit() {
  }

}
