import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxRadioGroupModule} from 'devextreme-angular/ui/radio-group';
import {DxLoadPanelModule} from 'devextreme-angular/ui/load-panel';
import {DxDataGridModule} from 'devextreme-angular/ui/data-grid';
import {
    DxCheckBoxModule,
    DxPopupModule,
    DxDropDownBoxModule,
    DxListModule
} from "devextreme-angular";
import {DxTagBoxModule} from 'devextreme-angular/ui/tag-box';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {DxFormModule} from 'devextreme-angular/ui/form';


const ANGULAR_MODULES = [
    CommonModule
]

const DEVEXTREME_MODULES = [
    DxDropDownBoxModule,
    DxRadioGroupModule,
    DxLoadPanelModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxTagBoxModule,
    DxPopupModule,
    DxFormModule,
    DxListModule,
]

@NgModule({
    imports: [
        DEVEXTREME_MODULES,
        ANGULAR_MODULES
    ],
    exports: [
        DEVEXTREME_MODULES,
        ANGULAR_MODULES,
    ]
})
export class SharedModule {
}
