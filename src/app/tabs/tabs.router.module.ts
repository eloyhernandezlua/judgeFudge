import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
<<<<<<< HEAD
import { ReviewPage } from '../pages/review/review.page';
=======
import {ReviewPage} from "../pages/review/review.page";
>>>>>>> 39b39fa5903b85930b0eeb33980bd47eb36a16e9

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
          },
          {
            path: ':idReview',
            component: ReviewPage
          }
        ]
      },
      {
        path:':idReview',
        component: ReviewPage
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
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