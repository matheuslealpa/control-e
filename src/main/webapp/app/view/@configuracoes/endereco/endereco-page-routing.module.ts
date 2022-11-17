import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EnderecoListComponent} from './endereco-list/endereco-list.component';
import {EnderecoEditDialogComponent} from "./endereco-edit-dialog/endereco-edit-dialog.component";
import {EnderecoDetailComponent} from './endereco-detail/endereco-detail.component';
import {EnderecoPageComponent} from "./endereco-page.component";

const routes: Routes = [
  {
    path: '', component: EnderecoPageComponent, children: [
      {path: '', component: EnderecoListComponent},
      {
        path: 'edit', children: [
          {path: '', component: EnderecoEditDialogComponent,},
          {path: ':id', component: EnderecoEditDialogComponent,},
        ],
      },
      {path: ':id', component: EnderecoDetailComponent,},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EnderecoPageRoutingModule {
}
