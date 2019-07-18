import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'review', loadChildren: './pages/review/review.module#ReviewPageModule' },
  { path: 'edit', loadChildren: './pages/edit/edit.module#EditPageModule' },
  { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },
  { path: 'tacos', loadChildren: './pages/tacos/tacos.module#TacosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
