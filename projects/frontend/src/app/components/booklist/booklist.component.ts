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
  selectbook;
  ngOnInit(): void {
    this.bookslist();
  }

  bookslist(){
    this.userService.getbooks().subscribe(res => {
      this.books = res;
    })
  }

  deleteBook(id) {
    console.log("Deleting user :" + id);
    this.userService.deletebook(id).subscribe(res => {
      this.selectbook= null; 
     window.location.reload();
     this.toastr.success('book deleted!');
  
    });
  }

}
