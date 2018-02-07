import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() percent = 0;

  progStyle = {
    width: ''
  };

  constructor() { }

  ngOnInit() {
    this.progStyle.width = Math.min(Math.max(0, this.percent), 100) + '%';
  }

}
