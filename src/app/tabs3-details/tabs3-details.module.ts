import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tabs3DetailsPage } from './tabs3-details.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs3DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tabs3DetailsPage]
})
export class Tabs3DetailsPageModule {}
