import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = {
    nameChange: false,
    titleChange: false,
    newSkill: ''
  };

  profileData = {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    skills: [],
    description: ''
  };

  constructor(public data: DataService) { }

  ngOnInit() {
    // tslint:disable-next-line:forin
    for (const i in this.profileData) {
      this.profileData[i] = this.data.user[i];
    }
  }

  nameChanged() {
  }

  addSkill() {
    this.profileData.skills.push(this.profile.newSkill);
    this.profile.newSkill = '';
  }

  deleteSkill(ind: number) {
    this.profileData.skills = this.profileData.skills.filter((val, index, arr) => index !== ind );
  }

}
