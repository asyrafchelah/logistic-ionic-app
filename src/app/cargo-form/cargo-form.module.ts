import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargoFormPage } from './cargo-form.page';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


const routes: Routes = [
  {
    path: '',
    component: CargoFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [CargoFormPage]
})
export class CargoFormPageModule {}
