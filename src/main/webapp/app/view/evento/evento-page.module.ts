import {NgModule} from '@angular/core';
import {EventoListComponent} from './evento-list/evento-list.component';
import {EventoEditComponent} from "./evento-edit/evento-edit.component";
import {EventoDetailComponent} from './evento-detail/evento-detail.component';
import {EventoPageRoutingModule} from "./evento-page-routing.module";
import {EventoPageComponent} from "./evento-page.component";
import {SharedModule} from '../../@shared/shared.module';
import {DevExtremeModule, DxLoadIndicatorModule} from "devextreme-angular";
import { EventoGridComponent } from './evento-grid/evento-grid.component';

@NgModule({
  declarations: [
    EventoListComponent,
    EventoEditComponent,
    EventoDetailComponent,
    EventoPageComponent,
    EventoGridComponent,
  ],
    imports: [
        EventoPageRoutingModule,
        SharedModule,
        DxLoadIndicatorModule,
        DevExtremeModule,
    ],
})
export class EventoPageModule {
}
