import { User, Self } from './../service-values';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  user: Self = {
    id: 'dfsa',
    imageUrl: 'afdsdsf',
    firstName: 'Logan',
    lastName: 'Gossamer',
    title: 'Stuntman',
    skills: ['painting'],
    description: 'Greatest man alive, nothin more',
    email: 'bloodborne@halla.com',
    username: 'lingo'
  };

  constructor() { }

}
