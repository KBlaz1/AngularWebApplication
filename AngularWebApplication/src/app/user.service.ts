import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('https://webapidemo20200626043748.azurewebsites.net/api/Users');
  }

  getUserById(id) {
    console.log('https://webapidemo20200626043748.azurewebsites.net/api/Users'+id);
    return this.http.get('https://webapidemo20200626043748.azurewebsites.net/api/Users/'+id);
  }
}
