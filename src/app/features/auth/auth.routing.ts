import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyUnauthorizedGuard } from '../../core/guards/only-unauthorized.guard';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from 'src/app/assets/theme/theme.module';
import { lightTheme } from 'src/app/assets/theme/light-theme';
import { darkTheme } from 'src/app/assets/theme/dark-theme';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [OnlyUnauthorizedGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
  ],
  exports: [RouterModule],
})
export class AuthRouting {}
