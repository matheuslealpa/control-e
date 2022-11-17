import {confirm} from "devextreme/ui/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import notify from "devextreme/ui/notify";
import {Title} from "@angular/platform-browser";
import {StandardNgConfig} from "./standard-ng-config";
import {Injector} from "@angular/core";
import {StandardNgService} from "./standard-ng-service";

export abstract class StandardNgDetailComponent<T, ID> {

  resource$?: Observable<T>;

  pageTitle?: string

  abstract config: StandardNgConfig;

  private title: Title;

  private activatedRoute: ActivatedRoute;

  private router: Router;

  private location: Location;

  protected constructor(
    protected injector: Injector,
    private service: StandardNgService
  ) {
    this.title = injector.get(Title);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.location = injector.get(Location);
  }

  protected load() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.resource$ = this.findById(id);
    this.title.setTitle(<string>this.config.detailModule?.pageTitle);
    this.pageTitle = this.title.getTitle();
  }

  /**
   * Ação do botão voltar.
   */
  back() {
    this.location.back();
  }

  edit(id: number| undefined) {
    this.router.navigate([this.config.routePath, 'edit', id]);
  }

  confirmDelete(id: any) {
    if (this.config.confirmDeleteMessage) {
      confirm(
        this.config.confirmDeleteMessage,
        'Confirme a exclusão'
      ).then(result => {
        if (result) {
          this.delete(id)
            .pipe(take(1))
            .subscribe(() => {
              notify(
                this.config.onSuccessDelete,
                'success',
                3000
              );
              this.back();
            });
        }
      });
    }
  }

  protected findById(id: ID): Observable<T> {
    return this.service.findById(id);
  }

  protected delete(id: ID): Observable<void> {
    return this.service.delete(id);
  }

}

