import { Component, OnInit } from '@angular/core';
import { OneExperienceService } from "../../../../core/services/web/one-experience/one-experience.service";
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-experience',
  templateUrl: './item-experience.component.html',
  styleUrls: ['./item-experience.component.css']
})
export class ItemExperienceComponent implements OnInit {

  public param!:any;
  public oneExperience!:any;
  constructor(public OneExperienceService:OneExperienceService,
              private _AcivateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this._AcivateRoute.snapshot.params;
    this.getOneExperienceFromApiWeb(this.param.id);
  }

  getOneExperienceFromApiWeb(id:any) {
    this.OneExperienceService.getOneExperienceFromWeb(id)
                          .subscribe({
                             next:(data:any)=>{
                                 this.oneExperience = data.response[0];
                             },
                             error:(error)=>{
                                console.log(error);
                             }
                          });
 }

 agendar(oneExperience:any){
  Swal.fire('Para agendar una experiencia debes tener una cuenta o estar logueado')

  const payload = {
    referenceClient:null,
    referenceExperiencia:oneExperience._id,
    asistentes:'',
    nota:'',
  }

  console.log(payload)
 }

}
