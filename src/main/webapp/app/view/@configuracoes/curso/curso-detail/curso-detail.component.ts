import {Component, Injector, OnInit} from '@angular/core';
import {StandardNgDetailComponent} from "../../../../@core/template/standard-ng-detail-component";
import {CursoService} from "../../../../service/curso.service";
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";
import {CursoConfig} from "../curso-config";

class CursoDetail {
  id?: number;
  nome?: string;
}

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
})
export class CursoDetailComponent extends StandardNgDetailComponent<CursoDetail, number> implements OnInit {

  config: StandardNgConfig = CursoConfig;

  constructor(
    injector: Injector,
    CursoService: CursoService) {
    super(injector, CursoService);
  }

  ngOnInit(): void {
    this.load();
  }

}
