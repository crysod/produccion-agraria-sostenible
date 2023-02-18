import { createAction, props } from "@ngrx/store";

export const SetAll = createAction('[Catalogue] Obtener Todo',props<{ _id:string,name:string,description:string,status: Boolean,href:any }>())

