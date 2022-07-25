import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public itemProduct: Product | undefined;

  constructor(public productService: ProductService, 
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductById();
  }

  async getProductById(): Promise<void> {
    const id = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(id?.toString()).then(result=>{
      this.itemProduct = result?.item;
    })
  }

}
