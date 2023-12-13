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
exports.AlumnoMateriaLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const alumno_materia_data_1 = require("../../infrastructure/data/alumno_materia.data");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
const materia_logic_1 = require("../../../../estructura/materia/application/logic/materia.logic");
let AlumnoMateriaLogic = class AlumnoMateriaLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(alumno_materia_datai1) {
        super();
        this.alumno_materia_datai1 = alumno_materia_datai1;
        this.alumno_materia1 = null;
        this.alumno_materias = [];
        this.alumnosFK = [];
        this.materiasFK = [];
        this.alumno_materia_datai1 = alumno_materia_datai1;
        this.alumno_materia1 = null;
        this.alumno_materias = new Array();
        this.alumnosFK = new Array();
        this.materiasFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.alumno_materias = await this.alumno_materia_datai1.getTodos(pagination1, relations1);
            return this.alumno_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_alumno_materia1, pagination1, relations1) {
        try {
            this.alumno_materias = await this.alumno_materia_datai1.getBuscar(builder_object_alumno_materia1, pagination1, relations1);
            return this.alumno_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_alumno_materia1, pagination1, relations1) {
        try {
            this.alumno_materias = await this.alumno_materia_datai1.getBuscarGeneral(builder_object_alumno_materia1, pagination1, relations1);
            return this.alumno_materias;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_alumno_materia1, relations1) {
        try {
            this.alumno_materia1 = await this.alumno_materia_datai1.getBuscarUno(builder_object_alumno_materia1, relations1);
            return this.alumno_materia1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(alumno_materia1) {
        try {
            this.result = await this.alumno_materia_datai1.nuevo(alumno_materia1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(alumno_materia1) {
        try {
            this.result = await this.alumno_materia_datai1.actualizar(alumno_materia1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.alumno_materia_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(alumno_materias) {
        try {
            this.result = await this.alumno_materia_datai1.nuevos(alumno_materias);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.alumno_materia_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_alumno_materias, updates_columnas) {
        try {
            this.result = await this.alumno_materia_datai1.actualizars(updates_alumno_materias, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jalumno_materia1 = this.alumno_materia_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jalumno_materia1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jalumno_materia1 = this.alumno_materia_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jalumno_materia1;
    }
    async getFks() {
        try {
            await this.alumno_materia_datai1.getFks();
            this.alumnosFK = this.alumno_materia_datai1.alumnosFK;
            this.materiasFK = this.alumno_materia_datai1.materiasFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], AlumnoMateriaLogic.prototype, "alumnoLogic", void 0);
__decorate([
    (0, common_1.Inject)(materia_logic_1.MateriaLogic),
    __metadata("design:type", materia_logic_1.MateriaLogic)
], AlumnoMateriaLogic.prototype, "materiaLogic", void 0);
AlumnoMateriaLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [alumno_materia_data_1.AlumnoMateriaData])
], AlumnoMateriaLogic);
exports.AlumnoMateriaLogic = AlumnoMateriaLogic;
//# sourceMappingURL=alumno_materia.logic.js.map