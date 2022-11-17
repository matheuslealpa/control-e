import {Component, Injector, OnInit} from '@angular/core';
import {StandardNgDetailComponent} from "../../../@core/template/standard-ng-detail-component";
import {ColandoService} from "../../../service/colando.service";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {ColandoConfig} from "../colando-config";

class ColandoDetail {
  id?: number;
  matricula?: string;
  nome?: string;
  convidados?: string;
}

@Component({
  selector: 'app-colando-detail',
  templateUrl: './colando-detail.component.html',
})
export class ColandoDetailComponent extends StandardNgDetailComponent<ColandoDetail, number> implements OnInit {

  config: StandardNgConfig = ColandoConfig;

  constructor(
    injector: Injector,
    ColandoService: ColandoService) {
    super(injector, ColandoService);
  }

  ngOnInit(): void {
    this.load();
  }

}
