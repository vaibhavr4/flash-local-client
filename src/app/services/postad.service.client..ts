export class PostAdServiceClient {
  createAd(ad) {
       return fetch('http://localhost:4000/api/post-ad', {
      body: JSON.stringify(ad),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  scrape_details(about)
  {
    const req={about};
    return fetch('http://localhost:4000/api/scrape', {
      method: 'post',
      body: JSON.stringify(req),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAdsForUser()
  {
    console.log("In service to server");
    const url = 'http://localhost:4000/api/acd';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());


  }

  findAdsForUserid(userId)
  {
    const url = 'http://localhost:4000/api/user/'+userId+'/content';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }

  deleteAd(adId)
  {
    return fetch('http://localhost:4000/api/delad/'+adId, {
      method: "DELETE",
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAdsByCategory(category)
  {
    const url = 'http://localhost:4000/api/adscat/'+category;
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }


  getAd(adId)
  {
    const url = 'http://localhost:4000/api/myad/'+adId;
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }


}
