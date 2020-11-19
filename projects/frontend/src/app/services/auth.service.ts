import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http:HttpClient) {}
  getLoggedInUser(){
    let user  = localStorage.getItem("LOGGED_IN_USER");
    let loggedInUser = user ? JSON.parse(user) : null;
    return loggedInUser;
  }

  getLoggedInUserId(){
    let loggedInUser = this.getLoggedInUser();
    return loggedInUser ? loggedInUser.id : null;
  }

  logout(){
    localStorage.removeItem("LOGGED_IN_USER");
  }

  storeLoginDetails(userObj){
    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(userObj));
  }
}
