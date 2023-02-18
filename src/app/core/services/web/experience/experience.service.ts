import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL_ADDRESS } from "../../../../global/endpoints";
import { Response } from '../../../models/web/experience/experience';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(public Http:HttpClient) { }

  getCatalogueFromWeb(){
    return this.Http.get<Observable<Response[]>>(`${URL_ADDRESS}ver-experiencias`);
  }
}
