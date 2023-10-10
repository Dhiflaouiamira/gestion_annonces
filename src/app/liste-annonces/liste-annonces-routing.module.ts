import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAnnoncesPage } from './liste-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAnnoncesPageRoutingModule {}
