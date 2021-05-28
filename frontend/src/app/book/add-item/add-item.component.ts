import { Component, Input, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BooksService } from '../../services/books.service';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../Books';
import { AuthorsService } from 'src/app/services/authors.service';
import { Author } from 'src/app/Author';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  book: Book = new Book();
  authors: Author[] = [];
  fullName: string;
  constructor(
    public dialog: MatDialogRef<AddItemComponent>,
    public service: BooksService,
    public authorService: AuthorsService
  ) {}
  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors() {
    this.authorService
      .getAll()
      .toPromise()
      .then(
        (data: any) => {
          this.authors = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  addBook() {
    console.log(this.authors);
    console.log(this.book);
    const val = this.fullName.split(' ');
    this.book.authorId = this.authors.find(
      (a) => a.firstName === val[0] && a.lastName === val[1]
    )?.authorId;
    console.log(this.book);
    this.service
      .create(this.book)
      .toPromise()
      .then(
        () => {
          this.close();
        },
        (err) => {
          console.log(err);
          alert('Ошибка сервера');
        }
      );
    console.log(this.book);
  }
  close() {
    this.dialog.close();
  }
}
