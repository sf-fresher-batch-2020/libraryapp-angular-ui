import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser;

  constructor(private authService:AuthService,private router:Router) { 
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  ngOnInit(): void {
  }


  logout(){
    localStorage.clear();
    this.router.navigate(["home"]);
  }

}
