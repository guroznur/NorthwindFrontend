import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44339/api/";

  constructor(private httpclient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this. apiUrl + "products/getall"
   return this.httpclient.get<ListResponseModel<Product>>(newPath);
    
    }

  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this. apiUrl + "products/getbycategory?categoryId="+categoryId
      return this.httpclient.get<ListResponseModel<Product>>(newPath);
       
       }

  }

