import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "../../../../models/web/products/products";
import { URL_ADDRESS } from "../../../../../global/endpoints";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueProductsService {

  constructor(private Http: HttpClient) { }

  getCatalogueFromWeb(id: string) {
    return this.Http.get<Observable<Response[]>>(`${URL_ADDRESS}ver-productos/${id}`);
  }
}
