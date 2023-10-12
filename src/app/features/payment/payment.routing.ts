import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyAuthorizedGuard } from '../../core/guards/only-authorized.guard';
import { PaymentAuditComponent } from './payment-audit/payment-audit.component';
import { PaymentImportComponent } from './payment-import/payment-import.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { ThemeModule } from 'src/app/assets/theme/theme.module';
import { lightTheme } from 'src/app/assets/theme/light-theme';
import { darkTheme } from 'src/app/assets/theme/dark-theme';

const routes: Routes = [
  {
    path: 'list',
    component: PaymentListComponent,
    canActivate: [OnlyAuthorizedGuard],
  },
  {
    path: 'audit',
    component: PaymentAuditComponent,
    canActivate: [OnlyAuthorizedGuard],
  },
  {
    path: 'import',
    component: PaymentImportComponent,
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
export class PaymentRouting {}
