import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { ThemeService } from 'src/app/assets/theme/theme.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styles: [
    '.reference-check-button { position: absolute;  margin-top: -29px;  right: 25px; opacity: 0.5; }',
  ],
})
export class PaymentListComponent {
  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService,
    private authService: AuthService,
    private appComponent: AppComponent
  ) {
    this.darkTheme = localStorage.getItem('dark') == 'true';
    this.language = localStorage.getItem('language') ?? 'lt';
  }
  darkTheme: boolean;
  language: string;

  toggleTheme() {
    this.appComponent.toggleTheme();
  }

  toggleLanguage() {
    this.language = this.language === 'lt' ? 'en' : 'lt';
    this.translateService.use(this.language);
    localStorage.setItem('language', this.language);
  }

  signOut() {
    this.authService.signOut();
  }
}
