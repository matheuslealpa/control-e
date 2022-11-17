import {StandardNgConfig} from "../../../@core/template/standard-ng-config";

export const CursoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/curso",
  onSuccessDelete: "Excluido com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Curso?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Cursos"
  },
  detailModule: {
    pageTitle: "Detalhes de Curso"
  },
  editModule: {
    editTitle: "Editar curso",
    createTitle: "Curso",
    onSuccessEditMessage: "Atualizado com sucesso.",
    onSuccessCreateMessage: "Atualizado com sucesso."
  }
}
