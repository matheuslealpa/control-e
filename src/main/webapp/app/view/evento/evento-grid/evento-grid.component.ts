import {AfterViewInit, Component, Input} from '@angular/core';
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";
import {Evento} from "../../../domain/evento";
import {EventoService} from "../../../service/evento.service";
import CustomStore from "devextreme/data/custom_store";
import {LoadOptions} from "devextreme/data/load_options";

@Component({
  selector: 'app-detail-grid',
  templateUrl: './evento-grid.component.html',
})
export class EventoGridComponent implements  AfterViewInit{

  @Input() key: any;

  dataSource: any = {};

  evento?: Evento[]



  constructor(private eventoService: EventoService) {}

  ngAfterViewInit(): void {
    this.dataSource = new DataSource({
      store: new CustomStore({
        key: 'id',
        load: (options: LoadOptions) => this.eventoService.findColandoByIdEvento(this.key,options).toPromise()
          .then((data: any) => ({
            data: data.data,
            totalCount: data.totalCount,
            summary: data.summary,
            groupCount: data.groupCount,
          }))
      })
    })
  }


}
