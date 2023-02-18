import { ActionReducerMap } from "@ngrx/store";
import { catalogueReducer } from "./global/ngrx/web/catalogue/catalogue.reudecer";
import { Catalogue } from "./core/models/web/catalogue/class/catalogues.class";
import { Products } from "./core/models/web/products/class/product.class";
import { Experience } from "./core/models/web/experience/class/experience.class";
import { productReducer } from "./global/ngrx/web/products/products.reducer";
import { experienceReducer } from "./global/ngrx/web/experience/experience.reducer";



export interface AppState {
   catalogue:Catalogue[],
   product: Products[],
   experience:Experience[]
}

export const appReducer: ActionReducerMap<AppState> = {
   catalogue: catalogueReducer,
   product: productReducer,
   experience:experienceReducer
}
