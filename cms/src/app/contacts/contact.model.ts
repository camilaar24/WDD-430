export class Contact {
  public id: string;
  public _id: string;
  constructor (
    public name: string,
    public email: string,
    public phone: string,
    public imageUrl: string,
    public group?: Contact[]
  ) { }
}