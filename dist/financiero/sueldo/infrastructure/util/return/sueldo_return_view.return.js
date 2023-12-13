"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SueldoReturnView = void 0;
const sueldo_1 = require("../../../domain/model/sueldo");
const tipo_accion_enum_1 = require("../../../../../base/util/tipo_accion_enum");
class SueldoReturnView {
    constructor() {
        this.title = '';
        this.sueldo1 = new sueldo_1.Sueldo();
        this.sueldos = new Array();
        this.action = '';
        this.action_title = '';
    }
    setReturnView(tipo_accion_enum1, sueldo1, sueldos) {
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
        this.title = pre_titulo + " Sueldo " + post_titulo;
        this.sueldos = sueldos;
        this.sueldo1 = sueldo1;
        this.action = action_form;
        this.action_title = post_titulo;
    }
}
exports.SueldoReturnView = SueldoReturnView;
//# sourceMappingURL=sueldo_return_view.return.js.map