import { createReducer, on } from '@ngrx/store';
import { Products } from "../../../../core/models/web/products/class/product.class";
import * as Actions from "../products/products.actions";

export const initialState: Products[] = [];

const _productReducer = createReducer(
  initialState,
  on(Actions.SetAll, (state, {_id,catalogue,name,description,precio,existencias,foto,tituloReseña,reseña,href }) =>
                             [...state, new Products(_id,catalogue,name,description,precio,existencias,foto,tituloReseña,reseña,href)]),
  on(Actions.unsetNewProducts, (state, { products }) => {
       return products;
  })

);


export function productReducer(state: any, action: any) {
  return _productReducer(state, action)
}
