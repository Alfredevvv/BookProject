import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
      return this.http.get("https://openlibrary.org/search.json?&fields=title,subtitle,author_name,first_publish_year,type,number_of_pages_median")
      .pipe(map((res: any) => {
          return res.docs.map((book: any) => ({title: book.title, author: book.author_name, first_publish_year: book.first_publish_year, pages: book.number_of_pages_median}))
      }));
  }

  getBooks(params: any): Observable<Book[]>{
    let httpParams = new HttpParams();
    if (params.title)
      httpParams = httpParams.append('title', params.title);
    if (params.author)
      httpParams = httpParams.append('author', params.author);
    //if (params.subject)
      //httpParams = httpParams.append('subject', params.subject);

    return this.http.get("https://openlibrary.org/search.json?&fields=title,subtitle,author_name,first_publish_year,type,number_of_pages_median", {params: httpParams})
    .pipe(map((res: any) => {
        return res.docs.map((book: any) =>
        ({title: book.title, author: book.author_name, 
          first_publish_year: book.first_publish_year, 
          pages: book.number_of_pages_median}))
    }));
}

  
}
