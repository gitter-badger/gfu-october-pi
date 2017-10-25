import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { DetailGuard } from './shared/detail.guard';

const routes: Routes = [
  {
    path: 'leds',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: ':index',
        component: DetailComponent,
        canActivate: [
          DetailGuard
        ],
        canDeactivate: [
          DetailGuard
        ],
        resolve: {
          led: DetailGuard
        }
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'leds'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DetailGuard
  ]
})
export class AppRoutingModule { }
