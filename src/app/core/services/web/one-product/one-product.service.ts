import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_ADDRESS } from "../../../../global/endpoints";
import { Observable } from 'rxjs';
import { Response } from "../../../models/web/one-product/one-product";

HttpClient
@Injectable({
  providedIn: 'root'
})
export class OneProductService {

  constructor(private Http:HttpClient) { }

  getOneProductFromWeb(id:string){
    return this.Http.get<Observable<Response[]>>(`${URL_ADDRESS}ver-producto/${id}`);
  }
}
