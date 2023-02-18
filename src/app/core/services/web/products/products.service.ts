import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "../../../models/web/products/products";
import { URL_ADDRESS } from "../../../../global/endpoints";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private Http:HttpClient) { }

  getProductFromWeb(){
    return this.Http.get<Observable<Response[]>>(`${URL_ADDRESS}todos-productos`);
  }

}
