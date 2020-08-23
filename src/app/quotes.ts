export class Quotes {
  highlightQuotes:boolean;
  showDetails:boolean
  constructor(public name:string,
    public quote:string,
    public like:number,
    public dislike:number,
    public submitDate:Date,){
      this.showDetails=false;
      this.highlightQuotes=false;

    }
}
