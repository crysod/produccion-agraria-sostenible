import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "../../../models/web/products/products";
import { URL_ADDRESS } from "../../../../global/endpoints";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  constructor(private Http:HttpClient) { }

  getProductFromSearcherWeb(query:string){
    return this.Http.get<Observable<Response[]>>(`${URL_ADDRESS}buscar?parametro=${query}`);
  }
}
