import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AcountSettingComponent } from './acount-setting/acount-setting.component';

const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        children:[
        {path:'progress',component:ProgressComponent},
        {path:'graphic1',component:Grafica1Component},
        {path:'account-settings',component:AcountSettingComponent},
        {path:'',component:DashboardComponent}

        ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
