import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";
import { AuthService, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  googleUser :SocialUser;
  loggedIn: boolean;
  email;
  message: String;
  username;
  password;
credentials;
user:{};

  login(username, password) {
    this.username=username;
    this.password=password;
      this.service
        .login(username, password)
        .then(user => this.credentials = user)
        .then(() => this.check_login(this.credentials));

  }

  check_login(credentials)
  {
    console.log("In login component check:"+credentials.username);
    console.log("IN login component check:"+credentials.error);

    console.log("CRED:"+credentials);
      if(credentials.user=="Invalid User" || this.password==undefined || this.username==undefined)
        this.message="Please enter correct credentials";
      else if(credentials.username=="admin")
        this.router.navigate(['user-admin']);
      else
        this.router.navigate(['profile']);

  }

  public signinWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(()=>
        this.socialAuthService.authState.subscribe((user) => {
          this.googleUser = user;

          this.loggedIn = (user != null);
          console.log("USER:"+this.email);

          this.service
            .findUsername(this.googleUser.email)
            .then((usrname) => {
              if (usrname !== null) {
                this.router.navigate(['login']);
                alert("Username already exists.. Please login to continue");
              }
              else {
                this.service
                  .createUser(this.googleUser.email,this.googleUser.name)
                  .then(() =>
                    this.router.navigate(['profile']));
              }
            });

          // this.service.createUser(this.googleUser.email,this.googleUser.name)
          //   .then(() =>
          //     this.router.navigate(['profile']));



        })
      );



  }



  constructor(private socialAuthService: AuthService,
              private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
