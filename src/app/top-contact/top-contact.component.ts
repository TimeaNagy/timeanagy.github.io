import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EMAIL, PHONE } from '../contact/contact.component';

@Component({
  selector: 'app-top-contact',
  templateUrl: './top-contact.component.html'
})
export class TopContactComponent {

  public href: string = "";
  phone = PHONE;
  email = EMAIL;

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

  goBack() {
    this.router.navigate(['/']);
  }

}
