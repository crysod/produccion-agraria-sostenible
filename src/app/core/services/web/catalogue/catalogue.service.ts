import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL_ADDRESS } from "../../../../global/endpoints";
import { Response } from "../../../models/web/catalogue/catalogue";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private Http:HttpClient) { }

  getCatalogueFromWeb(){
      return this.Http.get<Observable<Response[]>>(`${URL_ADDRESS}ver-productos`);
  }
}
