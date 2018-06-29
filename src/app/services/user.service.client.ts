export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByName(userName) {
    console.log("ANGULAR SERVICE NAME:"+userName);
    return fetch('http://localhost:4000/api/username/' +userName)
      .then(response => response.json());
  }


  findAllUsers() {
    return fetch('http://localhost:4000/api/users',{
      credentials: 'include', // include, same-origin, *omit
    }).then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      password: password,
      username: username
    };
    return fetch('http://localhost:4000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('http://localhost:4000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  createUserByAdmin(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/admin-user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUsername(username) {

    const credentials = {
      username: username,
    };
    return fetch('http://localhost:4000/api/register', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('http://localhost:4000/api/user', {
      method: "PUT",
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteUser(userId)
  {
    return fetch('http://localhost:4000/api/user/'+userId, {
      method: "DELETE",
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
