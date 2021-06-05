import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponceModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44314/api/products/getall";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponceModel>{

    return this.httpClient.get<ProductResponceModel>(this.apiUrl);
  }

}
