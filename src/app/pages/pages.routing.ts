import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AcountSettingComponent } from './acount-setting/acount-setting.component';
import { PromesesComponent } from './promeses/promeses.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        children:[
        {path:'progress',component:ProgressComponent, data:{title: 'Progress'}},
        {path:'graphic1',component:Grafica1Component,data:{title: 'Graphic'}},
        {path:'account-settings',component:AcountSettingComponent,data:{title: 'Account Setting'}},
        {path:'promeses',component:PromesesComponent ,data:{title: 'Promeses'}},
        {path:'rxjs',component:RxjsComponent ,data:{title: 'RXJS'}},
        {path:'',component:DashboardComponent ,data:{title: 'Dashboard'}}

        ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
