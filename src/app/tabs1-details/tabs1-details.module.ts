import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tabs1DetailsPage } from './tabs1-details.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs1DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tabs1DetailsPage]
})
export class Tabs1DetailsPageModule {}
