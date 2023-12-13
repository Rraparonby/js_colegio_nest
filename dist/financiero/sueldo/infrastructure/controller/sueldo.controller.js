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
exports.SueldoController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const sueldo_1 = require("../../domain/model/sueldo");
const sueldo_logic_1 = require("../../application/logic/sueldo.logic");
const sueldo_return_view_return_1 = require("../../infrastructure/util/return/sueldo_return_view.return");
const sueldo_create_request_1 = require("../../infrastructure/util/request/sueldo_create.request");
const sueldo_update_request_1 = require("../../infrastructure/util/request/sueldo_update.request");
const sueldo_fk_return_view_return_1 = require("../../infrastructure/util/return/sueldo_fk_return_view.return");
let SueldoController = class SueldoController extends general_entity_controller_1.GeneralEntityController {
    constructor(sueldo_logici1) {
        super();
        this.sueldo_logici1 = sueldo_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.sueldo1 = new sueldo_1.Sueldo();
        this.sueldos = new Array();
        this.sueldo_return_view = new sueldo_return_view_return_1.SueldoReturnView();
        this.sueldo_fk_return_view_dto = new sueldo_fk_return_view_return_1.SueldoFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.sueldo_return_view.setReturnView(tipo_accion_enum1, this.sueldo1, this.sueldos);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                docente: true
            };
            this.sueldos = await this.sueldo_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                docente: true
            };
            this.sueldos = await this.sueldo_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                docente: true
            };
            this.sueldos = await this.sueldo_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                docente: true
            };
            this.builder_object_sueldo1 = this.sueldo_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.sueldos = await this.sueldo_logici1.getBuscar(this.builder_object_sueldo1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                docente: true
            };
            this.builder_object_sueldo1 = this.sueldo_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.sueldo1 = await this.sueldo_logici1.getBuscarUno(this.builder_object_sueldo1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async nuevo(sueldo_create_request1) {
        try {
            this.sueldo1 = new sueldo_1.Sueldo();
            sueldo_create_request_1.SueldoCreateRequest.setSueldo(sueldo_create_request1, this.sueldo1);
            this.result = await this.sueldo_logici1.nuevo(this.sueldo1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async actualizar(sueldo_update_request1) {
        try {
            sueldo_update_request_1.SueldoUpdateRequest.setSueldo(sueldo_update_request1, this.sueldo1);
            this.result = await this.sueldo_logici1.actualizar(this.sueldo1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.sueldo_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async nuevos(sueldo_create_requests) {
        try {
            this.sueldos = new Array();
            sueldo_create_request_1.SueldoCreateRequest.setSueldos(sueldo_create_requests, this.sueldos);
            await this.sueldo_logici1.nuevos(this.sueldos);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async eliminars(ids) {
        try {
            await this.sueldo_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async actualizars(sueldo_update_requests, updates_columnas) {
        try {
            this.sueldos = new Array();
            sueldo_update_request_1.SueldoUpdateRequest.setSueldos(sueldo_update_requests, this.sueldos);
            await this.sueldo_logici1.actualizars(this.sueldos, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async guardarCambios(news_sueldos, ids_deletes_sueldos, updates_sueldos, updates_columnas) {
        try {
            await this.sueldo_logici1.nuevos(news_sueldos);
            await this.sueldo_logici1.eliminars(ids_deletes_sueldos);
            await this.sueldo_logici1.actualizars(updates_sueldos, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.sueldo_return_view;
    }
    async getFks() {
        try {
            await this.sueldo_logici1.getFks();
            this.sueldo_fk_return_view_dto.docentesFK = this.sueldo_logici1.docentesFK;
            return this.sueldo_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let sueldos = new Array();
        try {
            this.relations1 = {
                docente: true
            };
            this.sueldos = await this.sueldo_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return sueldos;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(sueldo_1.Sueldo.SUELDO)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sueldo_create_request_1.SueldoCreateRequest]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(sueldo_1.Sueldo.SUELDO)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sueldo_update_request_1.SueldoUpdateRequest]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_sueldos', new common_1.ParseArrayPipe({ items: sueldo_create_request_1.SueldoCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_sueldos', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_sueldos', new common_1.ParseArrayPipe({ items: sueldo_update_request_1.SueldoUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_sueldos')),
    __param(1, (0, common_1.Body)('ids_deletes_sueldos')),
    __param(2, (0, common_1.Body)('updates_sueldos')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], SueldoController.prototype, "getTodosEntitiesDto", null);
SueldoController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/financiero/sueldo_api'),
    __metadata("design:paramtypes", [sueldo_logic_1.SueldoLogic])
], SueldoController);
exports.SueldoController = SueldoController;
//# sourceMappingURL=sueldo.controller.js.map