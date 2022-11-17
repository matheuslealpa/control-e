import {StandardNgConfig} from "../../../@core/template/standard-ng-config";

export const EnderecoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/endereco",
  onSuccessDelete: "Exclusão de Endereco realizada com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Endereco?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Endereços"
  },
  detailModule: {
    pageTitle: "Detalhes de Endereco"
  },
  editModule: {
    editTitle: "Endereço",
    createTitle: "Endereço",
    onSuccessEditMessage: "Atualizado com sucesso.",
    onSuccessCreateMessage: "Atualizado com sucesso."
  }
}
