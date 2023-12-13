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
exports.MatriculaLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const matricula_data_1 = require("../../infrastructure/data/matricula.data");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
let MatriculaLogic = class MatriculaLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(matricula_datai1) {
        super();
        this.matricula_datai1 = matricula_datai1;
        this.matricula1 = null;
        this.matriculas = [];
        this.alumnosFK = [];
        this.matricula_datai1 = matricula_datai1;
        this.matricula1 = null;
        this.matriculas = new Array();
        this.alumnosFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.matriculas = await this.matricula_datai1.getTodos(pagination1, relations1);
            return this.matriculas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_matricula1, pagination1, relations1) {
        try {
            this.matriculas = await this.matricula_datai1.getBuscar(builder_object_matricula1, pagination1, relations1);
            return this.matriculas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_matricula1, pagination1, relations1) {
        try {
            this.matriculas = await this.matricula_datai1.getBuscarGeneral(builder_object_matricula1, pagination1, relations1);
            return this.matriculas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_matricula1, relations1) {
        try {
            this.matricula1 = await this.matricula_datai1.getBuscarUno(builder_object_matricula1, relations1);
            return this.matricula1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(matricula1) {
        try {
            this.result = await this.matricula_datai1.nuevo(matricula1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(matricula1) {
        try {
            this.result = await this.matricula_datai1.actualizar(matricula1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.matricula_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(matriculas) {
        try {
            this.result = await this.matricula_datai1.nuevos(matriculas);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.matricula_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_matriculas, updates_columnas) {
        try {
            this.result = await this.matricula_datai1.actualizars(updates_matriculas, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jmatricula1 = this.matricula_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jmatricula1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jmatricula1 = this.matricula_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jmatricula1;
    }
    async getFks() {
        try {
            await this.matricula_datai1.getFks();
            this.alumnosFK = this.matricula_datai1.alumnosFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], MatriculaLogic.prototype, "alumnoLogic", void 0);
MatriculaLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [matricula_data_1.MatriculaData])
], MatriculaLogic);
exports.MatriculaLogic = MatriculaLogic;
//# sourceMappingURL=matricula.logic.js.map