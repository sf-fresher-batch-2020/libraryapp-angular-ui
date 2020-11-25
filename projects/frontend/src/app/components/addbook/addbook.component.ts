import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private router:Router, private userService:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  title: string;
  author: string;
  publisher: string;
  category: string;

  addbook(form:NgForm) {
    let formData = {title: this.title, author: this.author, publisher: this.publisher, category: this.category };
    console.log(JSON.stringify(formData));
   this.userService.addedbook(formData).subscribe(res => {
      console.log(res);
     this.toastr.success("Book added Successfully");
      form.reset();
     // this.router.navigate(['booklist']);
    },err=>{
      console.error(err);
      this.toastr.error("Book adding failed");
    });
  }


}
