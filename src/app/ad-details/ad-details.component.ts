import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {PostAdServiceClient} from "../services/postad.service.client.";

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

  constructor(private postservice: PostAdServiceClient,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserServiceClient) {
    this.route.params.subscribe(params => this.about=(params['about']));
  }
about;
ad;
logged=false;

  ngOnInit() {
    console.log("ABOUTT:"+this.about);
    this.postservice.scrape_details(this.about)
      .then(ad=>this.ad=ad);
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
