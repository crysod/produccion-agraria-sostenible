import { createReducer, on } from '@ngrx/store';
import { Experience } from "../../../../core/models/web/experience/class/experience.class";
import * as Actions from "../experience/experience.actions";

export const initialState: Experience[] = [];

const _experienceReducer = createReducer(
  initialState,
  on(Actions.SetAll, (state, {

    _id,
    tituloExperiencia,
    experiencia,
    restricciones,
    numeroDeCupos,
    valor,
    apertura,
    finalizacion,
    href, }) => [...state, new Experience(
      _id,
      tituloExperiencia,
      experiencia,
      restricciones,
      numeroDeCupos,
      valor,
      apertura,
      finalizacion,
      href,)])
);


export function experienceReducer(state: any, action: any) {
  return _experienceReducer(state, action)
}
