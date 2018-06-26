import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {PostAdServiceClient} from "../services/postad.service.client.";

@Component({
  selector: 'app-admin-ad-control',
  templateUrl: './admin-ad-control.component.html',
  styleUrls: ['./admin-ad-control.component.css']
})
export class AdminAdControlComponent implements OnInit {

  constructor(private userservice: UserServiceClient,
              private service: PostAdServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadAds(params['userId']));
  }

  userId='';
  ads = [];

  loadAds(userId) {
    this.userId = userId;
    this
      .service
      .findAdsForUserid(userId)
      .then(ads => this.ads = ads);
      // .then(() => {this.sectionName = "";
      // this.maxSeats = "";});
  }

  deleteAd(adId)
  {
    this.service
      .deleteAd(adId)
      .then(()=>
        this.service
          .findAdsForUser()
          .then(ads=>this.ads=ads)
      );

  }

  logout() {
    this.userservice
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  ngOnInit() {
  }

}
