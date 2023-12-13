"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaReturnView = void 0;
const nota_1 = require("../../../domain/model/nota");
const tipo_accion_enum_1 = require("../../../../../base/util/tipo_accion_enum");
class NotaReturnView {
    constructor() {
        this.title = '';
        this.nota1 = new nota_1.Nota();
        this.notas = new Array();
        this.action = '';
        this.action_title = '';
    }
    setReturnView(tipo_accion_enum1, nota1, notas) {
        let pre_titulo = "Datos";
        let post_titulo = "Ejecutada";
        let action_form = "";
        switch (tipo_accion_enum1) {
            case tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR: {
                pre_titulo = "Datos";
                post_titulo = "Seleccionar";
                break;
            }
            case tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS: {
                pre_titulo = "Datos";
                post_titulo = "Buscar_Todos";
                break;
            }
            case tipo_accion_enum_1.TipoAccionEnum.BUSCAR: {
                pre_titulo = "Datos";
                post_titulo = "Buscar";
                break;
            }
            case tipo_accion_enum_1.TipoAccionEnum.NUEVO: {
                pre_titulo = "";
                post_titulo = "Nuevo";
                action_form = "nuevo";
                break;
            }
            case tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR: {
                pre_titulo = "";
                post_titulo = "Actualizar";
                action_form = "actualizar";
                break;
            }
            case tipo_accion_enum_1.TipoAccionEnum.ELIMINAR: {
                pre_titulo = "";
                post_titulo = "Eliminar";
                action_form = "eliminar";
                break;
            }
            case tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS: {
                pre_titulo = "";
                post_titulo = "Guardar Cambios";
                action_form = "guardar_cambios";
                break;
            }
            default: {
                break;
            }
        }
        this.title = pre_titulo + " Nota " + post_titulo;
        this.notas = notas;
        this.nota1 = nota1;
        this.action = action_form;
        this.action_title = post_titulo;
    }
}
exports.NotaReturnView = NotaReturnView;
//# sourceMappingURL=nota_return_view.return.js.map