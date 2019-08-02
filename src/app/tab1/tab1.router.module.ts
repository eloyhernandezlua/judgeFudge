import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { ReviewPage } from '../pages/review/review.page';


const routes: Routes = [
    {
        path: '',
         component: Tab1Page,
          children: [
              {
                  path: 'review',
                  children: [
                      {
                          path: '',
                          loadChildren: '../pages/review/review.module#ReviewPageModule'
                      }],
              }

        ]
    },
    {
         path: ':PSID', component: ReviewPage
    }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class Tab1PageRoutingModule {}
