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
exports.NotaController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const nota_1 = require("../../domain/model/nota");
const nota_logic_1 = require("../../application/logic/nota.logic");
const nota_return_view_return_1 = require("../../infrastructure/util/return/nota_return_view.return");
const nota_create_request_1 = require("../../infrastructure/util/request/nota_create.request");
const nota_update_request_1 = require("../../infrastructure/util/request/nota_update.request");
const nota_fk_return_view_return_1 = require("../../infrastructure/util/return/nota_fk_return_view.return");
let NotaController = class NotaController extends general_entity_controller_1.GeneralEntityController {
    constructor(nota_logici1) {
        super();
        this.nota_logici1 = nota_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.nota1 = new nota_1.Nota();
        this.notas = new Array();
        this.nota_return_view = new nota_return_view_return_1.NotaReturnView();
        this.nota_fk_return_view_dto = new nota_fk_return_view_return_1.NotaFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.nota_return_view.setReturnView(tipo_accion_enum1, this.nota1, this.notas);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true,
                docente: true
            };
            this.notas = await this.nota_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true,
                docente: true
            };
            this.notas = await this.nota_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true,
                docente: true
            };
            this.notas = await this.nota_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true,
                docente: true
            };
            this.builder_object_nota1 = this.nota_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.notas = await this.nota_logici1.getBuscar(this.builder_object_nota1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true,
                docente: true
            };
            this.builder_object_nota1 = this.nota_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.nota1 = await this.nota_logici1.getBuscarUno(this.builder_object_nota1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async nuevo(nota_create_request1) {
        try {
            this.nota1 = new nota_1.Nota();
            nota_create_request_1.NotaCreateRequest.setNota(nota_create_request1, this.nota1);
            this.result = await this.nota_logici1.nuevo(this.nota1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async actualizar(nota_update_request1) {
        try {
            nota_update_request_1.NotaUpdateRequest.setNota(nota_update_request1, this.nota1);
            this.result = await this.nota_logici1.actualizar(this.nota1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.nota_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async nuevos(nota_create_requests) {
        try {
            this.notas = new Array();
            nota_create_request_1.NotaCreateRequest.setNotas(nota_create_requests, this.notas);
            await this.nota_logici1.nuevos(this.notas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async eliminars(ids) {
        try {
            await this.nota_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async actualizars(nota_update_requests, updates_columnas) {
        try {
            this.notas = new Array();
            nota_update_request_1.NotaUpdateRequest.setNotas(nota_update_requests, this.notas);
            await this.nota_logici1.actualizars(this.notas, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async guardarCambios(news_notas, ids_deletes_notas, updates_notas, updates_columnas) {
        try {
            await this.nota_logici1.nuevos(news_notas);
            await this.nota_logici1.eliminars(ids_deletes_notas);
            await this.nota_logici1.actualizars(updates_notas, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.nota_return_view;
    }
    async getFks() {
        try {
            await this.nota_logici1.getFks();
            this.nota_fk_return_view_dto.alumnosFK = this.nota_logici1.alumnosFK;
            this.nota_fk_return_view_dto.materiasFK = this.nota_logici1.materiasFK;
            this.nota_fk_return_view_dto.docentesFK = this.nota_logici1.docentesFK;
            return this.nota_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let notas = new Array();
        try {
            this.relations1 = {
                alumno: true,
                materia: true,
                docente: true
            };
            this.notas = await this.nota_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return notas;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(nota_1.Nota.NOTA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nota_create_request_1.NotaCreateRequest]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(nota_1.Nota.NOTA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nota_update_request_1.NotaUpdateRequest]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_notas', new common_1.ParseArrayPipe({ items: nota_create_request_1.NotaCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_notas', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_notas', new common_1.ParseArrayPipe({ items: nota_update_request_1.NotaUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_notas')),
    __param(1, (0, common_1.Body)('ids_deletes_notas')),
    __param(2, (0, common_1.Body)('updates_notas')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "getTodosEntitiesDto", null);
NotaController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/proceso/nota_api'),
    __metadata("design:paramtypes", [nota_logic_1.NotaLogic])
], NotaController);
exports.NotaController = NotaController;
//# sourceMappingURL=nota.controller.js.map