import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { Book } from '../../Books';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { BooksService } from '../../services/books.service';
import { AuthorListComponent } from 'src/app/author-list/author-list.component';
import { AuthorsService } from 'src/app/services/authors.service';
import { Author } from 'src/app/Author';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  books: Book[] = [];
  authors: Author[] = [];
  constructor(
    public dialog: MatDialog,
    public service: BooksService,
    public authorService: AuthorsService
  ) {}
  ngOnInit(): void {
    this.newBook();
  }
  async newBook() {
    await this.getAuthor();
    // await this.refresh();
  }

  getAuthor() {
    this.authorService
      .getAll()
      .toPromise()
      .then(
        (data: any) => {
          this.authors = data;
          this.refresh();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  refresh() {
    this.service
      .getAll()
      .toPromise()
      .then(
        (data: any) => {
          this.books = data.map((book: Book) => ({
            ...book,
            author: `${
              this.authors.find((author) => author.authorId === book.authorId)
                ?.firstName
            }
            ${
              this.authors.find((author) => author.authorId === book.authorId)
                ?.lastName
            }`,
          }));
        },
        (error) => {
          console.log(error);
        }
      );
  }
  editBook(books: any) {
    const dialogRef = this.dialog.open(EditItemComponent, {
      data: books,
    });
    return dialogRef.afterClosed();
  }
  addBook() {
    const dialog = this.dialog.open(AddItemComponent);
    dialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.refresh();
      });
  }
  deleteBook(bookId: any) {
    this.service
      .delete(bookId)
      .toPromise()
      .then((response) => {
        this.books = this.books.filter((b) => b.bookId !== bookId);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
