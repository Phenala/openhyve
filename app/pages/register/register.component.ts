import { RouterModule } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { UiService } from './../../services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  gaugeRefresh = new EventEmitter<number>();

  register = {
    positiveColor: '#00ff00',
    negativeColor: '#ff0000',
    usernameTakenWarning: 'Unavailable',
    usernameAvailable: 'Available',
    usernameStatusStyle: {
    },
    passwordAllInclusive: 'Password should include numbers',
    usernameStatus: 0,
    usernameStatusLoading: false,
    username: '',
    passwordStatus: '',
    passwordStrength: 0,
    passwordStrengthStates: ['Weak', 'Weak', 'Fair', 'Okay', 'Good'],
    password: '',
    cpasswordStatus: true,
    cpassword: '',
    firstname: '',
    lastname: '',
    firstnameValid: true,
    lastnameValid: true,
    usernameValid: true,
    passwordValid: true,
    cpasswordValid: true,
    registrationStatus: 0,
    status: '',
    loading: false
  };

  constructor(private ui: UiService, public login: LoginService) { }

  ngOnInit() {
    this.ui.fullPage();
  }

  checkUserNameExistence() {
    this.register.usernameStatusLoading = true;
    this.register.usernameStatus = 0;
    this.login.checkUserName(this.register.username).then(
      (available) => {
        this.register.usernameStatusLoading = false;
        this.register.usernameStatus = available['output'] ? 1 : 2;
      });
    this.register.usernameValid = true;
  }

  checkPasswordStrength() {
    let points = 0;
    const password = this.register.password;
    points += password.length;
    let hasLetters = false;
    let hasCapitalLetters = false;
    let hasNumbers = false;
    for (let i = 0; i < password.length; i++) {
      const code = password.charCodeAt(i);
      hasLetters = (code >= 97 && code <= 122);
      hasNumbers = (code >= 48 && code <= 57);
      hasCapitalLetters = (code >= 65 && code <= 90);
    }
    points += hasLetters ? 1 : 0;
    points += hasCapitalLetters ? 1 : 0;
    points += hasNumbers ? 2 : 0;
    this.register.passwordStrength = Math.min(5, Math.round(points));
    this.gaugeRefresh.emit(this.register.passwordStrength);
    this.register.passwordValid = true;
  }

  validate() {
    this.register.usernameValid = (this.register.usernameStatus === 1 && this.register.username !== '');
    this.register.passwordValid = (this.register.passwordStrength === 5 && this.register.password !== '');
    this.register.cpasswordValid = (this.register.cpassword === this.register.password && this.register.cpassword !== '');
    this.register.firstnameValid = (this.register.firstname !== '');
    this.register.lastnameValid = (this.register.lastname !== '');
    // tslint:disable:max-line-length
    return this.register.usernameValid && this.register.passwordValid && this.register.cpasswordValid && this.register.firstnameValid && this.register.lastnameValid;
  }

  signup() {
    const valid = this.validate();
    if (valid) {
      this.register.registrationStatus = 1;
      this.login.signup(this.register.firstname, this.register.lastname, this.register.username, this.register.password).then(
        (val) => {
          this.registerSuccess();
        }
      );
    }
  }

  registerSuccess() {
    this.register.registrationStatus = 2;
  }

}
