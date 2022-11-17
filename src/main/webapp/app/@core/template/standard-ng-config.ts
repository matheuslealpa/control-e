export class StandardNgConfig {
  idAttribute?: string;
  onSuccessDelete?: string;
  confirmDeleteMessage?: string;
  routePath?: string;
  isReadOnly?: boolean = false;
  listModule?: {
    pageTitle?: string
  };
  detailModule?: {
    pageTitle?: string
  }
  editModule?: {
    createTitle?: string,
    editTitle?: string,
    onSuccessEditMessage?: string,
    onSuccessCreateMessage?: string
  };
}
