import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // My default route
];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
