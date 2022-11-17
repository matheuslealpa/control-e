import {NgModule} from '@angular/core';
import {EnderecoListComponent} from './endereco-list/endereco-list.component';
import {EnderecoEditDialogComponent} from "./endereco-edit-dialog/endereco-edit-dialog.component";
import {EnderecoDetailComponent} from './endereco-detail/endereco-detail.component';
import {EnderecoPageRoutingModule} from "./endereco-page-routing.module";
import {EnderecoPageComponent} from "./endereco-page.component";
import {SharedModule} from '../../../@shared/shared.module';
import {DevExtremeModule} from "devextreme-angular";

@NgModule({
  declarations: [
    EnderecoListComponent,
    EnderecoEditDialogComponent,
    EnderecoDetailComponent,
    EnderecoPageComponent,
  ],
  imports: [
    EnderecoPageRoutingModule,
    SharedModule,
    DevExtremeModule,
  ],
})
export class EnderecoPageModule {
}
