import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

export class AppInfo {
  app!: { name: string };
  git!: { commit: { id: string } };
  build!: { version: string }
}

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  URL_API: string = `${environment.contextPath}/actuator/info`;

  constructor(private httpClient: HttpClient) {}

  public get currentYear() {
    return new Date().getFullYear();
  }

  public getAppInfo(): Observable<AppInfo> {
    return this.httpClient.get<AppInfo>(this.URL_API);
  }

  public get title() {
    return 'CTRL-E';
  }
}






