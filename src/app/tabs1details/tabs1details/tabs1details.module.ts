import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tabs1detailsPage } from './tabs1details.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs1detailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tabs1detailsPage]
})
export class Tabs1detailsPageModule {}
