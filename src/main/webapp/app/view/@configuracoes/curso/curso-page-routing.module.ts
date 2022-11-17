import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CursoListComponent} from './curso-list/curso-list.component';
import {CursoEditDialogComponent} from "./curso-edit-dialog/curso-edit-dialog.component";
import {CursoDetailComponent} from './curso-detail/curso-detail.component';
import {CursoPageComponent} from "./curso-page.component";

const routes: Routes = [
  {
    path: '', component: CursoPageComponent, children: [
      {path: '', component: CursoListComponent},
      {
        path: 'edit', children: [
          {path: '', component: CursoEditDialogComponent,},
          {path: ':id', component: CursoEditDialogComponent,},
        ],
      },
      {path: ':id', component: CursoDetailComponent,},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CursoPageRoutingModule {
}
