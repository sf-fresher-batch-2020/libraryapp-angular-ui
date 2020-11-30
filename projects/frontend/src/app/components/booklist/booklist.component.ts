import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  id:number;
  books:any;

  constructor(private userService: UserService, private route: ActivatedRoute,private toastr:ToastrService) { 
   this.route.params.subscribe(params => {
     this.id = +params["id"];
    })
  }
  
  ngOnInit(): void {
    this.bookslist();
  }

  bookslist(){
    this.userService.getbooks().subscribe(res => {
      this.books = res;
    })
  }

  deleteBook(j) {
    console.log("Deleting user :" + j);
    this.userService.deletebook(j).subscribe(res => {
     // this.selectbook= null; 
     window.location.reload();
     this.toastr.success('book deleted!');
     this.bookslist();
  
    })
  }

}
