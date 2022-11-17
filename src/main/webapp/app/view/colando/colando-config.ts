import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const ColandoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/colando",
  onSuccessDelete: "Exclusão realizada com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o colando?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Colandos"
  },
  detailModule: {
    pageTitle: "Detalhes"
  },
  editModule: {
    editTitle: "Editar Colando",
    createTitle: "Cadastrar novo colando",
    onSuccessEditMessage: "Colando atualizado com sucesso.",
    onSuccessCreateMessage: "Colando atualizado com sucesso."
  }
}
