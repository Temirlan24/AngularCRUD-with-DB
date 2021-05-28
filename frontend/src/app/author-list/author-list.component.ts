import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Author } from '../Author';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  constructor(public dialog: MatDialog, public service: AuthorsService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.service
      .getAll()
      .toPromise()
      .then(
        (data: any) => {
          this.authors = data;
          console.log(this.authors);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
