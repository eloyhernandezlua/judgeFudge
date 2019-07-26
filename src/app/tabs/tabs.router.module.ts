import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ReviewPage } from '../pages/review/review.page';
import { ReviewCervezaPage } from '../pages/review-cerveza/review-cerveza.page';
import { ReviewComidaPage } from '../pages/review-comida/review-comida.page';
import { ReseniasComidaPage } from '../pages/resenias-comida/resenias-comida.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
          ,{
            path: ':idReview',
            component: ReviewPage
          }
        ]
      }
      ,
      //{
        //path:':idReview',
       // component: ReviewPage
      //},
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          },
          {
            path: ':nombre',
            component: ReseniasComidaPage,
            
        },
                  {
                    path: ':nombre/:foodId',
                    component: ReviewComidaPage
                  }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          },
          {
            path: ':cervezaid',
            component: ReviewCervezaPage
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}