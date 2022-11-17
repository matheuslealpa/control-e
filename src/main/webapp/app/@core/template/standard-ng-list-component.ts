import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {confirm} from "devextreme/ui/dialog";
import DataSource from "devextreme/data/data_source";
import {take} from "rxjs/operators";
import notify from "devextreme/ui/notify";
import {DxDataGridComponent} from "devextreme-angular/ui/data-grid";
import {StandardNgConfig} from "./standard-ng-config";
import {Injector} from "@angular/core";
import {StandardNgService} from "./standard-ng-service";
import CustomStore from "devextreme/data/custom_store";
import {LoadOptions} from "devextreme/data/load_options";

export abstract class StandardNgListComponent<T, ID> {

  readonly abstract dataGrid: DxDataGridComponent;

  dataSource: DataSource = new DataSource({}) ;

  protected clearFilterButton: any;

  pageTitle?: string

  // Quantidade de recursos totais sem paginação na base de dados (levando em consideração a filtragem aplicada a lista)
  totalResources: number | undefined = 0;

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
    this.title.setTitle(<string>this.config.listModule?.pageTitle);
    this.pageTitle = this.title.getTitle();
    this.dataSource = this.prepareDataSource();
    this.dataSource.on({
      'changed': () => {
        this.totalResources = this.dataSource?.totalCount();
      }
    });
  }

  /**
   *
   */
  create() {
    this.router.navigate([this.config.routePath, 'edit']);
  }

  /**
   *
   * @param id
   */
  edit(id: number) {
    this.router.navigate([this.config.routePath, 'edit', id]);
  }

  /**
   *
   * @param id
   */
  detail(id: number) {
    this.router.navigate([this.config.routePath, id]);
  }

  async onContentReady() {
    this.clearFilterButton.option('visible', this.hasFilter());
  }

  private hasFilter(): boolean {
    return (
      this.dataSource?.isLoaded() &&
      this.dataGrid.instance.getCombinedFilter() &&
      this.dataGrid.instance.getCombinedFilter().length > 0
    );
  }

  protected clearFilterDataGrid() {
    this.dataGrid.instance.clearFilter('header');
    this.dataGrid.instance.clearFilter('row');
    this.dataGrid.instance.clearFilter('search');
  }

  confirmDelete(id: ID) {
    if (this.config.confirmDeleteMessage != null) {
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
              this.dataGrid.instance.refresh();
            });
        }
      });
    }
  }

  onToolbarPreparing(toolbar: any) {
    toolbar.items.unshift(
      {
        location: 'before',
        widget: 'dxButton',
        options: {
          text: 'Novo',
          stylingMode: 'contained',
          type: 'success',
          onClick: this.create.bind(this),
          onInitialized: (args: any) => {
            // this.permissionService.guard('pessoa:can-create')
            //   .subscribe(response => args.component.option('visible', response));
            args.component.option('visible', !this.config.isReadOnly);
          },
        },
      },
      this.prepareToolbar(),
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          text: 'Limpar Filtro',
          hint: 'Limpar Filtro',
          stylingMode: 'contained',
          elementAttr: {style: 'background-color: #EF6C00; color: white;'},
          visible: false,
          onClick: this.clearFilterDataGrid.bind(this),
          onInitialized: (args: any) => {
            this.clearFilterButton = args.component;
          },
        },
      }
    );
  }

  /**
   * Inicialização do DataSource do DataGrid.
   *
   * @see https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/Angular/MaterialBlueLight/
   * @see https://js.devexpress.com/Documentation/20_2/ApiReference/Data_Layer/CustomStore/
   *
   */
  protected prepareDataSource(): DataSource {
    return new DataSource({
      store: new CustomStore({
        key: this.config.idAttribute,
        load: (options: LoadOptions) => this.service.findAll<T>(options).toPromise(),
      }),
      //sort: [{selector: 'nome', desc: false}]
    });
  }

  protected delete(id: ID): Observable<void> {
    return this.service.delete(id);
  }

  protected prepareToolbar(): Record<string, any> {
    return {};
  }
}
