import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthRouting } from './auth.routing';
import { ThemeModule } from 'src/app/assets/theme/theme.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRouting,
    TranslateModule,
    ThemeModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
