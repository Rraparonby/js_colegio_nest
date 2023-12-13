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
exports.AlumnoLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const alumno_data_1 = require("../../infrastructure/data/alumno.data");
let AlumnoLogic = class AlumnoLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(alumno_datai1) {
        super();
        this.alumno_datai1 = alumno_datai1;
        this.alumno1 = null;
        this.alumnos = [];
        this.alumno_datai1 = alumno_datai1;
        this.alumno1 = null;
        this.alumnos = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.alumnos = await this.alumno_datai1.getTodos(pagination1, relations1);
            return this.alumnos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_alumno1, pagination1, relations1) {
        try {
            this.alumnos = await this.alumno_datai1.getBuscar(builder_object_alumno1, pagination1, relations1);
            return this.alumnos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_alumno1, pagination1, relations1) {
        try {
            this.alumnos = await this.alumno_datai1.getBuscarGeneral(builder_object_alumno1, pagination1, relations1);
            return this.alumnos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_alumno1, relations1) {
        try {
            this.alumno1 = await this.alumno_datai1.getBuscarUno(builder_object_alumno1, relations1);
            return this.alumno1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(alumno1) {
        try {
            this.result = await this.alumno_datai1.nuevo(alumno1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(alumno1) {
        try {
            this.result = await this.alumno_datai1.actualizar(alumno1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.alumno_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(alumnos) {
        try {
            this.result = await this.alumno_datai1.nuevos(alumnos);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.alumno_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_alumnos, updates_columnas) {
        try {
            this.result = await this.alumno_datai1.actualizars(updates_alumnos, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jalumno1 = this.alumno_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jalumno1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jalumno1 = this.alumno_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jalumno1;
    }
};
AlumnoLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [alumno_data_1.AlumnoData])
], AlumnoLogic);
exports.AlumnoLogic = AlumnoLogic;
//# sourceMappingURL=alumno.logic.js.map