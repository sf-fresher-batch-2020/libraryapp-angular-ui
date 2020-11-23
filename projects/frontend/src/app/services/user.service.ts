import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  users:any;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.API_URL;
  }
  signup(user) {
    let url = this.apiUrl + "/users";
    return this.http.post(url, user);
  }
  getUsers(){
    let url = this.apiUrl + "/users";
    return this.http.get(url);
     }
  createProfile(user) {
      const url = this.apiUrl + '/profiles';
      const profile = { userId: user.id};
      return this.http.post(url, profile);
    }
  
    getProfile(id) {
      const url = this.apiUrl + '/profiles';
      console.log(url);
      return this.http.get(url, id);
    }
  
  
}
