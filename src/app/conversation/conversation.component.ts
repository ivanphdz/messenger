import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friends: User[];
  friend: User;
  friendId: any;
  constructor(private activatedRoute : ActivatedRoute, private userService : UserService) {
    this.friendId = activatedRoute.snapshot.params['uid']
    this.friends = userService.getFriends();
    this.friend = this.friends.find((record) => { 
      return record.uid == this.friendId;
    });
  }

  ngOnInit() {
  }

}
