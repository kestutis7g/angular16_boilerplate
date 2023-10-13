import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../../../layouts/main/main-layout.component.scss'],
})
export class SettingsComponent {
  constructor(private translateService: TranslateService) {
    // Nothing
  }
}
