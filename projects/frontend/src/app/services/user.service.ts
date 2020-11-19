import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.API_URL;
  }
  signup(user) {
    let url = this.apiUrl + "/users";
    return this.http.post(url, user);
  }
}
