import { Injectable } from '@angular/core';
import { SearchResult } from '../interfaces/search-result';
import { ApiBaseService } from './api-base.service';
import { BehaviorSubject } from 'rxjs';
import { staticContent } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public readonly result = new BehaviorSubject<SearchResult | null>(null);

  constructor(private apiBaseService: ApiBaseService) { }

  async getProductByQuery(query: string | undefined): Promise<any> {
    const url = staticContent.backendUrlApi.BaseUrl + 
      staticContent.backendUrlApi.ProductByQuery 
      + query;
    this.apiBaseService.get(url).then(response => {
      this.result.next(response);
    });
  }

  async getProductById(id: string | undefined): Promise<any> {
    const url = staticContent.backendUrlApi.BaseUrl + 
      staticContent.backendUrlApi.ProductById.replace("id", id);
    return this.apiBaseService.get(url);
  }
  
}
