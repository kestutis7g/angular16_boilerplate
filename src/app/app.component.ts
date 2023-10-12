import { Component } from '@angular/core';
import { ThemeService } from './assets/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngBoilerplate';

  constructor(private themeService: ThemeService) {
    this.darkTheme = localStorage.getItem('dark') == 'true';
  }
  darkTheme: boolean;

  ngOnInit(): void {
    if (this.darkTheme) {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  toggleTheme() {
    if (!this.darkTheme) {
      this.themeService.setTheme('dark');
      this.darkTheme = true;
    } else {
      this.themeService.setTheme('light');
      this.darkTheme = false;
    }
    localStorage.setItem('dark', this.darkTheme.toString());
  }
}
