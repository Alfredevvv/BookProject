import { Component, OnInit } from '@angular/core';
import { Book } from '../../book.model';
import { BookService } from '../../book.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  records: Book[] = [];
  title = "Book Searcher";
  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('')
  })
  constructor(private service: BookService) {
    this.service.getAllBooks().subscribe(x=>{
      this.records = x;
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.bookForm.value);
    this.service.getBooks(this.bookForm.value).subscribe(x=>{
      this.records = x;
    })
  }

}