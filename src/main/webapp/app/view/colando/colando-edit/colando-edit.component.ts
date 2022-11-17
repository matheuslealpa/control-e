import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {StandardNgEditComponent} from "../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {LoadOptions} from "devextreme/data/load_options";
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {ColandoConfig} from "../colando-config";
import {ColandoService} from "../../../service/colando.service";
import {CursoService} from "../../../service/curso.service";
import {Colando} from "../../../domain/colando";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-formData-edit',
  templateUrl: './colando-edit.component.html',
  styles: [],
})
export class ColandoEditComponent extends StandardNgEditComponent<Colando, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any

  convidadoOptions: any[] = [] ;

  addConvidadoButtonOptions: any = {
    icon: 'add',
    text: 'adicionar convidado',
    onClick: () => {
      if (this.formData.convidados == undefined) {
        this.formData.convidados = [];
      }
      this.formData.convidados.push(null);
      this.convidadoOptions = this.getConvidadoOptions(this.formData.convidados);
    },
  };

  config: StandardNgConfig = ColandoConfig;

  cursoDxSelectBoxEditorOptions = {
    valueExpr: 'id',
    displayExpr: 'nome',
    searchEnabled: true,
    searchExpr: 'nome',
    dataSource: new DataSource({
      store: new CustomStore({
        key: 'id',
        byKey: (key: number) => this.cursoService.findById(key).toPromise(),
        load: (options: LoadOptions) => this.cursoService.findAll(options).toPromise()
      }),
      sort: [{selector: 'nome', desc: false}],
    })
  };

  constructor(
    injector: Injector,
    protected colandoService: ColandoService,
    private cursoService: CursoService,
  ) {
    super(injector, colandoService);
  }

  ngOnInit() {
    this.load(Colando);
  }

  override edit(id: number) {
    this.findById(id)
      .pipe(take(1))
      .subscribe(resource => {
        this.formData = resource;
        this.convidadoOptions = this.getConvidadoOptions(this.formData.convidados);
      });
  }

  getConvidadoOptions(convidados: any[]) {
    const options = [];
    for (let i = 0; i < convidados?.length; i++) {
      options.push(this.generateNewConvidadoOptions(i));
    }
    return options;
  }

  generateNewConvidadoOptions(index: number) {
    return {
      buttons: [{
        name: 'trash',
        location: 'after',
        options: {
          stylingMode: 'text',
          icon: 'trash',
          onClick: () => {
            this.formData?.convidados.splice(index, 1);
            this.convidadoOptions = this.getConvidadoOptions(this.formData?.convidados);
          },
        },
      }],
    };
  }

}
