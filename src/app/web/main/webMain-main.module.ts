import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { WebRoutingModule } from "./web-routing.module";
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { FooterComponent } from './footer/footer.component';
//import { SectionFuorComponent } from './section-fuor/section-fuor.component';
import { SectionFourComponent } from './section-four/section-four.component';

@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    FooterComponent,
    //SectionFuorComponent,
    SectionFourComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  exports:[
    ContainerComponent,
    NavbarComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    //SectionFuorComponent,
    FooterComponent,
    FooterComponent,
    SectionFourComponent
  ]

})
export class WebMainModule { }
