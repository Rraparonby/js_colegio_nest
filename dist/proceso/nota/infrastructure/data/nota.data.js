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
exports.NotaData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const nota_1 = require("../../domain/model/nota");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
const materia_logic_1 = require("../../../../estructura/materia/application/logic/materia.logic");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
let NotaData = class NotaData {
    constructor(nota_data1) {
        this.nota1 = null;
        this.notas = [];
        this.alumnosFK = [];
        this.materiasFK = [];
        this.docentesFK = [];
        this.nota_data1 = nota_data1;
        this.nota1 = null;
        this.notas = new Array();
        this.alumnosFK = new Array();
        this.materiasFK = new Array();
        this.docentesFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.nota_data1.findAndCount(params);
            this.notas = this.getEntitiesFromModels(result);
            return this.notas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_nota1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.nota_data1.find(params);
            this.notas = this.getEntitiesFromModels(this.result);
            return this.notas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_nota1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.nota_data1.find(params);
            this.notas = this.getEntitiesFromModels(this.result);
            return this.notas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_nota1, relations1) {
        try {
            const params = {
                where: builder_object_nota1,
                relations: relations1
            };
            this.result = await this.nota_data1.find(params);
            this.nota1 = this.getEntityFromModel(this.result);
            return this.nota1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(nota1) {
        try {
            let notaModel2 = this.getModelFromEntity(nota1);
            this.result = await this.nota_data1.save(notaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(nota1) {
        try {
            let notaModel2 = this.getModelFromEntity(nota1);
            this.result = await this.nota_data1.update(nota1.id, notaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.nota_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(notas) {
        try {
            let notaModels2 = this.getModelsFromEntities(notas);
            this.result = await this.nota_data1.save(notaModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.nota_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_notas, updates_columnas) {
        try {
            let updates_notaModels2 = this.getModelsFromEntities(updates_notas);
            for (let notaModel2 of updates_notaModels2) {
                this.result = await this.nota_data1.update(notaModel2.id, notaModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let notas = new Array();
        let nota1 = new nota_1.Nota();
        for (let row of result) {
            nota1 = new nota_1.Nota();
            nota1 = Object.assign({}, row);
            notas.push(nota1);
        }
        return notas;
    }
    getEntityFromModel(result) {
        let nota1 = new nota_1.Nota();
        for (let row of result) {
            nota1 = Object.assign({}, row);
            break;
        }
        return nota1;
    }
    getModelsFromEntities(notas) {
        let notaModels = new Array();
        let notaModel2 = new nota_1.Nota();
        for (let nota2 of notas) {
            notaModel2 = this.getModelFromEntity(nota2);
            notaModels.push(notaModel2);
        }
        return notaModels;
    }
    getModelFromEntity(nota1) {
        let notaModel2 = new nota_1.Nota();
        notaModel2.id = nota1.id;
        notaModel2.created_at = nota1.created_at;
        notaModel2.updated_at = nota1.updated_at;
        notaModel2.id_alumno = nota1.id_alumno;
        notaModel2.id_materia = nota1.id_materia;
        notaModel2.id_docente = nota1.id_docente;
        notaModel2.nota_prueba = nota1.nota_prueba;
        notaModel2.nota_trabajo = nota1.nota_trabajo;
        notaModel2.nota_examen = nota1.nota_examen;
        notaModel2.nota_final = nota1.nota_final;
        return notaModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jnota1 = {};
        jnota1 = {
            id: id
        };
        return jnota1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jnota1 = {};
        jnota1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            id_alumno: req.body.id_alumno,
            id_materia: req.body.id_materia,
            id_docente: req.body.id_docente,
            nota_prueba: req.body.nota_prueba,
            nota_trabajo: req.body.nota_trabajo,
            nota_examen: req.body.nota_examen,
            nota_final: req.body.nota_final,
        };
        return jnota1;
    }
    async getFks() {
        try {
            let pagination1 = new pagination_1.Pagination();
            pagination1.limit = constantes_1.Constantes.LIMIT_FK_MAX;
            pagination1.skip = 0;
            await this.alumnoLogic.getTodos(pagination1, {});
            this.alumnosFK = this.alumnoLogic.alumnos;
            await this.materiaLogic.getTodos(pagination1, {});
            this.materiasFK = this.materiaLogic.materias;
            await this.docenteLogic.getTodos(pagination1, {});
            this.docentesFK = this.docenteLogic.docentes;
        }
        catch (e) {
            throw e;
        }
    }
};
NotaData.TITULO = "Nota";
NotaData.MODULO = "proceso";
NotaData.TABLA = "nota";
NotaData.PATH_PAGINA = "proceso/nota_view";
NotaData.PATH_PAGINA_FORM = "proceso/nota_form_view";
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], NotaData.prototype, "alumnoLogic", void 0);
__decorate([
    (0, common_1.Inject)(materia_logic_1.MateriaLogic),
    __metadata("design:type", materia_logic_1.MateriaLogic)
], NotaData.prototype, "materiaLogic", void 0);
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], NotaData.prototype, "docenteLogic", void 0);
NotaData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nota_1.Nota)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotaData);
exports.NotaData = NotaData;
//# sourceMappingURL=nota.data.js.map