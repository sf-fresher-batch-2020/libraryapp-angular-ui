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
  
  ngOnInit(): void {
    this.borrowbooks();
    this.filterCategory('ALL');
  }

  borrowbooks(){
    this.userService.getbooks().subscribe(res => {
      this.books = res;
    })
  }


  //filtering
  filterCategory(category) {
    this.userService.getbooks().subscribe(res => {
      let books: any = res;
      
      let filteredData = null;
      if (category == 'ALL') {
        filteredData = books;
      }
      else {
        filteredData = books.filter(obj => obj.category == category);
      }

      this.books = filteredData;
    });
  }


//borrow books
  borrowBook(i) {
    console.log("Borrowing Book :" + i);
    this.userService.getbook(i).subscribe(  // getting from all books
      data => {
        console.log(data);
        this.userService.borrowbook(data).subscribe(res => { // putting on borrowed books
          this.toastr.success('book borrowed!');
         // window.location.reload();
         });
        });
  } 
}
