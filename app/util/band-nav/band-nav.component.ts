import { BandNavVal, BandNavSet } from './../../service-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-band-nav',
  templateUrl: './band-nav.component.html',
  styleUrls: ['./band-nav.component.scss']
})
export class BandNavComponent implements OnInit {

  navVal: BandNavSet[] = [
    {
      parallels: [
        {
          link: 'dskjfl',
          title: 'Stage 2'
        }
      ],
      main: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
