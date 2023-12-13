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
exports.DocenteData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const docente_1 = require("../../domain/model/docente");
let DocenteData = class DocenteData {
    constructor(docente_data1) {
        this.docente1 = null;
        this.docentes = [];
        this.docente_data1 = docente_data1;
        this.docente1 = null;
        this.docentes = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.docente_data1.findAndCount(params);
            this.docentes = this.getEntitiesFromModels(result);
            return this.docentes;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_docente1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.docente_data1.find(params);
            this.docentes = this.getEntitiesFromModels(this.result);
            return this.docentes;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_docente1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.docente_data1.find(params);
            this.docentes = this.getEntitiesFromModels(this.result);
            return this.docentes;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_docente1, relations1) {
        try {
            const params = {
                where: builder_object_docente1,
                relations: relations1
            };
            this.result = await this.docente_data1.find(params);
            this.docente1 = this.getEntityFromModel(this.result);
            return this.docente1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(docente1) {
        try {
            let docenteModel2 = this.getModelFromEntity(docente1);
            this.result = await this.docente_data1.save(docenteModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(docente1) {
        try {
            let docenteModel2 = this.getModelFromEntity(docente1);
            this.result = await this.docente_data1.update(docente1.id, docenteModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.docente_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(docentes) {
        try {
            let docenteModels2 = this.getModelsFromEntities(docentes);
            this.result = await this.docente_data1.save(docenteModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.docente_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_docentes, updates_columnas) {
        try {
            let updates_docenteModels2 = this.getModelsFromEntities(updates_docentes);
            for (let docenteModel2 of updates_docenteModels2) {
                this.result = await this.docente_data1.update(docenteModel2.id, docenteModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let docentes = new Array();
        let docente1 = new docente_1.Docente();
        for (let row of result) {
            docente1 = new docente_1.Docente();
            docente1 = Object.assign({}, row);
            docentes.push(docente1);
        }
        return docentes;
    }
    getEntityFromModel(result) {
        let docente1 = new docente_1.Docente();
        for (let row of result) {
            docente1 = Object.assign({}, row);
            break;
        }
        return docente1;
    }
    getModelsFromEntities(docentes) {
        let docenteModels = new Array();
        let docenteModel2 = new docente_1.Docente();
        for (let docente2 of docentes) {
            docenteModel2 = this.getModelFromEntity(docente2);
            docenteModels.push(docenteModel2);
        }
        return docenteModels;
    }
    getModelFromEntity(docente1) {
        let docenteModel2 = new docente_1.Docente();
        docenteModel2.id = docente1.id;
        docenteModel2.created_at = docente1.created_at;
        docenteModel2.updated_at = docente1.updated_at;
        docenteModel2.nombre = docente1.nombre;
        docenteModel2.apellido = docente1.apellido;
        docenteModel2.fecha_nacimiento = docente1.fecha_nacimiento;
        docenteModel2.anios_experiencia = docente1.anios_experiencia;
        docenteModel2.nota_evaluacion = docente1.nota_evaluacion;
        return docenteModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jdocente1 = {};
        jdocente1 = {
            id: id
        };
        return jdocente1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jdocente1 = {};
        jdocente1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fecha_nacimiento: req.body.fecha_nacimiento,
            anios_experiencia: req.body.anios_experiencia,
            nota_evaluacion: req.body.nota_evaluacion,
        };
        return jdocente1;
    }
};
DocenteData.TITULO = "Docente";
DocenteData.MODULO = "estructura";
DocenteData.TABLA = "docente";
DocenteData.PATH_PAGINA = "estructura/docente_view";
DocenteData.PATH_PAGINA_FORM = "estructura/docente_form_view";
DocenteData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docente_1.Docente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocenteData);
exports.DocenteData = DocenteData;
//# sourceMappingURL=docente.data.js.map