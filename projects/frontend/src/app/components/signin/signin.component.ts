import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private userService: UserService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  signin(form:NgForm) {
   
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      let users: any = res;
      let userExists = false;
      let loggedInUser = null;
      for (let obj of users) {
        if (obj.email == this.email && obj.password == this.password) {
          userExists = true;
          loggedInUser = obj;
          break;
        }
      }
      if (userExists) {
        form.reset();
        this.toastr.success("Successfully Logged in")
        this.authService.storeLoginDetails(loggedInUser);
        if (loggedInUser.role == "ADMIN") {
          this.router.navigate(['admin']);

        }
        else {
          this.router.navigate(['borrower']);
        }

      }
      else {
        this.toastr.error("Invalid Credentials");
      }
    });

  }
}
