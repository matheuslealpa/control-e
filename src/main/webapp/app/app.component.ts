import { Component, HostBinding } from '@angular/core';
import { ScreenService, AppInfoService } from './shared/services';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private keycloakService: KeycloakService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAuthenticated() {
    return this.keycloakService.isLoggedIn();
  }
}
