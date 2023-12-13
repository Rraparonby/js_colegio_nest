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
exports.MatriculaData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const matricula_1 = require("../../domain/model/matricula");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
let MatriculaData = class MatriculaData {
    constructor(matricula_data1) {
        this.matricula1 = null;
        this.matriculas = [];
        this.alumnosFK = [];
        this.matricula_data1 = matricula_data1;
        this.matricula1 = null;
        this.matriculas = new Array();
        this.alumnosFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.matricula_data1.findAndCount(params);
            this.matriculas = this.getEntitiesFromModels(result);
            return this.matriculas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_matricula1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.matricula_data1.find(params);
            this.matriculas = this.getEntitiesFromModels(this.result);
            return this.matriculas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_matricula1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.matricula_data1.find(params);
            this.matriculas = this.getEntitiesFromModels(this.result);
            return this.matriculas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_matricula1, relations1) {
        try {
            const params = {
                where: builder_object_matricula1,
                relations: relations1
            };
            this.result = await this.matricula_data1.find(params);
            this.matricula1 = this.getEntityFromModel(this.result);
            return this.matricula1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(matricula1) {
        try {
            let matriculaModel2 = this.getModelFromEntity(matricula1);
            this.result = await this.matricula_data1.save(matriculaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(matricula1) {
        try {
            let matriculaModel2 = this.getModelFromEntity(matricula1);
            this.result = await this.matricula_data1.update(matricula1.id, matriculaModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.matricula_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(matriculas) {
        try {
            let matriculaModels2 = this.getModelsFromEntities(matriculas);
            this.result = await this.matricula_data1.save(matriculaModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.matricula_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_matriculas, updates_columnas) {
        try {
            let updates_matriculaModels2 = this.getModelsFromEntities(updates_matriculas);
            for (let matriculaModel2 of updates_matriculaModels2) {
                this.result = await this.matricula_data1.update(matriculaModel2.id, matriculaModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let matriculas = new Array();
        let matricula1 = new matricula_1.Matricula();
        for (let row of result) {
            matricula1 = new matricula_1.Matricula();
            matricula1 = Object.assign({}, row);
            matriculas.push(matricula1);
        }
        return matriculas;
    }
    getEntityFromModel(result) {
        let matricula1 = new matricula_1.Matricula();
        for (let row of result) {
            matricula1 = Object.assign({}, row);
            break;
        }
        return matricula1;
    }
    getModelsFromEntities(matriculas) {
        let matriculaModels = new Array();
        let matriculaModel2 = new matricula_1.Matricula();
        for (let matricula2 of matriculas) {
            matriculaModel2 = this.getModelFromEntity(matricula2);
            matriculaModels.push(matriculaModel2);
        }
        return matriculaModels;
    }
    getModelFromEntity(matricula1) {
        let matriculaModel2 = new matricula_1.Matricula();
        matriculaModel2.id = matricula1.id;
        matriculaModel2.created_at = matricula1.created_at;
        matriculaModel2.updated_at = matricula1.updated_at;
        matriculaModel2.anio = matricula1.anio;
        matriculaModel2.costo = matricula1.costo;
        matriculaModel2.fecha = matricula1.fecha;
        matriculaModel2.pagado = matricula1.pagado;
        return matriculaModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jmatricula1 = {};
        jmatricula1 = {
            id: id
        };
        return jmatricula1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jmatricula1 = {};
        jmatricula1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            anio: req.body.anio,
            costo: req.body.costo,
            fecha: req.body.fecha,
            pagado: req.body.pagado,
        };
        return jmatricula1;
    }
    async getFks() {
        try {
            let pagination1 = new pagination_1.Pagination();
            pagination1.limit = constantes_1.Constantes.LIMIT_FK_MAX;
            pagination1.skip = 0;
            await this.alumnoLogic.getTodos(pagination1, {});
            this.alumnosFK = this.alumnoLogic.alumnos;
        }
        catch (e) {
            throw e;
        }
    }
};
MatriculaData.TITULO = "Matricula";
MatriculaData.MODULO = "proceso";
MatriculaData.TABLA = "matricula";
MatriculaData.PATH_PAGINA = "proceso/matricula_view";
MatriculaData.PATH_PAGINA_FORM = "proceso/matricula_form_view";
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], MatriculaData.prototype, "alumnoLogic", void 0);
MatriculaData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(matricula_1.Matricula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MatriculaData);
exports.MatriculaData = MatriculaData;
//# sourceMappingURL=matricula.data.js.map