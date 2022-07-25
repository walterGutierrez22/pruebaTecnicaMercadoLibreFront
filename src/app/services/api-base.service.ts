import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiBaseService {
  constructor(private http: HttpClient) {}

  async get(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }
  
}