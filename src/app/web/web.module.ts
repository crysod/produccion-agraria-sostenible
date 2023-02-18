import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { WebRoutingModule } from "./web-routing.module";
import { WebMainModule } from "./main/webMain-main.module";

// App
import { ContainerComponentStore } from './shop/container/container.component';
import { SectionOneComponent } from './shop/section-one/section-one.component';
import { MainStoreComponent } from './shop/main-store/main-store.component';
import { CardComponent } from './shop/card/card.component';
import { CatalogueComponent } from './shop/catalogue/catalogue.component';
import { ContainerCartComponent } from './cart/container/container-cart.component';
import { ItemComponent } from './cart/item/item.component';
import { ProductComponent } from './cart/product/product.component';
import { ContainerProductComponent } from './shop/products/container/container.component';
import { CardProductComponent } from './shop/products/card-product/card-product.component';
import { BreadcrumbComponent } from './shop/products/breadcrumb/breadcrumb.component';
import { ContainerExperienceComponent } from './shop/experience/container/container.component';
import { MainExperienceComponent } from './shop/experience/main-experience/main-experience.component';
import { SectionExperienceComponent } from './shop/experience/section-experience/section-experience.component';
import { CardExperienceComponent } from './shop/experience/card-experience/card-experience.component';
import { ContainerOneExperienceComponent } from './shop/one-experience/container/container.component';
import { BreadcrumbOneExperienceComponent } from './shop/one-experience/breadcrumb-one-experience/breadcrumb-one-experience.component';
import { ItemExperienceComponent } from './shop/one-experience/item-experience/item-experience.component';
import { SearcherComponent } from './shop/searcher/searcher.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContainerComponentStore,
    SectionOneComponent,
    MainStoreComponent,
    CardComponent,
    CatalogueComponent,
    ContainerCartComponent,
    ItemComponent,
    ProductComponent,
    ContainerProductComponent,
    CardProductComponent,
    BreadcrumbComponent,
    ContainerExperienceComponent,
    MainExperienceComponent,
    SectionExperienceComponent,
    CardExperienceComponent,
    ContainerOneExperienceComponent,
    BreadcrumbOneExperienceComponent,
    ItemExperienceComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    WebMainModule,
    ReactiveFormsModule
  ],
  exports:[
    ContainerComponentStore,
    SectionOneComponent,
    MainStoreComponent,
    CardComponent,
    CatalogueComponent,
    ContainerCartComponent,
    ItemComponent,
    ProductComponent,
    ContainerProductComponent,
    CardProductComponent,
    BreadcrumbComponent,
    ContainerExperienceComponent,
    MainExperienceComponent,
    SectionExperienceComponent,
    CardExperienceComponent,
    ContainerOneExperienceComponent,
    BreadcrumbOneExperienceComponent,
    ItemExperienceComponent,
    SearcherComponent
  ]
})
export class WebModule { }
