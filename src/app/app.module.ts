import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
// import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
// import { ProductItemComponent } from './core/products/product-item/product-item.component';
// import { FilterComponent } from './core/filter/filter.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
// import { AddProductComponent } from './core/products/add-product/add-product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
// import { ProductDetailsComponent } from './core/products/product-details/product-details.component';
import { FormsModule, NgForm } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyInterseptorService } from './_services/my-interseptor.service';
// import { Router } from '@angular/router';
// import { ProductListingComponent } from './core/products/product-listing/product-listing.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ProductListingComponent,
    // ProductItemComponent,
    // FilterComponent,
    DropDownComponent,
    // AddProductComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    // ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterseptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
