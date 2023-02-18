import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/core/models/web/products/class/product.class";


export const SetAll = createAction(
  '[Products] Obtener Todo',
  props<{_id: string,catalogue:string,name: string,description: string,precio: string,existencias: number,foto: string,tituloReseña: string,reseña: string,href: Array<Object>,}>())
  export const setNewProducts = createAction(
   '[Set-newProducts] Producto Buscado',
   props<{ _id: string,catalogue:string,name: string,description: string,precio: string,existencias: number,foto: string,tituloReseña: string,reseña: string,href: Array<Object>,}>());

export const unsetNewProducts = createAction(
  '[unset-newProducts] Vaciando Productos',
   props<{products:[]}>())
