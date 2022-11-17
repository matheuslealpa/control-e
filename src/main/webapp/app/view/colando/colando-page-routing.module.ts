import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ColandoListComponent} from './colando-list/colando-list.component';
import {ColandoEditComponent} from "./colando-edit/colando-edit.component";
import {ColandoDetailComponent} from './colando-detail/colando-detail.component';
import {ColandoPageComponent} from "./colando-page.component";

const routes: Routes = [
  {
    path: '', component: ColandoPageComponent, children: [
      {path: '', component: ColandoListComponent},
      {
        path: 'edit', children: [
          {path: '', component: ColandoEditComponent,},
          {path: ':id', component: ColandoEditComponent,},
        ],
      },
      {path: ':id', component: ColandoDetailComponent,},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ColandoPageRoutingModule {
}
