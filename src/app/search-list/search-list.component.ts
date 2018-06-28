import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchServiceClient} from "../services/search.service.client";
import {SearchList} from "../models/search.model.client";
import {PostAdServiceClient} from "../services/postad.service.client.";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  logged= false;
  search: String;
  category:String;
  searchList: SearchList[];
  localsearchList=[];
  test;
  about: String;
  ad;

  scrape_details(about)
  {
    this.about=about;
    this.router.navigate(['ad-details',this.about]);

  }
  searchCraigs(search, category) {

    this.search = search;
    this.category = category;
    console.log("Search list component ts:"+this.search);
    console.log("Search list component ts:"+this.category);
    this.postservice
      .findAdsByCategory(category)
      .then(searchads=>this.localsearchList=searchads);

    this.service
      .searchCraigs(search,category)
      .subscribe((response) => {
        this.searchList = response;
      }
        );
    window.scroll(0,1000);


      // .then(searchResult => this.searchResult = searchResult);
    console.log("BAck to client"+ this.searchList);
  }

  constructor(private router: Router,
              private service: SearchServiceClient,
              private postservice: PostAdServiceClient,
              private userService: UserServiceClient) { }

  ngOnInit() {
  }

}
