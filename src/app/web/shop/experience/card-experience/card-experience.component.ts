import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../../../core/models/web/experience/class/experience.class';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css']
})
export class CardExperienceComponent implements OnInit {

  @Input() public experience:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
