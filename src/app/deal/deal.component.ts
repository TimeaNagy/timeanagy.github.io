import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type Deal = {
  price: number,
  kw?: number, 
  name: string,
  oldPrice: number,
  id: number
}

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html'
})
export class DealComponent implements OnInit{
  deals: Deal[] = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("assets/deals/deals.json").subscribe(data =>{
      this.deals = data as Deal[];
    })
  }

}
