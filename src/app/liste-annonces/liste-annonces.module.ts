import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAnnoncesPageRoutingModule } from './liste-annonces-routing.module';

import { ListeAnnoncesPage } from './liste-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAnnoncesPageRoutingModule
  ],
  declarations: [ListeAnnoncesPage]
})
export class ListeAnnoncesPageModule {}
