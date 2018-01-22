import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usernameStatus = '';
  passwordStatus = '';
  status = '';
  loading = true;

  constructor(private ui: UiService) { }

  ngOnInit() {
    this.ui.fullPage();
  }

}
