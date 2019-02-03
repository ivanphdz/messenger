import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  constructor() { 
    let user1 : User = {
      nick: 'Ivan',
      email: 'ivan@mail.com',
      friend: true,
      uid: 1
    };
    let user2 : User = {
      nick: 'Ivan2',
      email: 'ivan2@mail.com',
      friend: false,
      uid: 2
    };
    this.friends = [user1, user2];
  }
  getFriends(){
    return this.friends;
  }
}
