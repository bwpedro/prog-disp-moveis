import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Modal1Page } from '../modal1/modal1.page';

import { IonicModule } from '@ionic/angular';

import { Ex3Page } from './ex3.page';

const routes: Routes = [
  {
    path: '',
    component: Ex3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ex3Page],
  // entryComponents: [Modal1Page]
})
export class Ex3PageModule {}
