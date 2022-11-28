
export class Message {
  public id: string;
  public _id: string;
    constructor(
      public subject: string,
      public msgText: string,
      public sender: string
    ) {}
  }