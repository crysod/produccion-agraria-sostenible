import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienceService } from "../../../../core/services/web/experience/experience.service";

// Ngrx
import { Store } from '@ngrx/store';
import { Experience } from '../../../../core/models/web/experience/class/experience.class';
import { AppState } from 'src/app/app.state';
import * as ExperienceActions from "../../../../global/ngrx/web/experience/experience.actions";

Store
@Component({
  selector: 'app-main-experience',
  templateUrl: './main-experience.component.html',
  styleUrls: ['./main-experience.component.css']
})
export class MainExperienceComponent implements OnInit, OnDestroy {

  public experience:Experience[] = []  ;
  constructor(private _ExperienceService:ExperienceService,
              private store:Store<AppState>) { }

  ngOnInit(): void {
     this.getFromServiceCatalogueWeb();
     this.getNgrxStoreCatalogue();
  }

  getFromServiceCatalogueWeb(){
       this._ExperienceService.getCatalogueFromWeb().subscribe({
        next: (data:any) => {
          if(this.experience.length > 0){
            return;
          }
          this.setNgrxStoreExperience(data.response);
        },
        error: (error) => {
          console.log(error)
        }
       })
  }

  setNgrxStoreExperience(data:Array<Object> | any){
    for (const iterator of data) {
     this.store.dispatch(ExperienceActions.SetAll(iterator))
    }
  }

  getNgrxStoreCatalogue(): any {
    return this.store.select('experience').subscribe(experience=>{this.experience = experience})
  }

  ngOnDestroy(): void {

  }

}
