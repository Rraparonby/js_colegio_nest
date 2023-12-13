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
exports.PensionData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const pension_1 = require("../../domain/model/pension");
const alumno_logic_1 = require("../../../../estructura/alumno/application/logic/alumno.logic");
let PensionData = class PensionData {
    constructor(pension_data1) {
        this.pension1 = null;
        this.pensions = [];
        this.alumnosFK = [];
        this.pension_data1 = pension_data1;
        this.pension1 = null;
        this.pensions = new Array();
        this.alumnosFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.pension_data1.findAndCount(params);
            this.pensions = this.getEntitiesFromModels(result);
            return this.pensions;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_pension1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.pension_data1.find(params);
            this.pensions = this.getEntitiesFromModels(this.result);
            return this.pensions;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_pension1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.pension_data1.find(params);
            this.pensions = this.getEntitiesFromModels(this.result);
            return this.pensions;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_pension1, relations1) {
        try {
            const params = {
                where: builder_object_pension1,
                relations: relations1
            };
            this.result = await this.pension_data1.find(params);
            this.pension1 = this.getEntityFromModel(this.result);
            return this.pension1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(pension1) {
        try {
            let pensionModel2 = this.getModelFromEntity(pension1);
            this.result = await this.pension_data1.save(pensionModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(pension1) {
        try {
            let pensionModel2 = this.getModelFromEntity(pension1);
            this.result = await this.pension_data1.update(pension1.id, pensionModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.pension_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(pensions) {
        try {
            let pensionModels2 = this.getModelsFromEntities(pensions);
            this.result = await this.pension_data1.save(pensionModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.pension_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_pensions, updates_columnas) {
        try {
            let updates_pensionModels2 = this.getModelsFromEntities(updates_pensions);
            for (let pensionModel2 of updates_pensionModels2) {
                this.result = await this.pension_data1.update(pensionModel2.id, pensionModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let pensions = new Array();
        let pension1 = new pension_1.Pension();
        for (let row of result) {
            pension1 = new pension_1.Pension();
            pension1 = Object.assign({}, row);
            pensions.push(pension1);
        }
        return pensions;
    }
    getEntityFromModel(result) {
        let pension1 = new pension_1.Pension();
        for (let row of result) {
            pension1 = Object.assign({}, row);
            break;
        }
        return pension1;
    }
    getModelsFromEntities(pensions) {
        let pensionModels = new Array();
        let pensionModel2 = new pension_1.Pension();
        for (let pension2 of pensions) {
            pensionModel2 = this.getModelFromEntity(pension2);
            pensionModels.push(pensionModel2);
        }
        return pensionModels;
    }
    getModelFromEntity(pension1) {
        let pensionModel2 = new pension_1.Pension();
        pensionModel2.id = pension1.id;
        pensionModel2.created_at = pension1.created_at;
        pensionModel2.updated_at = pension1.updated_at;
        pensionModel2.id_alumno = pension1.id_alumno;
        pensionModel2.anio = pension1.anio;
        pensionModel2.mes = pension1.mes;
        pensionModel2.valor = pension1.valor;
        pensionModel2.cobrado = pension1.cobrado;
        return pensionModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jpension1 = {};
        jpension1 = {
            id: id
        };
        return jpension1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jpension1 = {};
        jpension1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            id_alumno: req.body.id_alumno,
            anio: req.body.anio,
            mes: req.body.mes,
            valor: req.body.valor,
            cobrado: req.body.cobrado,
        };
        return jpension1;
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
PensionData.TITULO = "Pension";
PensionData.MODULO = "financiero";
PensionData.TABLA = "pension";
PensionData.PATH_PAGINA = "financiero/pension_view";
PensionData.PATH_PAGINA_FORM = "financiero/pension_form_view";
__decorate([
    (0, common_1.Inject)(alumno_logic_1.AlumnoLogic),
    __metadata("design:type", alumno_logic_1.AlumnoLogic)
], PensionData.prototype, "alumnoLogic", void 0);
PensionData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pension_1.Pension)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PensionData);
exports.PensionData = PensionData;
//# sourceMappingURL=pension.data.js.map