import { createAction, props } from "@ngrx/store";

export const SetAll = createAction(
  '[Experience] Obtener Todo',
  props<{
    _id: string
    tituloExperiencia: string
    experiencia: string
    restricciones: string
    numeroDeCupos: number
    valor: string
    apertura: string
    finalizacion: string
    href: Array<Object>
  }>()
)

