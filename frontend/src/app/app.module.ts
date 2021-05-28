import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './book/content/content.component';
import { AddItemComponent } from './book/add-item/add-item.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/books.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditItemComponent } from './book/edit-item/edit-item.component';
import { ContentProductComponent } from './product/content-product/content-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AuthorListComponent } from './author-list/author-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddItemComponent,
    EditItemComponent,
    routingComponents,
    AddProductComponent,
    EditProductComponent,
    AuthorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
