import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { SearchResult } from 'src/app/interfaces/search-result';
import { ProductService } from 'src/app/services/product.service';
import { LimitSearch } from 'src/app/shared/enums/limit-search';
import { UrlSiteEnum } from 'src/app/shared/enums/url-site.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productResult?: SearchResult | null;
  public itemsProduct: Product[] | undefined;

  constructor(
      public productService: ProductService, 
      private router: Router, 
    ) {
    this.productService.result.subscribe((result)=>{
      this.productResult = result;
      if(this.productResult) {
        this.limitResult();
      }
      
    });
   }

  ngOnInit(): void {
    this.getProductByQuery();
  }

  async getProductByQuery(): Promise<void> {
    
    const queryStrings = window.location.search;
    const params = new URLSearchParams(queryStrings);
    const search = params.get('search');
    this.productService.getProductByQuery(search?.toString());
  }

  redirectProductDetail(id: string): void {
    this.router.navigateByUrl(UrlSiteEnum.productDetail.replace(":id",id))
  }

  limitResult() {
    this.itemsProduct = this.productResult?.items.slice(0, LimitSearch.LIMIT_SEARCH);
  }


}
