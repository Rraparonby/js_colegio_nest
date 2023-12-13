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
exports.NotaLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const nota_data_1 = require("../../infrastructure/data/nota.data");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
const materia_logic_1 = require("../../../../estructura/materia/application/logic/materia.logic");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
let NotaLogic = class NotaLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(nota_datai1) {
        super();
        this.nota_datai1 = nota_datai1;
        this.nota1 = null;
        this.notas = [];
        this.alumnosFK = [];
        this.materiasFK = [];
        this.docentesFK = [];
        this.nota_datai1 = nota_datai1;
        this.nota1 = null;
        this.notas = new Array();
        this.alumnosFK = new Array();
        this.materiasFK = new Array();
        this.docentesFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.notas = await this.nota_datai1.getTodos(pagination1, relations1);
            return this.notas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_nota1, pagination1, relations1) {
        try {
            this.notas = await this.nota_datai1.getBuscar(builder_object_nota1, pagination1, relations1);
            return this.notas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_nota1, pagination1, relations1) {
        try {
            this.notas = await this.nota_datai1.getBuscarGeneral(builder_object_nota1, pagination1, relations1);
            return this.notas;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_nota1, relations1) {
        try {
            this.nota1 = await this.nota_datai1.getBuscarUno(builder_object_nota1, relations1);
            return this.nota1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(nota1) {
        try {
            this.result = await this.nota_datai1.nuevo(nota1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(nota1) {
        try {
            this.result = await this.nota_datai1.actualizar(nota1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.nota_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(notas) {
        try {
            this.result = await this.nota_datai1.nuevos(notas);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.nota_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_notas, updates_columnas) {
        try {
            this.result = await this.nota_datai1.actualizars(updates_notas, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jnota1 = this.nota_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jnota1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jnota1 = this.nota_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jnota1;
    }
    async getFks() {
        try {
            await this.nota_datai1.getFks();
            this.alumnosFK = this.nota_datai1.alumnosFK;
            this.materiasFK = this.nota_datai1.materiasFK;
            this.docentesFK = this.nota_datai1.docentesFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], NotaLogic.prototype, "alumnoLogic", void 0);
__decorate([
    (0, common_1.Inject)(materia_logic_1.MateriaLogic),
    __metadata("design:type", materia_logic_1.MateriaLogic)
], NotaLogic.prototype, "materiaLogic", void 0);
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], NotaLogic.prototype, "docenteLogic", void 0);
NotaLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nota_data_1.NotaData])
], NotaLogic);
exports.NotaLogic = NotaLogic;
//# sourceMappingURL=nota.logic.js.map