import {Observable, throwError} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {LoadOptions} from "devextreme/data/load_options";
import {HttpParamsAdapter} from "../types/http-params-adapter";
import {Page} from "../types";
import {catchError, map} from "rxjs/operators";

export abstract class StandardNgService {

  abstract URL_API: string;

  protected constructor(protected http: HttpClient) {
  }

  public findAll<T>(loadOptions: LoadOptions): Observable<any> {
    const params = new HttpParamsAdapter(loadOptions).httpParams();
    return this.http.get<Page<T>>(this.URL_API, {params})
      .pipe(
        map((page: Page<T>) => ({
          data: page.content,
          totalCount: page.totalElements
        })),
        catchError(error => {
          return throwError(new Error(error.message))
        })
      )
  }

  public findById<T, ID>(id: ID): Observable<T>{
    return this.http.get<T>(`${this.URL_API}/${id}`);
  }

  public save<T>(resource: any): Observable<T>{
    return resource.id
      ? this.update(resource.id, resource)
      : this.insert(resource);
  }

  public insert<T>(resource: T): Observable<T> {
    return this.http.post<T>(this.URL_API, resource);
  }

  public update<T, ID>(id: ID, resource: T): Observable<T> {
    return this.http.put<T>(`${this.URL_API}/${id}`, resource);
  }

  public patch<ID>(id: ID, resourceValues: any) {
    return this.http.patch(`${this.URL_API}/${id}`, resourceValues);
  }

  public delete<ID>(id: ID): Observable<void> {
    return this.http.delete<void>(`${this.URL_API}/${id}`);
  }

  public findByNome<T>(nome: String): Observable<T> {
    const params = new HttpParams()
      .set('nome', `${nome}`)
    return this.http.get<T>(`${this.URL_API}/find-by-nome`, {params: params});
  }

}
