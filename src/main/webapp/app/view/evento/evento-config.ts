import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const EventoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/evento",
  onSuccessDelete: "Deletado com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Evento?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Eventos"
  },
  detailModule: {
    pageTitle: "Detalhes do Evento"
  },
  editModule: {
    editTitle: "Edição",
    createTitle: "CADASTRAR EVENTO",
    onSuccessEditMessage: "Atualizado com sucesso.",
    onSuccessCreateMessage: "Atualizado com sucesso."
  }
}
