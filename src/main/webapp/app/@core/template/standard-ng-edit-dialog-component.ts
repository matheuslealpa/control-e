import {EventEmitter, Injector, OnInit, Output, ViewChild} from "@angular/core";
import {Observable, of, Subscription} from "rxjs";
import {StandardNgService} from "./standard-ng-service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {StandardNgConfig} from "./standard-ng-config";
import {map, take} from "rxjs/operators";
import notify from "devextreme/ui/notify";
import {DxFormComponent} from "devextreme-angular/ui/form";

export abstract class StandardNgEditDialogComponent<T, ID>{

  abstract form: DxFormComponent;

  abstract onAfterSave?: any;

  controlVariable: boolean = false;

  visible = false;

  formData?: any;

  saveSub?: Subscription;

  abstract config: StandardNgConfig;

  private title: Title;

  private activatedRoute: ActivatedRoute;

  private router: Router;

  private location: Location;

  protected constructor(
    protected injector: Injector,
    private service: StandardNgService)
  {
    this.title = injector.get(Title);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.location = injector.get(Location);
  }

  protected load(type: (new () => T)) {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id && !isNaN(id)) {
      this.title.setTitle(<string>this.config.editModule?.editTitle);
      this.edit(id);
    } else {
      this.title.setTitle(<string>this.config.editModule?.createTitle);
      this.formData = new type();
    }
  }

  public notExistsEntityByNomeValidation = (params: any) => {
    if (params.value !== this.formData[params.formItem.dataField] || this.controlVariable === true) {
      this.controlVariable = true;
      return this.serverRequest(params.value);
    } else return new Promise((resolve) => resolve(true));
  };

  serverRequest(value: any): any {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(
            this.service.findByNome(value)
              .pipe(
                map((formData: any) => !formData.nome))
              .toPromise()
              .catch(err => of(true)));
        }, 400);
      }
    )
  }

  protected showDialog() {
    this.visible = true;
  }

  protected closeDialog() {
    this.visible = false;
  }

  public create() {
    this.title.setTitle(<string>this.config.editModule?.createTitle);
    this.formData = {};
    this.showDialog();
  }

  public edit(id: ID) {
    this.formData = {}
    this.controlVariable = false;
    this.title.setTitle(<string>this.config.editModule?.editTitle);
    this.service.findById(id)
      .pipe(take(1))
      .subscribe(entity => (this.formData = entity));
    this.showDialog();
  }

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
        .subscribe((resource:any) => {
          notify(
            message,
            'success',
            3000
          );
          this.closeDialog();
          this.onAfterSave.emit(resource);
        });
    }

  }

  protected save(): Observable<T | undefined> | undefined {
    return this.service.save(this.formData);
  }


}
