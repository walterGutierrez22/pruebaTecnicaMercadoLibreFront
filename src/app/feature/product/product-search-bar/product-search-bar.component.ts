import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UrlSiteEnum } from 'src/app/shared/enums/url-site.enum';

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.scss']
})
export class ProductSearchBarComponent implements OnInit {
  public searchValue: string | null | undefined;

  constructor(
    private router: Router, 
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.setSearchValue();
  }

  setSearchValue() : void {
    const queryStrings = window.location.search;
    const params = new URLSearchParams(queryStrings);
    this.searchValue = params.get('search')?.toString();
  }

  async searchProduct(): Promise<void> {
    this.productService.getProductByQuery(this.searchValue?.toString());
    this.redirectToListProduct();
  }

  redirectToListProduct() : void {
    this.router.navigateByUrl(
      `/${ UrlSiteEnum.resultSearch }?search=${ this.searchValue }`);
  }

}
