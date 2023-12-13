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
exports.DocenteMateriaController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const docente_materia_1 = require("../../domain/model/docente_materia");
const docente_materia_logic_1 = require("../../application/logic/docente_materia.logic");
const docente_materia_return_view_return_1 = require("../../infrastructure/util/return/docente_materia_return_view.return");
const docente_materia_create_request_1 = require("../../infrastructure/util/request/docente_materia_create.request");
const docente_materia_update_request_1 = require("../../infrastructure/util/request/docente_materia_update.request");
const docente_materia_fk_return_view_return_1 = require("../../infrastructure/util/return/docente_materia_fk_return_view.return");
let DocenteMateriaController = class DocenteMateriaController extends general_entity_controller_1.GeneralEntityController {
    constructor(docente_materia_logici1) {
        super();
        this.docente_materia_logici1 = docente_materia_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.docente_materia1 = new docente_materia_1.DocenteMateria();
        this.docente_materias = new Array();
        this.docente_materia_return_view = new docente_materia_return_view_return_1.DocenteMateriaReturnView();
        this.docente_materia_fk_return_view_dto = new docente_materia_fk_return_view_return_1.DocenteMateriaFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.docente_materia_return_view.setReturnView(tipo_accion_enum1, this.docente_materia1, this.docente_materias);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                docente: true,
                materia: true
            };
            this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                docente: true,
                materia: true
            };
            this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                docente: true,
                materia: true
            };
            this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                docente: true,
                materia: true
            };
            this.builder_object_docente_materia1 = this.docente_materia_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.docente_materias = await this.docente_materia_logici1.getBuscar(this.builder_object_docente_materia1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                docente: true,
                materia: true
            };
            this.builder_object_docente_materia1 = this.docente_materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.docente_materia1 = await this.docente_materia_logici1.getBuscarUno(this.builder_object_docente_materia1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async nuevo(docente_materia_create_request1) {
        try {
            this.docente_materia1 = new docente_materia_1.DocenteMateria();
            docente_materia_create_request_1.DocenteMateriaCreateRequest.setDocenteMateria(docente_materia_create_request1, this.docente_materia1);
            this.result = await this.docente_materia_logici1.nuevo(this.docente_materia1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async actualizar(docente_materia_update_request1) {
        try {
            docente_materia_update_request_1.DocenteMateriaUpdateRequest.setDocenteMateria(docente_materia_update_request1, this.docente_materia1);
            this.result = await this.docente_materia_logici1.actualizar(this.docente_materia1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.docente_materia_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async nuevos(docente_materia_create_requests) {
        try {
            this.docente_materias = new Array();
            docente_materia_create_request_1.DocenteMateriaCreateRequest.setDocenteMaterias(docente_materia_create_requests, this.docente_materias);
            await this.docente_materia_logici1.nuevos(this.docente_materias);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async eliminars(ids) {
        try {
            await this.docente_materia_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async actualizars(docente_materia_update_requests, updates_columnas) {
        try {
            this.docente_materias = new Array();
            docente_materia_update_request_1.DocenteMateriaUpdateRequest.setDocenteMaterias(docente_materia_update_requests, this.docente_materias);
            await this.docente_materia_logici1.actualizars(this.docente_materias, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async guardarCambios(news_docente_materias, ids_deletes_docente_materias, updates_docente_materias, updates_columnas) {
        try {
            await this.docente_materia_logici1.nuevos(news_docente_materias);
            await this.docente_materia_logici1.eliminars(ids_deletes_docente_materias);
            await this.docente_materia_logici1.actualizars(updates_docente_materias, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.docente_materia_return_view;
    }
    async getFks() {
        try {
            await this.docente_materia_logici1.getFks();
            this.docente_materia_fk_return_view_dto.docentesFK = this.docente_materia_logici1.docentesFK;
            this.docente_materia_fk_return_view_dto.materiasFK = this.docente_materia_logici1.materiasFK;
            return this.docente_materia_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let docente_materias = new Array();
        try {
            this.relations1 = {
                docente: true,
                materia: true
            };
            this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return docente_materias;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(docente_materia_1.DocenteMateria.DOCENTE_MATERIA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docente_materia_create_request_1.DocenteMateriaCreateRequest]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(docente_materia_1.DocenteMateria.DOCENTE_MATERIA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docente_materia_update_request_1.DocenteMateriaUpdateRequest]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_docente_materias', new common_1.ParseArrayPipe({ items: docente_materia_create_request_1.DocenteMateriaCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_docente_materias', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_docente_materias', new common_1.ParseArrayPipe({ items: docente_materia_update_request_1.DocenteMateriaUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_docente_materias')),
    __param(1, (0, common_1.Body)('ids_deletes_docente_materias')),
    __param(2, (0, common_1.Body)('updates_docente_materias')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], DocenteMateriaController.prototype, "getTodosEntitiesDto", null);
DocenteMateriaController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/estructura/docente_materia_api'),
    __metadata("design:paramtypes", [docente_materia_logic_1.DocenteMateriaLogic])
], DocenteMateriaController);
exports.DocenteMateriaController = DocenteMateriaController;
//# sourceMappingURL=docente_materia.controller.js.map