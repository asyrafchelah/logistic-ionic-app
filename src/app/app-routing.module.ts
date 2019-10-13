import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cargo-form', loadChildren: './cargo-form/cargo-form.module#CargoFormPageModule' },
  { path: 'cargo-details-form', loadChildren: './cargo-details-form/cargo-details-form.module#CargoDetailsFormPageModule' },
  { path: 'shipping-form', loadChildren: './shipping-form/shipping-form.module#ShippingFormPageModule' },
  { path: 'view-order-form', loadChildren: './view-order-form/view-order-form.module#ViewOrderFormPageModule' },
  { path: 'schedule-form', loadChildren: './schedule-form/schedule-form.module#ScheduleFormPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
