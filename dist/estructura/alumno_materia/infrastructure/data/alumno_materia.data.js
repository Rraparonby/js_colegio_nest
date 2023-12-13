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
exports.AlumnoMateriaData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const alumno_materia_1 = require("../../domain/model/alumno_materia");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
const materia_logic_1 = require("../../../../estructura/materia/application/logic/materia.logic");
let AlumnoMateriaData = class AlumnoMateriaData {
    constructor(alumno_materia_data1) {
        this.alumno_materia1 = null;
        this.alumno_materias = [];
        this.alumnosFK = [];
        this.materiasFK = [];
        this.alumno_materia_data1 = alumno_materia_data1;
        this.alumno_materia1 = null;
        this.alumno_materias = new Array();
        this.alumnosFK = new Array();
        this.materiasFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.alumno_materia_data1.findAndCount(params);
            this.alumno_materias = this.getEntitiesFromModels(result);
            return this.alumno_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_alumno_materia1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.alumno_materia_data1.find(params);
            this.alumno_materias = this.getEntitiesFromModels(this.result);
            return this.alumno_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_alumno_materia1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.alumno_materia_data1.find(params);
            this.alumno_materias = this.getEntitiesFromModels(this.result);
            return this.alumno_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_alumno_materia1, relations1) {
        try {
            const params = {
                where: builder_object_alumno_materia1,
                relations: relations1
            };
            this.result = await this.alumno_materia_data1.find(params);
            this.alumno_materia1 = this.getEntityFromModel(this.result);
            return this.alumno_materia1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(alumno_materia1) {
        try {
            let alumno_materiaModel2 = this.getModelFromEntity(alumno_materia1);
            this.result = await this.alumno_materia_data1.save(alumno_materiaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(alumno_materia1) {
        try {
            let alumno_materiaModel2 = this.getModelFromEntity(alumno_materia1);
            this.result = await this.alumno_materia_data1.update(alumno_materia1.id, alumno_materiaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.alumno_materia_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(alumno_materias) {
        try {
            let alumno_materiaModels2 = this.getModelsFromEntities(alumno_materias);
            this.result = await this.alumno_materia_data1.save(alumno_materiaModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.alumno_materia_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_alumno_materias, updates_columnas) {
        try {
            let updates_alumno_materiaModels2 = this.getModelsFromEntities(updates_alumno_materias);
            for (let alumno_materiaModel2 of updates_alumno_materiaModels2) {
                this.result = await this.alumno_materia_data1.update(alumno_materiaModel2.id, alumno_materiaModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let alumno_materias = new Array();
        let alumno_materia1 = new alumno_materia_1.AlumnoMateria();
        for (let row of result) {
            alumno_materia1 = new alumno_materia_1.AlumnoMateria();
            alumno_materia1 = Object.assign({}, row);
            alumno_materias.push(alumno_materia1);
        }
        return alumno_materias;
    }
    getEntityFromModel(result) {
        let alumno_materia1 = new alumno_materia_1.AlumnoMateria();
        for (let row of result) {
            alumno_materia1 = Object.assign({}, row);
            break;
        }
        return alumno_materia1;
    }
    getModelsFromEntities(alumno_materias) {
        let alumno_materiaModels = new Array();
        let alumno_materiaModel2 = new alumno_materia_1.AlumnoMateria();
        for (let alumno_materia2 of alumno_materias) {
            alumno_materiaModel2 = this.getModelFromEntity(alumno_materia2);
            alumno_materiaModels.push(alumno_materiaModel2);
        }
        return alumno_materiaModels;
    }
    getModelFromEntity(alumno_materia1) {
        let alumno_materiaModel2 = new alumno_materia_1.AlumnoMateria();
        alumno_materiaModel2.id = alumno_materia1.id;
        alumno_materiaModel2.created_at = alumno_materia1.created_at;
        alumno_materiaModel2.updated_at = alumno_materia1.updated_at;
        alumno_materiaModel2.id_alumno = alumno_materia1.id_alumno;
        alumno_materiaModel2.id_materia = alumno_materia1.id_materia;
        return alumno_materiaModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jalumno_materia1 = {};
        jalumno_materia1 = {
            id: id
        };
        return jalumno_materia1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jalumno_materia1 = {};
        jalumno_materia1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            id_alumno: req.body.id_alumno,
            id_materia: req.body.id_materia,
        };
        return jalumno_materia1;
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
        }
        catch (e) {
            throw e;
        }
    }
};
AlumnoMateriaData.TITULO = "Alumno Materia";
AlumnoMateriaData.MODULO = "estructura";
AlumnoMateriaData.TABLA = "alumno_materia";
AlumnoMateriaData.PATH_PAGINA = "estructura/alumno_materia_view";
AlumnoMateriaData.PATH_PAGINA_FORM = "estructura/alumno_materia_form_view";
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], AlumnoMateriaData.prototype, "alumnoLogic", void 0);
__decorate([
    (0, common_1.Inject)(materia_logic_1.MateriaLogic),
    __metadata("design:type", materia_logic_1.MateriaLogic)
], AlumnoMateriaData.prototype, "materiaLogic", void 0);
AlumnoMateriaData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_materia_1.AlumnoMateria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlumnoMateriaData);
exports.AlumnoMateriaData = AlumnoMateriaData;
//# sourceMappingURL=alumno_materia.data.js.map