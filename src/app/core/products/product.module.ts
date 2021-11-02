import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/_services/auth-guard.service';
import { FilterComponent } from '../filter/filter.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductItemComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    FilterComponent,
  ],
  imports: [
    RouterModule.forChild([
        {path: '', children:[
            { path: 'listing', component: ProductListingComponent },
            { path: 'add', component: AddProductComponent,canActivate:[AuthGuardService] },
            { path: 'details/:id', component: ProductDetailsComponent},
            { path: 'edit/:id', component: AddProductComponent },
            // { path: ''}
        ]}
    ]),
    FormsModule,
    CommonModule
  ],
  exports: [],
})
export class ProductModule {}
