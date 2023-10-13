import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyAuthorizedGuard } from '../../core/guards/only-authorized.guard';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from 'src/app/assets/theme/theme.module';
import { lightTheme } from 'src/app/assets/theme/light-theme';
import { darkTheme } from 'src/app/assets/theme/dark-theme';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [OnlyAuthorizedGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [OnlyAuthorizedGuard],
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
  providers: [],
})
export class GeneralRouting {}
