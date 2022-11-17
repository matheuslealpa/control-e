import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, EventEmitter, Injector, OnInit, Output, ViewChild} from '@angular/core';
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";
import {CursoConfig} from "../curso-config";
import {CursoService} from "../../../../service/curso.service";
import {Curso} from "../../../../domain/curso";
import {StandardNgEditDialogComponent} from "../../../../@core/template/standard-ng-edit-dialog-component";

@Component({
  selector: 'app-curso-edit-dialog',
  templateUrl: './curso-edit-dialog.component.html',
  styles: [],
})
export class CursoEditDialogComponent extends StandardNgEditDialogComponent<Curso, number> implements OnInit{

  @ViewChild(DxFormComponent, {static: true})
  form: any;

  @Output()
  onAfterSave = new EventEmitter<Curso>();

  config: StandardNgConfig = CursoConfig;

  /**
  * DataSource que faz a busca de todos ou um objeto usando laodOptions.
  */
  constructor(injector: Injector,
              protected cursoService: CursoService)
  {
    super(injector, cursoService);
  }

  ngOnInit(): void {
    this.load(Curso)
  }

}
