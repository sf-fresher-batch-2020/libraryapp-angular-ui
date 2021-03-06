import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AdminComponent } from './components/admin/admin.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BorrowbookComponent } from './components/borrowbook/borrowbook.component';
import { BorrowerComponent } from './components/borrower/borrower.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'signup', component:SignupComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'addbook',component:AddbookComponent},
  {path: 'booklist',component:BooklistComponent},
  {path: 'borrower',component:BorrowerComponent},
  {path: 'borrowbook',component:BorrowbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
