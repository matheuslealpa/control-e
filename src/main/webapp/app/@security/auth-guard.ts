import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected override readonly router: Router,
              protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
    }

    // Obtenha as funções necessárias da rota.
    const requiredRoles = route.data["roles"];

    // Permita que o usuário continue se nenhuma função adicional for necessária para acessar a rota.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Permita que o usuário continue se todas as funções necessárias estiverem presentes.
    return requiredRoles.every((role) => this.roles.includes(role));
  }

}
