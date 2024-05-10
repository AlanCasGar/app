import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'form-p',
    loadChildren: () => import('./forms/form-p/form-p.module').then( m => m.FormPPageModule)
  },
  {
    path: 'form-a',
    loadChildren: () => import('./forms/form-a/form-a.module').then( m => m.FormAPageModule)
  },
  {
    path: 'form-e',
    loadChildren: () => import('./forms/form-e/form-e.module').then( m => m.FormEPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
