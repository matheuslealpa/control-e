import {NgModule} from '@angular/core';
import {ColandoListComponent} from './colando-list/colando-list.component';
import {ColandoEditComponent} from "./colando-edit/colando-edit.component";
import {ColandoDetailComponent} from './colando-detail/colando-detail.component';
import {ColandoPageRoutingModule} from "./colando-page-routing.module";
import {ColandoPageComponent} from "./colando-page.component";
import {SharedModule} from '../../@shared/shared.module';
import {DevExtremeModule} from "devextreme-angular";

@NgModule({
  declarations: [
    ColandoListComponent,
    ColandoEditComponent,
    ColandoDetailComponent,
    ColandoPageComponent,
  ],
    imports: [
        ColandoPageRoutingModule,
        SharedModule,
        DevExtremeModule,
    ],
})
export class ColandoPageModule {
}
