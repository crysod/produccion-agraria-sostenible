import { createReducer, on } from '@ngrx/store';
import { Catalogue } from "../../../../core/models/web/catalogue/class/catalogues.class";
import * as Actions from "./catalogue.actions";

export const initialState: Catalogue[] = [];

const _catalogueReducer = createReducer(
  initialState,
  on(Actions.SetAll,(state,{_id,name,description,status,href}) => [...state, new Catalogue(_id,name,description,status,href)]),
);


export function catalogueReducer(state: any, action: any) {
  return _catalogueReducer(state, action)
}
