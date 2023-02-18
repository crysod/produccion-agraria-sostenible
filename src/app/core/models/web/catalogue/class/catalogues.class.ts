export class Catalogue {
  public _id:string;
  public name:string;
  public description:string;
  public status: Boolean;
  public href:any;
  constructor(_id:string,
              name:string,
              description:string,
              status: Boolean,
              href:any ){
       this._id = _id,
       this.name = name;
       this.description = description;
       this.status = status;
       this.href = href;
  }
}
