import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, EventEmitter, Injector, OnInit, Output, ViewChild} from '@angular/core';
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";
import {EnderecoConfig} from "../endereco-config";
import {EnderecoService} from "../../../../service/endereco.service";
import {StandardNgEditDialogComponent} from "../../../../@core/template/standard-ng-edit-dialog-component";
import {Endereco} from "../../../../domain/endereco";

@Component({
  selector: 'app-endereco-edit-dialog',
  templateUrl: './endereco-edit-dialog.component.html',
  styles: [],
})
export class EnderecoEditDialogComponent extends StandardNgEditDialogComponent<Endereco, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any;

  @Output()
  onAfterSave = new EventEmitter<Endereco>();

  config: StandardNgConfig = EnderecoConfig;

  /**
   * DataSource que faz a busca de todos ou um objeto usando laodOptions.
   */
  constructor(injector: Injector,
    protected enderecoService: EnderecoService)
  {
    super(injector, enderecoService);
  }

  ngOnInit() {
    this.load(Endereco);
  }

}
