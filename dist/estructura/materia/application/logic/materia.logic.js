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
exports.MateriaLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const materia_data_1 = require("../../infrastructure/data/materia.data");
let MateriaLogic = class MateriaLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(materia_datai1) {
        super();
        this.materia_datai1 = materia_datai1;
        this.materia1 = null;
        this.materias = [];
        this.materia_datai1 = materia_datai1;
        this.materia1 = null;
        this.materias = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.materias = await this.materia_datai1.getTodos(pagination1, relations1);
            return this.materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_materia1, pagination1, relations1) {
        try {
            this.materias = await this.materia_datai1.getBuscar(builder_object_materia1, pagination1, relations1);
            return this.materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_materia1, pagination1, relations1) {
        try {
            this.materias = await this.materia_datai1.getBuscarGeneral(builder_object_materia1, pagination1, relations1);
            return this.materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_materia1, relations1) {
        try {
            this.materia1 = await this.materia_datai1.getBuscarUno(builder_object_materia1, relations1);
            return this.materia1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(materia1) {
        try {
            this.result = await this.materia_datai1.nuevo(materia1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(materia1) {
        try {
            this.result = await this.materia_datai1.actualizar(materia1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.materia_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(materias) {
        try {
            this.result = await this.materia_datai1.nuevos(materias);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.materia_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_materias, updates_columnas) {
        try {
            this.result = await this.materia_datai1.actualizars(updates_materias, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jmateria1 = this.materia_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jmateria1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jmateria1 = this.materia_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jmateria1;
    }
};
MateriaLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [materia_data_1.MateriaData])
], MateriaLogic);
exports.MateriaLogic = MateriaLogic;
//# sourceMappingURL=materia.logic.js.map