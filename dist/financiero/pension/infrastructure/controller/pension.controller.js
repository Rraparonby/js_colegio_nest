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
exports.PensionController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const pension_1 = require("../../domain/model/pension");
const pension_logic_1 = require("../../application/logic/pension.logic");
const pension_return_view_return_1 = require("../../infrastructure/util/return/pension_return_view.return");
const pension_create_request_1 = require("../../infrastructure/util/request/pension_create.request");
const pension_update_request_1 = require("../../infrastructure/util/request/pension_update.request");
const pension_fk_return_view_return_1 = require("../../infrastructure/util/return/pension_fk_return_view.return");
let PensionController = class PensionController extends general_entity_controller_1.GeneralEntityController {
    constructor(pension_logici1) {
        super();
        this.pension_logici1 = pension_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.pension1 = new pension_1.Pension();
        this.pensions = new Array();
        this.pension_return_view = new pension_return_view_return_1.PensionReturnView();
        this.pension_fk_return_view_dto = new pension_fk_return_view_return_1.PensionFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.pension_return_view.setReturnView(tipo_accion_enum1, this.pension1, this.pensions);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.pensions = await this.pension_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.pensions = await this.pension_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.pensions = await this.pension_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.builder_object_pension1 = this.pension_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.pensions = await this.pension_logici1.getBuscar(this.builder_object_pension1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.builder_object_pension1 = this.pension_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.pension1 = await this.pension_logici1.getBuscarUno(this.builder_object_pension1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async nuevo(pension_create_request1) {
        try {
            this.pension1 = new pension_1.Pension();
            pension_create_request_1.PensionCreateRequest.setPension(pension_create_request1, this.pension1);
            this.result = await this.pension_logici1.nuevo(this.pension1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async actualizar(pension_update_request1) {
        try {
            pension_update_request_1.PensionUpdateRequest.setPension(pension_update_request1, this.pension1);
            this.result = await this.pension_logici1.actualizar(this.pension1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.pension_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async nuevos(pension_create_requests) {
        try {
            this.pensions = new Array();
            pension_create_request_1.PensionCreateRequest.setPensions(pension_create_requests, this.pensions);
            await this.pension_logici1.nuevos(this.pensions);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async eliminars(ids) {
        try {
            await this.pension_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async actualizars(pension_update_requests, updates_columnas) {
        try {
            this.pensions = new Array();
            pension_update_request_1.PensionUpdateRequest.setPensions(pension_update_requests, this.pensions);
            await this.pension_logici1.actualizars(this.pensions, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async guardarCambios(news_pensions, ids_deletes_pensions, updates_pensions, updates_columnas) {
        try {
            await this.pension_logici1.nuevos(news_pensions);
            await this.pension_logici1.eliminars(ids_deletes_pensions);
            await this.pension_logici1.actualizars(updates_pensions, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.pension_return_view;
    }
    async getFks() {
        try {
            await this.pension_logici1.getFks();
            this.pension_fk_return_view_dto.alumnosFK = this.pension_logici1.alumnosFK;
            return this.pension_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let pensions = new Array();
        try {
            this.relations1 = {
                alumno: true
            };
            this.pensions = await this.pension_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return pensions;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(pension_1.Pension.PENSION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pension_create_request_1.PensionCreateRequest]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(pension_1.Pension.PENSION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pension_update_request_1.PensionUpdateRequest]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_pensions', new common_1.ParseArrayPipe({ items: pension_create_request_1.PensionCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_pensions', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_pensions', new common_1.ParseArrayPipe({ items: pension_update_request_1.PensionUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_pensions')),
    __param(1, (0, common_1.Body)('ids_deletes_pensions')),
    __param(2, (0, common_1.Body)('updates_pensions')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], PensionController.prototype, "getTodosEntitiesDto", null);
PensionController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/financiero/pension_api'),
    __metadata("design:paramtypes", [pension_logic_1.PensionLogic])
], PensionController);
exports.PensionController = PensionController;
//# sourceMappingURL=pension.controller.js.map