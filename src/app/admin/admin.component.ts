

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {Section} from "../models/section.model.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userservice: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId=params['userId']);
  }


  userId;

  users=[];
  usermodified=[];

  deleteUser(userId) {
    this
      .userservice
      .deleteUser(userId)
      .then(() => {
        this.userservice.findAllUsers()
          .then(users => this.users = users)
        .then(()=>this.usermodified=this.users.filter(function (el) {
          return el.username !=="admin";

        })
        );
      });
  }
  logout() {
    this.userservice
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.userservice.findAllUsers()
      .then(users => this.users = users)
      .then(()=>this.usermodified=this.users.filter(function (el) {
      return el.username !=="admin";

    })
      );

  }


}
