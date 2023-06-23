import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { CookieService } from '../cookie.service';
import { PHONE } from '../contact/contact.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Input() public currentLang = '';

  public href: string = "";
  toClose: boolean = false;

  phone = PHONE;

  constructor(private translate: TranslateService, private cookie: CookieService, private ccService: NgcCookieConsentService, private router: Router) {
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

  changeUsedLang(lang: string) {
    this.translate.use(lang);
    this.translate.currentLang = lang;
    this.currentLang = lang;

    if (this.cookie.getCookie('cookieconsent_status') === 'allow') {
      this.cookie.setCookie({
        name: 'language',
        value: lang,
        session: true
      })
    }

    this.translate
      .get(['cookieMessage', 'cookieAllow', 'cookieDeny', 'cookiePolicy'])
      .subscribe(data => {
        this.ccService.getConfig().content = this.ccService.getConfig().content || {};
        let content = this.ccService.getConfig().content
        if (content) {
          content.message = data['cookieMessage'];
          content.allow = data['cookieAllow'];
          content.deny = data['cookieDeny'];
          content.policy = data['cookiePolicy'];
        }

        this.ccService.destroy();
        this.ccService.init(this.ccService.getConfig());
      });
  }

  toggleNav() {
    this.toClose = !this.toClose;
  }

  returnHome() {
    this.router.navigate([`/`]);
  }

}
