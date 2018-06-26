import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class SearchServiceClient {
  constructor(private ajax: Http) {}
  searchCraigs(search, category) {
    console.log("In client service:"+search);
    let url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search%20where%20location%3D%22boston%22%20and%20type%3D%22'+category+'%22%20and%20query%3D%22'+search+'%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    return this.ajax.get(url)
      .map((res: Response) => {
        var temp = res.json();
        var results;
        var resultsArray = [];
        if (!temp.query.results.RDF.item) {
          resultsArray = [];
        }
        else {
          results = temp.query.results.RDF.item;
          console.log("RESULTS:" + results);
          for (var i = 0; i < results.length; i++) {
            if(results[i].enclosure!=undefined) {

              resultsArray.push(
                {title: results[i].title[0], about: results[i]["about"], description: results[i]["description"], image:results[i].enclosure.resource}
              );
            }
            else
            resultsArray.push(
              {title: results[i].title[0], about: results[i]["about"], description: results[i]["description"]}
            );


          }
        }


        return resultsArray;
      });
  }



}
