import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },
  {
    path: 'details-annonce',
    loadChildren: () => import('./details-annonce/details-annonce.module').then( m => m.DetailsAnnoncePageModule)
  },
  {
    path: 'update-annonce',
    loadChildren: () => import('./update-annonce/update-annonce.module').then( m => m.UpdateAnnoncePageModule)
  },
  {
    path: 'liste-annonces',
    loadChildren: () => import('./liste-annonces/liste-annonces.module').then( m => m.ListeAnnoncesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
