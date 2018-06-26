import { Component, OnInit } from '@angular/core';
import {PostAdServiceClient} from "../services/postad.service.client.";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  constructor(private adService: PostAdServiceClient,
              private router: Router,
              private route: ActivatedRoute) { }

              ads=[];


  deleteAd(adId)
  {
    this.adService
      .deleteAd(adId)
      .then(()=>
        this.adService
          .findAdsForUser()
          .then(ads=>this.ads=ads)
      );

  }
  ngOnInit() {
    this.adService
      .findAdsForUser()
      .then(ads=>this.ads=ads);
  }

}
