import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public product: Products = new Products();

  constructor(
    public dialog: MatDialogRef<AddProductComponent>,
    public service: ProductsService
  ) {}

  ngOnInit(): void {}

  addProduct() {
    this.service.create(this.product).subscribe(
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
