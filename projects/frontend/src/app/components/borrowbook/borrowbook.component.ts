import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent implements OnInit {

  id:number;
  books:any;

  constructor(private userService: UserService, private route: ActivatedRoute,private toastr:ToastrService) { 
    this.route.params.subscribe(params => {
      this.id = +params["id"];
     })
  }
  selectbook;
  ngOnInit(): void {
    this.borrowbooks();
  }

  borrowbooks(){
    this.userService.getbooks().subscribe(res => {
      this.books = res;
    })
  }
  borrowBook(id) {
    console.log("Borrowing Book :" + id);
    this.userService.borrowbook(id).subscribe(res => {
      this.selectbook= null; 
     window.location.reload();
     this.toastr.success('book borrowed!');
    });
  
  } 
}
