import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular/ui/data-grid';
import {CursoService} from "../../../../service/curso.service";
import {StandardNgListComponent} from "../../../../@core/template/standard-ng-list-component";
import {CursoConfig} from "../curso-config";
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";
import {CursoEditDialogComponent} from "../curso-edit-dialog/curso-edit-dialog.component";
import {Curso} from "../../../../domain/curso";

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
})
export class CursoListComponent extends StandardNgListComponent<Curso, number> implements OnInit {

  @ViewChild(DxDataGridComponent, {static: true})
  dataGrid: any;

  @ViewChild('cursoEditDialogComponent')
  cursoEditDialogComponent!: CursoEditDialogComponent;

  config: StandardNgConfig = CursoConfig;

  constructor(
    injector: Injector,
    protected cursoService: CursoService,
  ) {
    super(injector, cursoService);
  }

  ngOnInit(): void {
    this.load()
  }

  onSaveCurso(event: any) {
    this.dataSource.reload();
  }

  override create() {
    this.cursoEditDialogComponent.create();
  }

  override edit(id: number) {
    this.cursoEditDialogComponent.edit(id);
  }

  /**
   * Recebe a informação da coluna e envia status como  Inconsistênte ou Efetivado ou Não Efetivado.
   * @param cellInfo
   */
  customizeText(cellInfo: any) {
    return cellInfo.value == true ? 'Sim' : 'Não';
  }


}
