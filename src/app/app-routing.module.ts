import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReviewPage } from './pages/review/review.page';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'review', loadChildren: './pages/review/review.module#ReviewPageModule' },
  { path: 'edit', loadChildren: './pages/edit/edit.module#EditPageModule' },
  { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },
  { path: 'tacos', loadChildren: './pages/tacos/tacos.module#TacosPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'add-cerveza', loadChildren: './pages/add-cerveza/add-cerveza.module#AddCervezaPageModule' },
  { path: 'review-cerveza', loadChildren: './pages/review-cerveza/review-cerveza.module#ReviewCervezaPageModule' },
  { path: 'review-comida', loadChildren: './pages/review-comida/review-comida.module#ReviewComidaPageModule' },
  { path: 'resenias-comida', loadChildren: './pages/resenias-comida/resenias-comida.module#ReseniasComidaPageModule' },
  { path: 'add-comida', loadChildren: './pages/add-comida/add-comida.module#AddComidaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
