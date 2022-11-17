import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {StandardNgService} from "../@core/template/standard-ng-service";
import {Page} from "../@core/types";
import {HttpParamsAdapter} from "../@core/types/http-params-adapter";
import {map} from "rxjs/operators";
import {LoadOptions} from "devextreme/data/load_options";
import {Evento} from "../domain/evento";


@Injectable({
providedIn: 'root'
})
export class EventoService extends StandardNgService {

    URL_API: string = `${environment.contextPath}/api/eventos`
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    public findColandoByIdEvento(idEvento: number, loadOptions: LoadOptions){
      const params = new HttpParamsAdapter(loadOptions).httpParams();
      return this.http.get<Page<Evento>>(`${this.URL_API}/${idEvento}/_colandos`, {params}).pipe(
        map((page: Page<Evento>) => ({
          data: page.content,
          totalCount: page.totalElements
        }))
      )
    }

}
