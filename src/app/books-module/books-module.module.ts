import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksModuleRoutingModule } from './books-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BooksModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModuleModule { }
