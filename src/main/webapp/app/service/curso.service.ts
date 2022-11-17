import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StandardNgService} from "../@core/template/standard-ng-service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CursoService extends StandardNgService{

  URL_API: string = `${environment.contextPath}/api/cursos`
  constructor(private httpClient:HttpClient) {
    super(httpClient)
  }

}

