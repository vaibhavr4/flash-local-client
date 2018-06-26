import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  logged= false;

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.userService.profile()
      .then(res => {
          return res._id;
        }
      ).then(userId => {
      if (userId !== null) {
        this.logged = true;
      }
    });
  }

}
