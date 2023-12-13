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
exports.ContratoData = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constantes_1 = require("../../../../base/util/constantes");
const pagination_1 = require("../../../../base/application/logic/pagination");
const contrato_1 = require("../../domain/model/contrato");
const docente_logic_1 = require("../../../../estructura/docente/application/logic/docente.logic");
let ContratoData = class ContratoData {
    constructor(contrato_data1) {
        this.contrato1 = null;
        this.contratos = [];
        this.docentesFK = [];
        this.contrato_data1 = contrato_data1;
        this.contrato1 = null;
        this.contratos = new Array();
        this.docentesFK = new Array();
    }
    async getTodos(pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            const [result, total] = await this.contrato_data1.findAndCount(params);
            this.contratos = this.getEntitiesFromModels(result);
            return this.contratos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscar(builder_object_contrato1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.contrato_data1.find(params);
            this.contratos = this.getEntitiesFromModels(this.result);
            return this.contratos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarGeneral(builder_object_contrato1, pagination1, relations1) {
        try {
            const params = {
                take: pagination1.limit,
                skip: pagination1.skip,
                relations: relations1
            };
            this.result = await this.contrato_data1.find(params);
            this.contratos = this.getEntitiesFromModels(this.result);
            return this.contratos;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getBuscarUno(builder_object_contrato1, relations1) {
        try {
            const params = {
                where: builder_object_contrato1,
                relations: relations1
            };
            this.result = await this.contrato_data1.find(params);
            this.contrato1 = this.getEntityFromModel(this.result);
            return this.contrato1;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevo(contrato1) {
        try {
            let contratoModel2 = this.getModelFromEntity(contrato1);
            this.result = await this.contrato_data1.save(contratoModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizar(contrato1) {
        try {
            let contratoModel2 = this.getModelFromEntity(contrato1);
            this.result = await this.contrato_data1.update(contrato1.id, contratoModel2);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminar(id) {
        try {
            this.result = await this.contrato_data1.delete(id);
            return this.result;
        }
        catch (ex) {
            throw ex;
        }
    }
    async nuevos(contratos) {
        try {
            let contratoModels2 = this.getModelsFromEntities(contratos);
            this.result = await this.contrato_data1.save(contratoModels2);
        }
        catch (ex) {
            throw ex;
        }
    }
    async eliminars(ids) {
        try {
            if (ids.length > 0) {
                this.result = await this.contrato_data1.delete(ids);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async actualizars(updates_contratos, updates_columnas) {
        try {
            let updates_contratoModels2 = this.getModelsFromEntities(updates_contratos);
            for (let contratoModel2 of updates_contratoModels2) {
                this.result = await this.contrato_data1.update(contratoModel2.id, contratoModel2);
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    getEntitiesFromModels(result) {
        let contratos = new Array();
        let contrato1 = new contrato_1.Contrato();
        for (let row of result) {
            contrato1 = new contrato_1.Contrato();
            contrato1 = Object.assign({}, row);
            contratos.push(contrato1);
        }
        return contratos;
    }
    getEntityFromModel(result) {
        let contrato1 = new contrato_1.Contrato();
        for (let row of result) {
            contrato1 = Object.assign({}, row);
            break;
        }
        return contrato1;
    }
    getModelsFromEntities(contratos) {
        let contratoModels = new Array();
        let contratoModel2 = new contrato_1.Contrato();
        for (let contrato2 of contratos) {
            contratoModel2 = this.getModelFromEntity(contrato2);
            contratoModels.push(contratoModel2);
        }
        return contratoModels;
    }
    getModelFromEntity(contrato1) {
        let contratoModel2 = new contrato_1.Contrato();
        contratoModel2.id = contrato1.id;
        contratoModel2.created_at = contrato1.created_at;
        contratoModel2.updated_at = contrato1.updated_at;
        contratoModel2.anio = contrato1.anio;
        contratoModel2.valor = contrato1.valor;
        contratoModel2.fecha = contrato1.fecha;
        contratoModel2.firmado = contrato1.firmado;
        return contratoModel2;
    }
    getBuilderFunctionObjectParametroSeleccionar(id) {
        let jcontrato1 = {};
        jcontrato1 = {
            id: id
        };
        return jcontrato1;
    }
    getBuilderFunctionObjectParametroBuscar(req) {
        let jcontrato1 = {};
        jcontrato1 = {
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            anio: req.body.anio,
            valor: req.body.valor,
            fecha: req.body.fecha,
            firmado: req.body.firmado,
        };
        return jcontrato1;
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
ContratoData.TITULO = "Contrato";
ContratoData.MODULO = "financiero";
ContratoData.TABLA = "contrato";
ContratoData.PATH_PAGINA = "financiero/contrato_view";
ContratoData.PATH_PAGINA_FORM = "financiero/contrato_form_view";
__decorate([
    (0, common_1.Inject)(docente_logic_1.DocenteLogic),
    __metadata("design:type", docente_logic_1.DocenteLogic)
], ContratoData.prototype, "docenteLogic", void 0);
ContratoData = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contrato_1.Contrato)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContratoData);
exports.ContratoData = ContratoData;
//# sourceMappingURL=contrato.data.js.map