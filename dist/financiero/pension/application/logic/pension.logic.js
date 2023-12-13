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
exports.PensionLogic = void 0;
const common_1 = require("@nestjs/common");
const general_entity_logic_1 = require("../../../../base/application/logic/general_entity_logic");
const pension_data_1 = require("../../infrastructure/data/pension.data");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
let PensionLogic = class PensionLogic extends general_entity_logic_1.GeneralEntityLogic {
    constructor(pension_datai1) {
        super();
        this.pension_datai1 = pension_datai1;
        this.pension1 = null;
        this.pensions = [];
        this.alumnosFK = [];
        this.pension_datai1 = pension_datai1;
        this.pension1 = null;
        this.pensions = new Array();
        this.alumnosFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            this.pensions = await this.pension_datai1.getTodos(pagination1, relations1);
            return this.pensions;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_pension1, pagination1, relations1) {
        try {
            this.pensions = await this.pension_datai1.getBuscar(builder_object_pension1, pagination1, relations1);
            return this.pensions;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_pension1, pagination1, relations1) {
        try {
            this.pensions = await this.pension_datai1.getBuscarGeneral(builder_object_pension1, pagination1, relations1);
            return this.pensions;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_pension1, relations1) {
        try {
            this.pension1 = await this.pension_datai1.getBuscarUno(builder_object_pension1, relations1);
            return this.pension1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(pension1) {
        try {
            this.result = await this.pension_datai1.nuevo(pension1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(pension1) {
        try {
            this.result = await this.pension_datai1.actualizar(pension1);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.pension_datai1.eliminar(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(pensions) {
        try {
            this.result = await this.pension_datai1.nuevos(pensions);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.pension_datai1.eliminars(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_pensions, updates_columnas) {
        try {
            this.result = await this.pension_datai1.actualizars(updates_pensions, updates_columnas);
        }
        catch (ex) {
            throw ex;
        }
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jpension1 = this.pension_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
        return jpension1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jpension1 = this.pension_datai1.getBuilderFunctionObjectParametroBuscar(req);
        return jpension1;
    }
    async getFks() {
        try {
            await this.pension_datai1.getFks();
            this.alumnosFK = this.pension_datai1.alumnosFK;
        }
        catch (e) {
            throw e;
        }
    }
};
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], PensionLogic.prototype, "alumnoLogic", void 0);
PensionLogic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pension_data_1.PensionData])
], PensionLogic);
exports.PensionLogic = PensionLogic;
//# sourceMappingURL=pension.logic.js.map