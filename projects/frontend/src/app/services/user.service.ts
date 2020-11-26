import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  users:any;
  books:any;

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
      const url = this.apiUrl + '/profiles/' + id;
      // console.log(url);
      return this.http.get(url);
    }

    addedbook(books){
      let url = this.apiUrl + "/books";
      return this.http.post(url, books);
    }
    
    getbooks(){
      let url = this.apiUrl + "/books";
      return this.http.get(url);
    }
    getbook(id:number){
      let url=this.apiUrl + "/books/"+id;
      return this.http.get(url);
    }
    deletebook(id) {
      let url = this.apiUrl + "/books/delete" ;
      return this.http.post(url,id);
    }
    borrowbook(book) {
      let url = this.apiUrl + "/borrowbooks";
      return this.http.post(url, book);
    }
    getborrowbooks(){
      let url = this.apiUrl + "/borrowbooks";
    return this.http.get(url);
    }
}
