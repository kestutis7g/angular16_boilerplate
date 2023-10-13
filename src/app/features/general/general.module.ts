import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from 'src/app/assets/theme/theme.module';
import { SettingsComponent } from './settings/settings.component';
import { GeneralRouting } from './general.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, SettingsComponent],
  imports: [
    CommonModule,
    GeneralRouting,
    SharedModule,
    TranslateModule,
    ThemeModule,
    ReactiveFormsModule,
  ],
})
export class GeneralModule {}
