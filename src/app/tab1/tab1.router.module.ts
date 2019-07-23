import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewPageModule } from '../pages/review/review.module';
import { ReviewPage } from '../pages/review/review.page';
import { Tab1Page } from '../tab1/tab1.page';


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
                    loadChildren: '../review/review.module#ReviewPageModule'
                      }]
              }

        ]
    }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class Tab1PageRoutingModule {}
