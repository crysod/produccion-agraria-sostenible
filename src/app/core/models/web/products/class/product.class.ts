export class Products {
  constructor(
    public _id: string,
    public catalogue:string,
    public name: string,
    public description: string,
    public precio: string,
    public existencias: number,
    public foto: string,
    public tituloReseña: string,
    public reseña: string,
    public href: Array<Object>,
  ) {
      this._id = _id,
      this.catalogue = catalogue
      this.name = name,
      this.description = description,
      this.precio = precio,
      this.existencias = existencias,
      this.foto = foto,
      this.tituloReseña = tituloReseña,
      this.reseña = reseña,
      this.href = href
  }
}
