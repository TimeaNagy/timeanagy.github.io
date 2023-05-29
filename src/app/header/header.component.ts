import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public href: string = "";

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const index = val.url.indexOf('?');
        if (index > -1) {
          this.href = val.url.substring(0, val.url.indexOf('?'));
        } else {
          this.href = val.url;
        }
      }
    })
  }
}
