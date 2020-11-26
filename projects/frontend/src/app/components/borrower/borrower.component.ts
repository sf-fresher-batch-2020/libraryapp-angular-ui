import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {

  constructor(private authService: AuthService,private userService: UserService) { 
    this.currentUser = this.authService.getLoggedInUser();
  }
  currentUser;
  currentProfile;
  ngOnInit(): void {
    console.log(this.currentUser.id);
    this.userService.getProfile(this.currentUser.id).subscribe(
      data => {
        this.currentProfile = data[0];
  });

  }

}
