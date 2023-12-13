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
exports.DocenteMateriaData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const docente_materia_1 = require("../../domain/model/docente_materia");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
const materia_logic_1 = require("../../../../estructura/materia/application/logic/materia.logic");
let DocenteMateriaData = class DocenteMateriaData {
    constructor(docente_materia_data1) {
        this.docente_materia1 = null;
        this.docente_materias = [];
        this.docentesFK = [];
        this.materiasFK = [];
        this.docente_materia_data1 = docente_materia_data1;
        this.docente_materia1 = null;
        this.docente_materias = new Array();
        this.docentesFK = new Array();
        this.materiasFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.docente_materia_data1.findAndCount(params);
            this.docente_materias = this.getEntitiesFromModels(result);
            return this.docente_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_docente_materia1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.docente_materia_data1.find(params);
            this.docente_materias = this.getEntitiesFromModels(this.result);
            return this.docente_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_docente_materia1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.docente_materia_data1.find(params);
            this.docente_materias = this.getEntitiesFromModels(this.result);
            return this.docente_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_docente_materia1, relations1) {
        try {
            const params = {
                where: builder_object_docente_materia1,
                relations: relations1
            };
            this.result = await this.docente_materia_data1.find(params);
            this.docente_materia1 = this.getEntityFromModel(this.result);
            return this.docente_materia1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(docente_materia1) {
        try {
            let docente_materiaModel2 = this.getModelFromEntity(docente_materia1);
            this.result = await this.docente_materia_data1.save(docente_materiaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(docente_materia1) {
        try {
            let docente_materiaModel2 = this.getModelFromEntity(docente_materia1);
            this.result = await this.docente_materia_data1.update(docente_materia1.id, docente_materiaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.docente_materia_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(docente_materias) {
        try {
            let docente_materiaModels2 = this.getModelsFromEntities(docente_materias);
            this.result = await this.docente_materia_data1.save(docente_materiaModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.docente_materia_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_docente_materias, updates_columnas) {
        try {
            let updates_docente_materiaModels2 = this.getModelsFromEntities(updates_docente_materias);
            for (let docente_materiaModel2 of updates_docente_materiaModels2) {
                this.result = await this.docente_materia_data1.update(docente_materiaModel2.id, docente_materiaModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let docente_materias = new Array();
        let docente_materia1 = new docente_materia_1.DocenteMateria();
        for (let row of result) {
            docente_materia1 = new docente_materia_1.DocenteMateria();
            docente_materia1 = Object.assign({}, row);
            docente_materias.push(docente_materia1);
        }
        return docente_materias;
    }
    getEntityFromModel(result) {
        let docente_materia1 = new docente_materia_1.DocenteMateria();
        for (let row of result) {
            docente_materia1 = Object.assign({}, row);
            break;
        }
        return docente_materia1;
    }
    getModelsFromEntities(docente_materias) {
        let docente_materiaModels = new Array();
        let docente_materiaModel2 = new docente_materia_1.DocenteMateria();
        for (let docente_materia2 of docente_materias) {
            docente_materiaModel2 = this.getModelFromEntity(docente_materia2);
            docente_materiaModels.push(docente_materiaModel2);
        }
        return docente_materiaModels;
    }
    getModelFromEntity(docente_materia1) {
        let docente_materiaModel2 = new docente_materia_1.DocenteMateria();
        docente_materiaModel2.id = docente_materia1.id;
        docente_materiaModel2.created_at = docente_materia1.created_at;
        docente_materiaModel2.updated_at = docente_materia1.updated_at;
        docente_materiaModel2.id_docente = docente_materia1.id_docente;
        docente_materiaModel2.id_materia = docente_materia1.id_materia;
        return docente_materiaModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jdocente_materia1 = {};
        jdocente_materia1 = {
            id: id
        };
        return jdocente_materia1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jdocente_materia1 = {};
        jdocente_materia1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            id_docente: req.body.id_docente,
            id_materia: req.body.id_materia,
        };
        return jdocente_materia1;
    }
    async getFks() {
        try {
            let pagination1 = new pagination_1.Pagination();
            pagination1.limit = constantes_1.Constantes.LIMIT_FK_MAX;
            pagination1.skip = 0;
            await this.docenteLogic.getTodos(pagination1, {});
            this.docentesFK = this.docenteLogic.docentes;
            await this.materiaLogic.getTodos(pagination1, {});
            this.materiasFK = this.materiaLogic.materias;
        }
        catch (e) {
            throw e;
        }
    }
};
DocenteMateriaData.TITULO = "Docente Materia";
DocenteMateriaData.MODULO = "estructura";
DocenteMateriaData.TABLA = "docente_materia";
DocenteMateriaData.PATH_PAGINA = "estructura/docente_materia_view";
DocenteMateriaData.PATH_PAGINA_FORM = "estructura/docente_materia_form_view";
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], DocenteMateriaData.prototype, "docenteLogic", void 0);
__decorate([
    (0, common_1.Inject)(materia_logic_1.MateriaLogic),
    __metadata("design:type", materia_logic_1.MateriaLogic)
], DocenteMateriaData.prototype, "materiaLogic", void 0);
DocenteMateriaData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docente_materia_1.DocenteMateria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocenteMateriaData);
exports.DocenteMateriaData = DocenteMateriaData;
//# sourceMappingURL=docente_materia.data.js.map