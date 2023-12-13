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
exports.ContratoController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const contrato_1 = require("../../domain/model/contrato");
const contrato_logic_1 = require("../../application/logic/contrato.logic");
const contrato_return_view_return_1 = require("../../infrastructure/util/return/contrato_return_view.return");
const contrato_create_request_1 = require("../../infrastructure/util/request/contrato_create.request");
const contrato_update_request_1 = require("../../infrastructure/util/request/contrato_update.request");
const contrato_fk_return_view_return_1 = require("../../infrastructure/util/return/contrato_fk_return_view.return");
let ContratoController = class ContratoController extends general_entity_controller_1.GeneralEntityController {
    constructor(contrato_logici1) {
        super();
        this.contrato_logici1 = contrato_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.contrato1 = new contrato_1.Contrato();
        this.contratos = new Array();
        this.contrato_return_view = new contrato_return_view_return_1.ContratoReturnView();
        this.contrato_fk_return_view_dto = new contrato_fk_return_view_return_1.ContratoFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.contrato_return_view.setReturnView(tipo_accion_enum1, this.contrato1, this.contratos);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                docente: true
            };
            this.contratos = await this.contrato_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                docente: true
            };
            this.contratos = await this.contrato_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                docente: true
            };
            this.contratos = await this.contrato_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                docente: true
            };
            this.builder_object_contrato1 = this.contrato_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.contratos = await this.contrato_logici1.getBuscar(this.builder_object_contrato1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                docente: true
            };
            this.builder_object_contrato1 = this.contrato_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.contrato1 = await this.contrato_logici1.getBuscarUno(this.builder_object_contrato1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async nuevo(contrato_create_request1) {
        try {
            this.contrato1 = new contrato_1.Contrato();
            contrato_create_request_1.ContratoCreateRequest.setContrato(contrato_create_request1, this.contrato1);
            this.result = await this.contrato_logici1.nuevo(this.contrato1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async actualizar(contrato_update_request1) {
        try {
            contrato_update_request_1.ContratoUpdateRequest.setContrato(contrato_update_request1, this.contrato1);
            this.result = await this.contrato_logici1.actualizar(this.contrato1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.contrato_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async nuevos(contrato_create_requests) {
        try {
            this.contratos = new Array();
            contrato_create_request_1.ContratoCreateRequest.setContratos(contrato_create_requests, this.contratos);
            await this.contrato_logici1.nuevos(this.contratos);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async eliminars(ids) {
        try {
            await this.contrato_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async actualizars(contrato_update_requests, updates_columnas) {
        try {
            this.contratos = new Array();
            contrato_update_request_1.ContratoUpdateRequest.setContratos(contrato_update_requests, this.contratos);
            await this.contrato_logici1.actualizars(this.contratos, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async guardarCambios(news_contratos, ids_deletes_contratos, updates_contratos, updates_columnas) {
        try {
            await this.contrato_logici1.nuevos(news_contratos);
            await this.contrato_logici1.eliminars(ids_deletes_contratos);
            await this.contrato_logici1.actualizars(updates_contratos, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.contrato_return_view;
    }
    async getFks() {
        try {
            await this.contrato_logici1.getFks();
            this.contrato_fk_return_view_dto.docentesFK = this.contrato_logici1.docentesFK;
            return this.contrato_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let contratos = new Array();
        try {
            this.relations1 = {
                docente: true
            };
            this.contratos = await this.contrato_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return contratos;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(contrato_1.Contrato.CONTRATO)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contrato_create_request_1.ContratoCreateRequest]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(contrato_1.Contrato.CONTRATO)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contrato_update_request_1.ContratoUpdateRequest]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_contratos', new common_1.ParseArrayPipe({ items: contrato_create_request_1.ContratoCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_contratos', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_contratos', new common_1.ParseArrayPipe({ items: contrato_update_request_1.ContratoUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_contratos')),
    __param(1, (0, common_1.Body)('ids_deletes_contratos')),
    __param(2, (0, common_1.Body)('updates_contratos')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], ContratoController.prototype, "getTodosEntitiesDto", null);
ContratoController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/financiero/contrato_api'),
    __metadata("design:paramtypes", [contrato_logic_1.ContratoLogic])
], ContratoController);
exports.ContratoController = ContratoController;
//# sourceMappingURL=contrato.controller.js.map