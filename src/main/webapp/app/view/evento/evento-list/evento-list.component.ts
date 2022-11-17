import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular/ui/data-grid';
import {EventoService} from "../../../service/evento.service";
import {StandardNgListComponent} from "../../../@core/template/standard-ng-list-component";
import {EventoConfig} from "../evento-config";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {Evento} from "../../../domain/evento";

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
})
export class EventoListComponent extends StandardNgListComponent<Evento, number> implements OnInit {

  @ViewChild(DxDataGridComponent, {static: true})
  dataGrid: any;

  evento?: Evento[];

  config: StandardNgConfig = EventoConfig;

  constructor(
    injector: Injector,
    protected eventoService: EventoService,
  ) {
    super(injector, eventoService);
  }

  ngOnInit(): void {
    this.load()
  }

  customizeText(cellInfo: any) {
    return cellInfo.value == true ? 'Sim' : 'Não';
}


}
