import { Component, OnInit } from '@angular/core';
import {PostAdServiceClient} from "../services/postad.service.client.";
import { AuthService, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  email;

  constructor(private socialAuthService: AuthService,
              private userService: UserServiceClient,
              private router: Router) { }


  public signinWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(()=>
        this.socialAuthService.authState.subscribe((user) => {
          this.user = user;

          this.loggedIn = (user != null);
          console.log("USER:"+this.email);
          this.userService.createUser(this.user.email,this.user.name)
            .then(() =>
              this.router.navigate(['profile']));

        })
      );



      }

  signOut(): void {
    this.socialAuthService.signOut();
  }


  ngOnInit() {

  }

}
