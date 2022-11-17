import {Component, Injector, OnInit} from '@angular/core';
import {StandardNgDetailComponent} from "../../../@core/template/standard-ng-detail-component";
import {EventoService} from "../../../service/evento.service";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {EventoConfig} from "../evento-config";

class EventoDetail {
  id?: number;
  nomeLocal?: string;
  dataEvento?: Date;
}

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
})
export class EventoDetailComponent extends StandardNgDetailComponent<EventoDetail, number> implements OnInit {

  config: StandardNgConfig = EventoConfig;

  constructor(
    injector: Injector,
    eventoService: EventoService) {
    super(injector, eventoService);
  }

  ngOnInit(): void {
    this.load();
  }

}
