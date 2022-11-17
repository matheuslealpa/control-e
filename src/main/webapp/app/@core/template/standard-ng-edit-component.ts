import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {DxFormComponent} from "devextreme-angular/ui/form";
import {Observable, Subscription} from "rxjs";
import {take} from "rxjs/operators";
import notify from "devextreme/ui/notify";
import {StandardNgConfig} from "./standard-ng-config";
import {Injector} from "@angular/core";
import {StandardNgService} from "./standard-ng-service";

export abstract class StandardNgEditComponent<T, ID> {

  abstract form: DxFormComponent;

  formData: any;

  saveSub?: Subscription;

  pageTitle?: string;

  abstract config: StandardNgConfig;

  private title: Title;

  activatedRoute: ActivatedRoute;

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

  protected load(type: (new () => T)) {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id && !isNaN(id)) {
      this.title.setTitle(<string>this.config.editModule?.editTitle);
      this.pageTitle = this.title.getTitle();
      this.edit(id);
    } else {
      this.title.setTitle(<string>this.config.editModule?.createTitle);
      this.pageTitle = this.title.getTitle();
      this.formData = new type();
    }
  }


  public edit(id: ID) {
    this.findById(id)
      .pipe(take(1))
      .subscribe(resource => this.formData = resource);
  }

  back = () => {
    this.location.back();
  };

  doSave(event: any) {
    event.preventDefault();
    const formData: any = this.formData;
    let message: string | undefined = "";

    if (formData['id'] == undefined) {
    } else {
     message= formData['id'] ? this.config.editModule?.onSuccessEditMessage : this.config.editModule?.onSuccessCreateMessage;
    }
    const save = this.save();
    if (save == undefined) {
    } else {
      this.saveSub = save
        .pipe(take(1))
        .subscribe(() => {
          notify(
            message,
            'success',
            3000
          );
          this.back();
        });
    }

  }

  // protected abstract create(): T ;

  // protected abstract save(): Observable<T>;
  //
  // protected abstract findById(id: ID): Observable<T>;
  protected findById(id: ID): Observable<T> {
    return this.service.findById(id);
  }

  protected save(): Observable<T | undefined> | undefined {
    return this.service.save(this.formData);
  }

}
