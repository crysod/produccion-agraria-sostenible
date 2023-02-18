import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

// Components
import { ContainerComponent } from "./main/container/container.component";
import { ContainerComponentStore } from "./shop/container/container.component";
import { ContainerCartComponent } from "./cart/container/container-cart.component";
import { ContainerProductComponent } from "./shop/products/container/container.component";
import { ContainerExperienceComponent } from "./shop/experience/container/container.component";
import { ContainerOneExperienceComponent } from "./shop/one-experience/container/container.component";


const routes: Routes = [
  {
    path:'index',
    component:ContainerComponent
  },{
    path:'store',
    component:ContainerComponentStore
  },{
    path:'cart',
    component:ContainerCartComponent
  },{
    path:'product/:id',
    component:ContainerProductComponent
  },{
    path:'experience',
    component:ContainerExperienceComponent
  },{
    path:'one-experience/:id',
    component:ContainerOneExperienceComponent
  }
];


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {}
