import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMAIL, PHONE } from '../contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  phone = PHONE;
  email = EMAIL;

  constructor(private router: Router) {
  }

  getYear(): number {
    return new Date().getFullYear();
  }

  openPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
