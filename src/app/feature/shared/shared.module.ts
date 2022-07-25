import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { ProductSearchBarComponent } from '../product/product-search-bar/product-search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    ProductSearchBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    BreadcrumbComponent,
    HeaderComponent,
    ProductSearchBarComponent
  ]
})
export class SharedModule { }
