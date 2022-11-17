import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EventoListComponent} from './evento-list/evento-list.component';
import {EventoEditComponent} from "./evento-edit/evento-edit.component";
import {EventoDetailComponent} from './evento-detail/evento-detail.component';
import {EventoPageComponent} from "./evento-page.component";

const routes: Routes = [
  {
    path: '', component: EventoPageComponent, children: [
      {path: '', component: EventoListComponent},
      {
        path: 'edit', children: [
          {path: '', component: EventoEditComponent,},
          {path: ':id', component: EventoEditComponent,},
        ],
      },
      {path: ':id', component: EventoDetailComponent,},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EventoPageRoutingModule {
}
