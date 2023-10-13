import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnlyAuthorizedGuard } from './core/guards/only-authorized.guard';
import { OnlyUnauthorizedGuard } from './core/guards/only-unauthorized.guard';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { UnauthorizedLayoutComponent } from './layouts/unauthorized/unauthorized-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [OnlyAuthorizedGuard],
    children: [
      {
        path: 'payment',
        loadChildren: () =>
          import('./features/payment/payment.module').then(
            (x) => x.PaymentModule
          ),
        canLoad: [OnlyAuthorizedGuard],
      },
      {
        path: 'general',
        loadChildren: () =>
          import('./features/general/general.module').then(
            (x) => x.GeneralModule
          ),
        canLoad: [OnlyAuthorizedGuard],
      },
    ],
  },
  {
    path: '',
    component: UnauthorizedLayoutComponent,
    canActivate: [OnlyUnauthorizedGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then((x) => x.AuthModule),
    canLoad: [OnlyUnauthorizedGuard],
  },
  {
    path: '**',
    redirectTo: '/general/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
