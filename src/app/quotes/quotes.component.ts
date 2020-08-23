import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]= [
   new Quotes ('Brian','Carpe Diem',0,0, new Date (7,20,2020)),
  ]
  
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(index) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
   if (toDelete) {
    this.quotes.splice(index,1);
   }
  
  }
  upvote(index){
    this.quotes[index].like++
  }
  
  downvote(index){
    this.quotes[index].dislike++
  }
  addNewQuote(quote:any){
    this.quotes.push(quote)
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
