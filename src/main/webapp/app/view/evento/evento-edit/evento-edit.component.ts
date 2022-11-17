import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {StandardNgEditComponent} from "../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {LoadOptions} from "devextreme/data/load_options";
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {EventoConfig} from "../evento-config";
import {EventoService} from "../../../service/evento.service";
import {EnderecoService} from "../../../service/endereco.service";
import {ColandoService} from "../../../service/colando.service";
import {Evento} from "../../../domain/evento";
import {Colando} from "../../../domain/colando";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styles: [],
})
export class EventoEditComponent extends StandardNgEditComponent<Evento, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any

  config: StandardNgConfig = EventoConfig;

  enderecoDxSelectBoxEditorOptions = {
    valueExpr: 'id',
    displayExpr: 'label',
    searchEnabled: true,
    searchExpr: 'rua',
    dataSource: new DataSource({
      store: new CustomStore({
        key: 'id',
        byKey: (key: number) => this.enderecoService.findById(key).toPromise(),
        load: (options: LoadOptions) => this.enderecoService.findAll(options).toPromise()
      }),
      sort: [{selector: 'rua', desc: false}],
    })
  };

  colando: Colando[] | undefined = []

  colandoSelectedItemKeys: any = [];

  /**
   * DataSource que faz a busca de todos ou um objeto usando laodOptions.
   */
  colandoDataSource: DataSource = new DataSource({
    store: new CustomStore({
      key: 'id',
      byKey: (key: number) => this.colandoService.findById(key).toPromise(),
      load: options => this.colandoService.findAll(options).toPromise()
    })
  });

  constructor(
    injector: Injector,
    protected eventoService: EventoService,
    private enderecoService: EnderecoService,
    private colandoService: ColandoService,
  ) {
    super(injector, eventoService);
  }

  ngOnInit() {
    this.load(Evento);
  }

  override edit(id: number) {
    this.findById(id)
      .pipe(take(1))
      .subscribe(resource => {
        this.formData = resource;
        this.colandoSelectedItemKeys = resource.colandos?.map(colando => colando.id)
        this.colando = resource.colandos;

      });
  }

  /**
   * Método de atualização de valores no dropDown
   */
  onSelectionChangedColando(e: { addedItems: any[], removedItems: any[] }) {
    const colandos: Colando[] = this.formData.colandos;
    if (e.removedItems.length > 0)
      colandos.splice(colandos.findIndex((colando: Colando) => colando.id === e.removedItems[0].id), 1)
    else {
      if (e.addedItems.length == 1) {
       const index = colandos.findIndex((colando: Colando) => colando.id === e.addedItems[0].id);
       if (index == -1) colandos.push(e.addedItems[0]);
      } else this.formData.colandos;
    }
    this.colandoSelectedItemKeys = colandos.map(colando => colando.id)
    this.formData.colandos = colandos
  }

}
