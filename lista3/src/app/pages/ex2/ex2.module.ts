import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Modal1Page } from '../modal1/modal1.page';

import { IonicModule } from '@ionic/angular';

import { Ex2Page } from './ex2.page';

const routes: Routes = [
  {
    path: '',
    component: Ex2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ex2Page],
  //entryComponents: [Modal1Page]
})
export class Ex2PageModule {}
