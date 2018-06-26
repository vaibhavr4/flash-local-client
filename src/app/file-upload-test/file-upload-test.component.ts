import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'http://localhost:4000/api/upload';
@Component({
  selector: 'app-file-upload-test',
  templateUrl: './file-upload-test.component.html',
  styleUrls: ['./file-upload-test.component.css']
})
export class FileUploadTestComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  title = 'app works!';
image=[];
  constructor(private http: Http, private el: ElementRef) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      this.image.push(response);
      console.log("IMAGE LINK:"+this.image);

    };
  }

  // upload() {
  //   //locate the file element meant for the file upload.
  //   let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //   //get the total amount of files attached to the file input.
  //   let fileCount: number = inputEl.files.length;
  //   //create a new fromdata instance
  //   let formData = new FormData();
  //   //check if the filecount is greater than zero, to be sure a file was selected.
  //   if (fileCount > 0) { // a file was selected
  //     //append the key name 'photo' with the first file in the element
  //     formData.append('photo', inputEl.files.item(0));
  //     //call the angular http method
  //     this.http
  //     //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
  //       .post(URL, formData).map((res:Response) => res.json()).subscribe(
  //       //map the success function and alert the response
  //       (success) => {
  //         alert(success._body);
  //       },
  //       (error) => alert(error))
  //   }
  // }

}
