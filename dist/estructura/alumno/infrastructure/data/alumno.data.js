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
exports.AlumnoData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alumno_1 = require("../../domain/model/alumno");
let AlumnoData = class AlumnoData {
    constructor(alumno_data1) {
        this.alumno1 = null;
        this.alumnos = [];
        this.alumno_data1 = alumno_data1;
        this.alumno1 = null;
        this.alumnos = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.alumno_data1.findAndCount(params);
            this.alumnos = this.getEntitiesFromModels(result);
            return this.alumnos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_alumno1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.alumno_data1.find(params);
            this.alumnos = this.getEntitiesFromModels(this.result);
            return this.alumnos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_alumno1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.alumno_data1.find(params);
            this.alumnos = this.getEntitiesFromModels(this.result);
            return this.alumnos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_alumno1, relations1) {
        try {
            const params = {
                where: builder_object_alumno1,
                relations: relations1
            };
            this.result = await this.alumno_data1.find(params);
            this.alumno1 = this.getEntityFromModel(this.result);
            return this.alumno1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(alumno1) {
        try {
            let alumnoModel2 = this.getModelFromEntity(alumno1);
            this.result = await this.alumno_data1.save(alumnoModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(alumno1) {
        try {
            let alumnoModel2 = this.getModelFromEntity(alumno1);
            this.result = await this.alumno_data1.update(alumno1.id, alumnoModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.alumno_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(alumnos) {
        try {
            let alumnoModels2 = this.getModelsFromEntities(alumnos);
            this.result = await this.alumno_data1.save(alumnoModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.alumno_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_alumnos, updates_columnas) {
        try {
            let updates_alumnoModels2 = this.getModelsFromEntities(updates_alumnos);
            for (let alumnoModel2 of updates_alumnoModels2) {
                this.result = await this.alumno_data1.update(alumnoModel2.id, alumnoModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let alumnos = new Array();
        let alumno1 = new alumno_1.Alumno();
        for (let row of result) {
            alumno1 = new alumno_1.Alumno();
            alumno1 = Object.assign({}, row);
            alumnos.push(alumno1);
        }
        return alumnos;
    }
    getEntityFromModel(result) {
        let alumno1 = new alumno_1.Alumno();
        for (let row of result) {
            alumno1 = Object.assign({}, row);
            break;
        }
        return alumno1;
    }
    getModelsFromEntities(alumnos) {
        let alumnoModels = new Array();
        let alumnoModel2 = new alumno_1.Alumno();
        for (let alumno2 of alumnos) {
            alumnoModel2 = this.getModelFromEntity(alumno2);
            alumnoModels.push(alumnoModel2);
        }
        return alumnoModels;
    }
    getModelFromEntity(alumno1) {
        let alumnoModel2 = new alumno_1.Alumno();
        alumnoModel2.id = alumno1.id;
        alumnoModel2.created_at = alumno1.created_at;
        alumnoModel2.updated_at = alumno1.updated_at;
        alumnoModel2.nombre = alumno1.nombre;
        alumnoModel2.apellido = alumno1.apellido;
        alumnoModel2.fecha_nacimiento = alumno1.fecha_nacimiento;
        return alumnoModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jalumno1 = {};
        jalumno1 = {
            id: id
        };
        return jalumno1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jalumno1 = {};
        jalumno1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fecha_nacimiento: req.body.fecha_nacimiento,
        };
        return jalumno1;
    }
};
AlumnoData.TITULO = "Alumno";
AlumnoData.MODULO = "estructura";
AlumnoData.TABLA = "alumno";
AlumnoData.PATH_PAGINA = "estructura/alumno_view";
AlumnoData.PATH_PAGINA_FORM = "estructura/alumno_form_view";
AlumnoData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_1.Alumno)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlumnoData);
exports.AlumnoData = AlumnoData;
//# sourceMappingURL=alumno.data.js.map