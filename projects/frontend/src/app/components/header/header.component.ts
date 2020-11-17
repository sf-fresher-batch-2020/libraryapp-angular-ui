import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser;

  constructor(
    
  ) { }

  ngOnInit(): void {
    this.loggedInUser =  localStorage.getItem("LOGGED_IN_USER") != null ? true: false;
  }

  
}
