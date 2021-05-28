import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Products } from 'src/app/Products';
import { ProductsService } from 'src/app/services/products.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-content-product',
  templateUrl: './content-product.component.html',
  styleUrls: ['./content-product.component.css'],
})
export class ContentProductComponent implements OnInit {
  products: Products[] = [];
  constructor(public dialog: MatDialog, public service: ProductsService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.service
      .getAll()
      .toPromise()
      .then(
        (data: any) => {
          this.products = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  editProduct(product: any) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: product,
    });
    return dialogRef.afterClosed();
  }
  addProduct() {
    const dialog = this.dialog.open(AddProductComponent);
    dialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.refresh();
      });
  }
  deleteProduct(productId: any) {
    this.service
      .delete(productId)
      .toPromise()
      .then((response) => {
        this.products = this.products.filter((b) => b.id !== productId);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
