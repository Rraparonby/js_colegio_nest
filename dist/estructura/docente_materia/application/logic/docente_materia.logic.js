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
exports.DocenteMateriaLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const docente_materia_data_1 = require("../../infrastructure/data/docente_materia.data");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
const materia_logic_1 = require("../../../../estructura/materia/application/logic/materia.logic");
let DocenteMateriaLogic = class DocenteMateriaLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(docente_materia_datai1) {
        super();
        this.docente_materia_datai1 = docente_materia_datai1;
        this.docente_materia1 = null;
        this.docente_materias = [];
        this.docentesFK = [];
        this.materiasFK = [];
        this.docente_materia_datai1 = docente_materia_datai1;
        this.docente_materia1 = null;
        this.docente_materias = new Array();
        this.docentesFK = new Array();
        this.materiasFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.docente_materias = await this.docente_materia_datai1.getTodos(pagination1, relations1);
            return this.docente_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_docente_materia1, pagination1, relations1) {
        try {
            this.docente_materias = await this.docente_materia_datai1.getBuscar(builder_object_docente_materia1, pagination1, relations1);
            return this.docente_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_docente_materia1, pagination1, relations1) {
        try {
            this.docente_materias = await this.docente_materia_datai1.getBuscarGeneral(builder_object_docente_materia1, pagination1, relations1);
            return this.docente_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_docente_materia1, relations1) {
        try {
            this.docente_materia1 = await this.docente_materia_datai1.getBuscarUno(builder_object_docente_materia1, relations1);
            return this.docente_materia1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(docente_materia1) {
        try {
            this.result = await this.docente_materia_datai1.nuevo(docente_materia1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(docente_materia1) {
        try {
            this.result = await this.docente_materia_datai1.actualizar(docente_materia1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.docente_materia_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(docente_materias) {
        try {
            this.result = await this.docente_materia_datai1.nuevos(docente_materias);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.docente_materia_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_docente_materias, updates_columnas) {
        try {
            this.result = await this.docente_materia_datai1.actualizars(updates_docente_materias, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jdocente_materia1 = this.docente_materia_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jdocente_materia1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jdocente_materia1 = this.docente_materia_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jdocente_materia1;
    }
    async getFks() {
        try {
            await this.docente_materia_datai1.getFks();
            this.docentesFK = this.docente_materia_datai1.docentesFK;
            this.materiasFK = this.docente_materia_datai1.materiasFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], DocenteMateriaLogic.prototype, "docenteLogic", void 0);
__decorate([
    (0, common_1.Inject)(materia_logic_1.MateriaLogic),
    __metadata("design:type", materia_logic_1.MateriaLogic)
], DocenteMateriaLogic.prototype, "materiaLogic", void 0);
DocenteMateriaLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [docente_materia_data_1.DocenteMateriaData])
], DocenteMateriaLogic);
exports.DocenteMateriaLogic = DocenteMateriaLogic;
//# sourceMappingURL=docente_materia.logic.js.map