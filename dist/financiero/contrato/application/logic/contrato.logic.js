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
exports.ContratoLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const contrato_data_1 = require("../../infrastructure/data/contrato.data");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
let ContratoLogic = class ContratoLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(contrato_datai1) {
        super();
        this.contrato_datai1 = contrato_datai1;
        this.contrato1 = null;
        this.contratos = [];
        this.docentesFK = [];
        this.contrato_datai1 = contrato_datai1;
        this.contrato1 = null;
        this.contratos = new Array();
        this.docentesFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.contratos = await this.contrato_datai1.getTodos(pagination1, relations1);
            return this.contratos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_contrato1, pagination1, relations1) {
        try {
            this.contratos = await this.contrato_datai1.getBuscar(builder_object_contrato1, pagination1, relations1);
            return this.contratos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_contrato1, pagination1, relations1) {
        try {
            this.contratos = await this.contrato_datai1.getBuscarGeneral(builder_object_contrato1, pagination1, relations1);
            return this.contratos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_contrato1, relations1) {
        try {
            this.contrato1 = await this.contrato_datai1.getBuscarUno(builder_object_contrato1, relations1);
            return this.contrato1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(contrato1) {
        try {
            this.result = await this.contrato_datai1.nuevo(contrato1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(contrato1) {
        try {
            this.result = await this.contrato_datai1.actualizar(contrato1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.contrato_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(contratos) {
        try {
            this.result = await this.contrato_datai1.nuevos(contratos);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.contrato_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_contratos, updates_columnas) {
        try {
            this.result = await this.contrato_datai1.actualizars(updates_contratos, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jcontrato1 = this.contrato_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jcontrato1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jcontrato1 = this.contrato_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jcontrato1;
    }
    async getFks() {
        try {
            await this.contrato_datai1.getFks();
            this.docentesFK = this.contrato_datai1.docentesFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], ContratoLogic.prototype, "docenteLogic", void 0);
ContratoLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contrato_data_1.ContratoData])
], ContratoLogic);
exports.ContratoLogic = ContratoLogic;
//# sourceMappingURL=contrato.logic.js.map