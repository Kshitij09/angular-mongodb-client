import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Array<User> = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe((users: any) => {
      this.users = users;
    });
  }

}
