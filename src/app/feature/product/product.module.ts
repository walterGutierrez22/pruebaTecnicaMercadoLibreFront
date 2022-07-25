import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { FormatCurrencyPipe } from 'src/app/shared/pipe/format-currency.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FormatCurrencyPipe
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ],
  exports: [
    FormatCurrencyPipe
  ],
  providers: [DecimalPipe]
})
export class ProductModule { }
