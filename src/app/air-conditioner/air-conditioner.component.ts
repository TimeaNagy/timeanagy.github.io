import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal/deal.component';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-air-conditioner',
  templateUrl: './air-conditioner.component.html'
})
export class AirConditionerComponent implements OnInit {
  deals: Deal[] = [];
  href = '';

  constructor(private httpClient: HttpClient, private router: Router) { 
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const index = val.url.indexOf('?');
        if (index > -1) {
          this.href = val.url.substring(0, val.url.indexOf('?'));
        } else {
          this.href = val.url;
        }

        this.href = this.href.replace('/', '');

        if (this.href) {
          this.httpClient.get(`assets/klimy/${this.href}.json`).subscribe(data => {
            this.deals = data as Deal[];
          })
        }

      }
    })
  }

  ngOnInit(): void {
    const el = document.getElementById('top');
    console.log(el)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
