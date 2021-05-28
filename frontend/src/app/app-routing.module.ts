import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { ContentComponent } from './book/content/content.component';
import { ContentProductComponent } from './product/content-product/content-product.component';

const routes: Routes = [
  { path: 'books', component: ContentComponent },
  { path: 'products', component: ContentProductComponent },
  { path: 'authors', component: AuthorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ContentComponent, ContentProductComponent];
