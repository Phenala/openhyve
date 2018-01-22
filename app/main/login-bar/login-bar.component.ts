import { FormsModule } from '@angular/forms';
import { LoginService } from './../../services/login.service';
import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss']
})
export class LoginBarComponent implements OnInit {

  bgs = [1, 2, 3, 4];
  username: string;
  password: string;

  constructor(public ui: UiService, private loginService: LoginService) { }

  ngOnInit() {
    this.ui.fullPage();
  }

  login() {
    this.loginService.login(this.username, this.password);
  }

}
