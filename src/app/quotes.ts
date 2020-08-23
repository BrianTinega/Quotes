export class Quotes {
  showDetails:boolean
  constructor(public name:string,
    public quote:string,
    public submitDate:Date,
    public like:number,
    public dislike:number,){
      this.showDetails=false;

    }
}
