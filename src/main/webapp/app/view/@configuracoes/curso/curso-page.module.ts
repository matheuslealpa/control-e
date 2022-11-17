import {NgModule} from '@angular/core';
import {CursoListComponent} from './curso-list/curso-list.component';
import {CursoEditDialogComponent} from "./curso-edit-dialog/curso-edit-dialog.component";
import {CursoDetailComponent} from './curso-detail/curso-detail.component';
import {CursoPageRoutingModule} from "./curso-page-routing.module";
import {CursoPageComponent} from "./curso-page.component";
import {SharedModule} from '../../../@shared/shared.module';
import {DevExtremeModule} from "devextreme-angular";

@NgModule({
  declarations: [
    CursoListComponent,
    CursoEditDialogComponent,
    CursoDetailComponent,
    CursoPageComponent,
  ],
  imports: [
    CursoPageRoutingModule,
    SharedModule,
    DevExtremeModule,
  ],
})
export class CursoPageModule {
}
