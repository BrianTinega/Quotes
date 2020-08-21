export class Quotes {
  showDetails:boolean
  constructor(public name:string,
    public quote:string,
    public submitDate:Date,){
      this.showDetails=false;

    }
}
