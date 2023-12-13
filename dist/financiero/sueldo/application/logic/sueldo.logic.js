"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SueldoLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const sueldo_data_1 = require("../../infrastructure/data/sueldo.data");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
let SueldoLogic = class SueldoLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(sueldo_datai1) {
        super();
        this.sueldo_datai1 = sueldo_datai1;
        this.sueldo1 = null;
        this.sueldos = [];
        this.docentesFK = [];
        this.sueldo_datai1 = sueldo_datai1;
        this.sueldo1 = null;
        this.sueldos = new Array();
        this.docentesFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.sueldos = await this.sueldo_datai1.getTodos(pagination1, relations1);
            return this.sueldos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_sueldo1, pagination1, relations1) {
        try {
            this.sueldos = await this.sueldo_datai1.getBuscar(builder_object_sueldo1, pagination1, relations1);
            return this.sueldos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_sueldo1, pagination1, relations1) {
        try {
            this.sueldos = await this.sueldo_datai1.getBuscarGeneral(builder_object_sueldo1, pagination1, relations1);
            return this.sueldos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_sueldo1, relations1) {
        try {
            this.sueldo1 = await this.sueldo_datai1.getBuscarUno(builder_object_sueldo1, relations1);
            return this.sueldo1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(sueldo1) {
        try {
            this.result = await this.sueldo_datai1.nuevo(sueldo1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(sueldo1) {
        try {
            this.result = await this.sueldo_datai1.actualizar(sueldo1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.sueldo_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(sueldos) {
        try {
            this.result = await this.sueldo_datai1.nuevos(sueldos);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.sueldo_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_sueldos, updates_columnas) {
        try {
            this.result = await this.sueldo_datai1.actualizars(updates_sueldos, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jsueldo1 = this.sueldo_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jsueldo1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jsueldo1 = this.sueldo_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jsueldo1;
    }
    async getFks() {
        try {
            await this.sueldo_datai1.getFks();
            this.docentesFK = this.sueldo_datai1.docentesFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], SueldoLogic.prototype, "docenteLogic", void 0);
SueldoLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sueldo_data_1.SueldoData])
], SueldoLogic);
exports.SueldoLogic = SueldoLogic;
//# sourceMappingURL=sueldo.logic.js.map