import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<EditProductComponent>,
    public service: ProductsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  editProduct() {
    this.service
      .update(
        {
          productName: this.data.productName,
          quantity: this.data.quantity,
          price: this.data.price,
          id: this.data.id,
          total: this.data.price * this.data.quantity,
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
