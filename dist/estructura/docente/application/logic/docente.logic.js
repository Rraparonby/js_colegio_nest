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
exports.DocenteLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const docente_data_1 = require("../../infrastructure/data/docente.data");
let DocenteLogic = class DocenteLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(docente_datai1) {
        super();
        this.docente_datai1 = docente_datai1;
        this.docente1 = null;
        this.docentes = [];
        this.docente_datai1 = docente_datai1;
        this.docente1 = null;
        this.docentes = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.docentes = await this.docente_datai1.getTodos(pagination1, relations1);
            return this.docentes;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_docente1, pagination1, relations1) {
        try {
            this.docentes = await this.docente_datai1.getBuscar(builder_object_docente1, pagination1, relations1);
            return this.docentes;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_docente1, pagination1, relations1) {
        try {
            this.docentes = await this.docente_datai1.getBuscarGeneral(builder_object_docente1, pagination1, relations1);
            return this.docentes;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_docente1, relations1) {
        try {
            this.docente1 = await this.docente_datai1.getBuscarUno(builder_object_docente1, relations1);
            return this.docente1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(docente1) {
        try {
            this.result = await this.docente_datai1.nuevo(docente1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(docente1) {
        try {
            this.result = await this.docente_datai1.actualizar(docente1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.docente_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(docentes) {
        try {
            this.result = await this.docente_datai1.nuevos(docentes);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.docente_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_docentes, updates_columnas) {
        try {
            this.result = await this.docente_datai1.actualizars(updates_docentes, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jdocente1 = this.docente_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jdocente1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jdocente1 = this.docente_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jdocente1;
    }
};
DocenteLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [docente_data_1.DocenteData])
], DocenteLogic);
exports.DocenteLogic = DocenteLogic;
//# sourceMappingURL=docente.logic.js.map