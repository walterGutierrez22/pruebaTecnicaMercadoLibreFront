import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './feature/product/product.module';
import { SharedModule } from './feature/shared/shared.module';
import { ApiBaseService } from './services/api-base.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [ProductService, ApiBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
