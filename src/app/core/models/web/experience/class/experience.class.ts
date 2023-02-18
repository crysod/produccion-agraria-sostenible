export class Experience {
  constructor(
      public _id:                string,
      public tituloExperiencia: string,
      public experiencia:       string,
      public restricciones:     string,
      public numeroDeCupos:     number,
      public valor:             string,
      public apertura:          string,
      public finalizacion:      string,
      public href:              Array<Object>
  ){
      this._id=_id,
      this.tituloExperiencia=tituloExperiencia,
      this.experiencia=experiencia,
      this.restricciones=restricciones,
      this.numeroDeCupos=numeroDeCupos,
      this.valor=valor,
      this.apertura=apertura,
      this.finalizacion=finalizacion,
      this.href=href
  }
}
