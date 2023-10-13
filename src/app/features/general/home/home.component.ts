import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../layouts/main/main-layout.component.scss'],
})
export class HomeComponent {
  constructor(private translateService: TranslateService) {
    // Nothing
  }
}
