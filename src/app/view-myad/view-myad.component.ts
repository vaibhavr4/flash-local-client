import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostAdServiceClient} from "../services/postad.service.client.";
import {UserServiceClient} from "../services/user.service.client";
import {MessageServiceClient} from "../services/message.service.client";

@Component({
  selector: 'app-view-myad',
  templateUrl: './view-myad.component.html',
  styleUrls: ['./view-myad.component.css']
})
export class ViewMyadComponent implements OnInit {

  constructor(private adService: PostAdServiceClient,
              private userservice: UserServiceClient,
              private messageService : MessageServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.getAd(params['adId']));
  }

  myAd;
  temp;
  message;
  message_details;
  username;
userId;
adId;
images=[];
  sellerCard=false;
  logged=false;

  getAd(adId)
  {
    this.adId = adId;

    this.adService
      .getAd(adId)
      .then(myAd=>this.myAd=myAd)
      .then(()=>this.setImage(this.myAd.image));

    this.adService
      .getAd(adId)
      .then(myAd=>this.myAd=myAd)
      .then(()=>this.username = this.myAd.username);
  }

  setSeller()
  {
    this.sellerCard=true;
  }



  logout() {
    this.userservice
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  setImage(images)
  {
    console.log("IMAGES IN:"+images.length);
      for(var i=0; i<images.length; i++)
      {
        this.temp= "http://localhost:4000"+images[i];
        console.log("CONSTRUCTED IMAGE:"+this.temp);
       this.images.push(this.temp);
      }
      console.log("IMAGES PUSHED:"+this.images);
  }
  postMessage()
  {
      this.message_details = {
        message: this.message,
        adId: this.adId,
        from:this.userId,
        to: this.username
      };
      console.log("Message:" + this.message);
      console.log("From:"+this.userId);
      console.log("Ad:"+this.adId);
      console.log("to:"+this.username);
      console.log("Details:"+this.message_details);

      this.messageService
    .createMessage(this.message_details)
        .then(() =>
          this.router.navigate(['home']));
  }

  ngOnInit() {

    this.userservice.profile()
      .then(res => {
          return res._id;
        }
      ).then(userId => {
      if (userId !== null) {
        this.userId = userId;
        this.logged = true;
      }
    });
  }

}
