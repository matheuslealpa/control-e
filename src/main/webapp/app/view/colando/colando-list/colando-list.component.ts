import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular/ui/data-grid';
import {ColandoService} from "../../../service/colando.service";
import {StandardNgListComponent} from "../../../@core/template/standard-ng-list-component";
import {ColandoConfig} from "../colando-config";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";

class ColandoView {
  id?: number;
  matricula?: string;
  nome?: string;
  convidados?: string;
}

@Component({
  selector: 'app-colando-list',
  templateUrl: './colando-list.component.html',
})
export class ColandoListComponent extends StandardNgListComponent<ColandoView, number> implements OnInit {

  @ViewChild(DxDataGridComponent, {static: true})
  dataGrid: any;

  config: StandardNgConfig = ColandoConfig;

  constructor(
    injector: Injector,
    protected ColandoService: ColandoService,
  ) {
    super(injector, ColandoService);
  }

  ngOnInit(): void {
    this.load()
  }

  /**
  * Recebe a informação da coluna e envia status como  Inconsistênte ou Efetivado ou Não Efetivado.
  * @param cellInfo
  */
  customizeText(cellInfo: any) {
    return cellInfo.value == true ? 'Sim' : 'Não';
}


}
