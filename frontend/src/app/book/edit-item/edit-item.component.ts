import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../Books';
import { BooksService } from '../../services/books.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentComponent } from '../content/content.component';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<EditItemComponent>,
    public service: BooksService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  editBook() {
    this.service
      .update(
        {
          bookName: this.data.bookName,
          bookAuthor: this.data.bookAuthor,
          price: this.data.price,
          id: this.data.id,
        },
        this.data.id
      )
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
  }
  close() {
    this.dialog.close();
  }
}
