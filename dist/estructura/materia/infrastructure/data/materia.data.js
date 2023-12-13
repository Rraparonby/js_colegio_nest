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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const materia_1 = require("../../domain/model/materia");
let MateriaData = class MateriaData {
    constructor(materia_data1) {
        this.materia1 = null;
        this.materias = [];
        this.materia_data1 = materia_data1;
        this.materia1 = null;
        this.materias = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.materia_data1.findAndCount(params);
            this.materias = this.getEntitiesFromModels(result);
            return this.materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_materia1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.materia_data1.find(params);
            this.materias = this.getEntitiesFromModels(this.result);
            return this.materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_materia1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.materia_data1.find(params);
            this.materias = this.getEntitiesFromModels(this.result);
            return this.materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_materia1, relations1) {
        try {
            const params = {
                where: builder_object_materia1,
                relations: relations1
            };
            this.result = await this.materia_data1.find(params);
            this.materia1 = this.getEntityFromModel(this.result);
            return this.materia1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(materia1) {
        try {
            let materiaModel2 = this.getModelFromEntity(materia1);
            this.result = await this.materia_data1.save(materiaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(materia1) {
        try {
            let materiaModel2 = this.getModelFromEntity(materia1);
            this.result = await this.materia_data1.update(materia1.id, materiaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.materia_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(materias) {
        try {
            let materiaModels2 = this.getModelsFromEntities(materias);
            this.result = await this.materia_data1.save(materiaModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.materia_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_materias, updates_columnas) {
        try {
            let updates_materiaModels2 = this.getModelsFromEntities(updates_materias);
            for (let materiaModel2 of updates_materiaModels2) {
                this.result = await this.materia_data1.update(materiaModel2.id, materiaModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let materias = new Array();
        let materia1 = new materia_1.Materia();
        for (let row of result) {
            materia1 = new materia_1.Materia();
            materia1 = Object.assign({}, row);
            materias.push(materia1);
        }
        return materias;
    }
    getEntityFromModel(result) {
        let materia1 = new materia_1.Materia();
        for (let row of result) {
            materia1 = Object.assign({}, row);
            break;
        }
        return materia1;
    }
    getModelsFromEntities(materias) {
        let materiaModels = new Array();
        let materiaModel2 = new materia_1.Materia();
        for (let materia2 of materias) {
            materiaModel2 = this.getModelFromEntity(materia2);
            materiaModels.push(materiaModel2);
        }
        return materiaModels;
    }
    getModelFromEntity(materia1) {
        let materiaModel2 = new materia_1.Materia();
        materiaModel2.id = materia1.id;
        materiaModel2.created_at = materia1.created_at;
        materiaModel2.updated_at = materia1.updated_at;
        materiaModel2.codigo = materia1.codigo;
        materiaModel2.nombre = materia1.nombre;
        materiaModel2.activo = materia1.activo;
        return materiaModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jmateria1 = {};
        jmateria1 = {
            id: id
        };
        return jmateria1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jmateria1 = {};
        jmateria1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            activo: req.body.activo,
        };
        return jmateria1;
    }
};
MateriaData.TITULO = "Materia";
MateriaData.MODULO = "estructura";
MateriaData.TABLA = "materia";
MateriaData.PATH_PAGINA = "estructura/materia_view";
MateriaData.PATH_PAGINA_FORM = "estructura/materia_form_view";
MateriaData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(materia_1.Materia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MateriaData);
exports.MateriaData = MateriaData;
//# sourceMappingURL=materia.data.js.map