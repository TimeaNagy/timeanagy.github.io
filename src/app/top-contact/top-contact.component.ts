import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-contact',
  templateUrl: './top-contact.component.html'
})
export class TopContactComponent {

  public href: string = "";

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.href = val.url.substring(0, val.url.indexOf('?'));
      }
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
