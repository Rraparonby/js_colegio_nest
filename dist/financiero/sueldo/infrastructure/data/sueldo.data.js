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
exports.SueldoData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const sueldo_1 = require("../../domain/model/sueldo");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
let SueldoData = class SueldoData {
    constructor(sueldo_data1) {
        this.sueldo1 = null;
        this.sueldos = [];
        this.docentesFK = [];
        this.sueldo_data1 = sueldo_data1;
        this.sueldo1 = null;
        this.sueldos = new Array();
        this.docentesFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.sueldo_data1.findAndCount(params);
            this.sueldos = this.getEntitiesFromModels(result);
            return this.sueldos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_sueldo1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.sueldo_data1.find(params);
            this.sueldos = this.getEntitiesFromModels(this.result);
            return this.sueldos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_sueldo1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.sueldo_data1.find(params);
            this.sueldos = this.getEntitiesFromModels(this.result);
            return this.sueldos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_sueldo1, relations1) {
        try {
            const params = {
                where: builder_object_sueldo1,
                relations: relations1
            };
            this.result = await this.sueldo_data1.find(params);
            this.sueldo1 = this.getEntityFromModel(this.result);
            return this.sueldo1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(sueldo1) {
        try {
            let sueldoModel2 = this.getModelFromEntity(sueldo1);
            this.result = await this.sueldo_data1.save(sueldoModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(sueldo1) {
        try {
            let sueldoModel2 = this.getModelFromEntity(sueldo1);
            this.result = await this.sueldo_data1.update(sueldo1.id, sueldoModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.sueldo_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(sueldos) {
        try {
            let sueldoModels2 = this.getModelsFromEntities(sueldos);
            this.result = await this.sueldo_data1.save(sueldoModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.sueldo_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_sueldos, updates_columnas) {
        try {
            let updates_sueldoModels2 = this.getModelsFromEntities(updates_sueldos);
            for (let sueldoModel2 of updates_sueldoModels2) {
                this.result = await this.sueldo_data1.update(sueldoModel2.id, sueldoModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let sueldos = new Array();
        let sueldo1 = new sueldo_1.Sueldo();
        for (let row of result) {
            sueldo1 = new sueldo_1.Sueldo();
            sueldo1 = Object.assign({}, row);
            sueldos.push(sueldo1);
        }
        return sueldos;
    }
    getEntityFromModel(result) {
        let sueldo1 = new sueldo_1.Sueldo();
        for (let row of result) {
            sueldo1 = Object.assign({}, row);
            break;
        }
        return sueldo1;
    }
    getModelsFromEntities(sueldos) {
        let sueldoModels = new Array();
        let sueldoModel2 = new sueldo_1.Sueldo();
        for (let sueldo2 of sueldos) {
            sueldoModel2 = this.getModelFromEntity(sueldo2);
            sueldoModels.push(sueldoModel2);
        }
        return sueldoModels;
    }
    getModelFromEntity(sueldo1) {
        let sueldoModel2 = new sueldo_1.Sueldo();
        sueldoModel2.id = sueldo1.id;
        sueldoModel2.created_at = sueldo1.created_at;
        sueldoModel2.updated_at = sueldo1.updated_at;
        sueldoModel2.id_docente = sueldo1.id_docente;
        sueldoModel2.anio = sueldo1.anio;
        sueldoModel2.mes = sueldo1.mes;
        sueldoModel2.valor = sueldo1.valor;
        sueldoModel2.cobrado = sueldo1.cobrado;
        return sueldoModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jsueldo1 = {};
        jsueldo1 = {
            id: id
        };
        return jsueldo1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jsueldo1 = {};
        jsueldo1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            id_docente: req.body.id_docente,
            anio: req.body.anio,
            mes: req.body.mes,
            valor: req.body.valor,
            cobrado: req.body.cobrado,
        };
        return jsueldo1;
    }
    async getFks() {
        try {
            let pagination1 = new pagination_1.Pagination();
            pagination1.limit = constantes_1.Constantes.LIMIT_FK_MAX;
            pagination1.skip = 0;
            await this.docenteLogic.getTodos(pagination1, {});
            this.docentesFK = this.docenteLogic.docentes;
        }
        catch (e) {
            throw e;
        }
    }
};
SueldoData.TITULO = "Sueldo";
SueldoData.MODULO = "financiero";
SueldoData.TABLA = "sueldo";
SueldoData.PATH_PAGINA = "financiero/sueldo_view";
SueldoData.PATH_PAGINA_FORM = "financiero/sueldo_form_view";
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], SueldoData.prototype, "docenteLogic", void 0);
SueldoData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sueldo_1.Sueldo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SueldoData);
exports.SueldoData = SueldoData;
//# sourceMappingURL=sueldo.data.js.map