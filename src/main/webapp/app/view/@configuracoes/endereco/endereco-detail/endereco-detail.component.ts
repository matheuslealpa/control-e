import {Component, Injector, OnInit} from '@angular/core';
import {StandardNgDetailComponent} from "../../../../@core/template/standard-ng-detail-component";
import {EnderecoService} from "../../../../service/endereco.service";
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";
import {EnderecoConfig} from "../endereco-config";

class EnderecoDetail {
  id?: number;
  rua?: string;
  numero?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
}

@Component({
  selector: 'app-endereco-detail',
  templateUrl: './endereco-detail.component.html',
})
export class EnderecoDetailComponent extends StandardNgDetailComponent<EnderecoDetail, number> implements OnInit {

  config: StandardNgConfig = EnderecoConfig;

  constructor(
    injector: Injector,
    EnderecoService: EnderecoService) {
    super(injector, EnderecoService);
  }

  ngOnInit(): void {
    this.load();
  }

}
