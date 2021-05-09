import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../service/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  books: Book[];
  displayDialog: boolean;
  bookForDialog: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().
      subscribe(books => this.books = books);
  }

  clonedBooks: { [s: string]: Book; } = {};
  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
    this.clonedBooks[book.name] = { ...book };
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
    this.bookService.updateBook(book)
    .subscribe( data => {
      this.ngOnInit();
      alert("Book Updated successfully.");
    });
   
  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
    this.books[index] = this.clonedBooks[book.name];
    delete this.clonedBooks[book.name];
  }

  deleteBook(book: Book) {
    console.log('Book Deleted');
     
    this.bookService.deleteBook(book)
      .subscribe( data => {
        this.ngOnInit();
        alert("Book Deleted successfully.");
      });
      
  }

  onBookAdd(){
    this.bookForDialog = {
      name: null, price: null, author: null
  };
    this.displayDialog = true;
  }

  saveBook(){
    console.log('Book Saved');
    this.bookService.createBook(this.bookForDialog)
    .subscribe( data => {
      this.ngOnInit();
      alert("Book Created successfully.");
    });
   
    this.displayDialog = false;
  }

}