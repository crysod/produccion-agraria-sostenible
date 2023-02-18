import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos de la App
import { Modules } from "./modules/modules.module";
import { WebModule } from "./web/web.module";
import { WebMainModule } from "./web/main/webMain-main.module";

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './app.state';
import { CatalogueProductsPipe } from './core/pipes/web/catalogue/catalogue-products.pipe';
import { SeacrhProdctsPipe } from './core/pipes/web/products/seacrh-prodcts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueProductsPipe,
    SeacrhProdctsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Modules,
    WebModule,
    WebMainModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
