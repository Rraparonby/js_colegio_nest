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
exports.DocenteController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const docente_1 = require("../../domain/model/docente");
const docente_logic_1 = require("../../application/logic/docente.logic");
const docente_return_view_return_1 = require("../../infrastructure/util/return/docente_return_view.return");
const docente_create_request_1 = require("../../infrastructure/util/request/docente_create.request");
const docente_update_request_1 = require("../../infrastructure/util/request/docente_update.request");
let DocenteController = class DocenteController extends general_entity_controller_1.GeneralEntityController {
    constructor(docente_logici1) {
        super();
        this.docente_logici1 = docente_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.docente1 = new docente_1.Docente();
        this.docentes = new Array();
        this.docente_return_view = new docente_return_view_return_1.DocenteReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.docente_return_view.setReturnView(tipo_accion_enum1, this.docente1, this.docentes);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {};
            this.docentes = await this.docente_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {};
            this.docentes = await this.docente_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {};
            this.docentes = await this.docente_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {};
            this.builder_object_docente1 = this.docente_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.docentes = await this.docente_logici1.getBuscar(this.builder_object_docente1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {};
            this.builder_object_docente1 = this.docente_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.docente1 = await this.docente_logici1.getBuscarUno(this.builder_object_docente1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async nuevo(docente_create_request1) {
        try {
            this.docente1 = new docente_1.Docente();
            docente_create_request_1.DocenteCreateRequest.setDocente(docente_create_request1, this.docente1);
            this.result = await this.docente_logici1.nuevo(this.docente1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async actualizar(docente_update_request1) {
        try {
            docente_update_request_1.DocenteUpdateRequest.setDocente(docente_update_request1, this.docente1);
            this.result = await this.docente_logici1.actualizar(this.docente1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.docente_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async nuevos(docente_create_requests) {
        try {
            this.docentes = new Array();
            docente_create_request_1.DocenteCreateRequest.setDocentes(docente_create_requests, this.docentes);
            await this.docente_logici1.nuevos(this.docentes);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async eliminars(ids) {
        try {
            await this.docente_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async actualizars(docente_update_requests, updates_columnas) {
        try {
            this.docentes = new Array();
            docente_update_request_1.DocenteUpdateRequest.setDocentes(docente_update_requests, this.docentes);
            await this.docente_logici1.actualizars(this.docentes, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async guardarCambios(news_docentes, ids_deletes_docentes, updates_docentes, updates_columnas) {
        try {
            await this.docente_logici1.nuevos(news_docentes);
            await this.docente_logici1.eliminars(ids_deletes_docentes);
            await this.docente_logici1.actualizars(updates_docentes, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getTodosRelaciones(pagination1) {
        try {
            this.relations1 = {
                sueldos: true,
                contrato: true,
                materias: true,
                notas: true,
                docente_materias: true
            };
            this.docentes = await this.docente_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getSeleccionarRelaciones(id) {
        try {
            this.relations1 = {
                sueldos: true,
                contrato: true,
                materias: true,
                notas: true,
                docente_materias: true
            };
            this.builder_object_docente1 = this.docente_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.docente1 = await this.docente_logici1.getBuscarUno(this.builder_object_docente1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_return_view;
    }
    async getTodosEntitiesDto(pagination1) {
        let docentes = new Array();
        try {
            this.relations1 = {};
            this.docentes = await this.docente_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return docentes;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(docente_1.Docente.DOCENTE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docente_create_request_1.DocenteCreateRequest]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(docente_1.Docente.DOCENTE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docente_update_request_1.DocenteUpdateRequest]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_docentes', new common_1.ParseArrayPipe({ items: docente_create_request_1.DocenteCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_docentes', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_docentes', new common_1.ParseArrayPipe({ items: docente_update_request_1.DocenteUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_docentes')),
    __param(1, (0, common_1.Body)('ids_deletes_docentes')),
    __param(2, (0, common_1.Body)('updates_docentes')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_RELACIONES),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getTodosRelaciones", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR_RELACIONES),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getSeleccionarRelaciones", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getTodosEntitiesDto", null);
DocenteController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/estructura/docente_api'),
    __metadata("design:paramtypes", [docente_logic_1.DocenteLogic])
], DocenteController);
exports.DocenteController = DocenteController;
//# sourceMappingURL=docente.controller.js.map