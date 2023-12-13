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
exports.MateriaController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const materia_1 = require("../../domain/model/materia");
const materia_logic_1 = require("../../application/logic/materia.logic");
const materia_return_view_return_1 = require("../../infrastructure/util/return/materia_return_view.return");
const materia_create_request_1 = require("../../infrastructure/util/request/materia_create.request");
const materia_update_request_1 = require("../../infrastructure/util/request/materia_update.request");
let MateriaController = class MateriaController extends general_entity_controller_1.GeneralEntityController {
    constructor(materia_logici1) {
        super();
        this.materia_logici1 = materia_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.materia1 = new materia_1.Materia();
        this.materias = new Array();
        this.materia_return_view = new materia_return_view_return_1.MateriaReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.materia_return_view.setReturnView(tipo_accion_enum1, this.materia1, this.materias);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {};
            this.materias = await this.materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {};
            this.materias = await this.materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {};
            this.materias = await this.materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {};
            this.builder_object_materia1 = this.materia_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.materias = await this.materia_logici1.getBuscar(this.builder_object_materia1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {};
            this.builder_object_materia1 = this.materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.materia1 = await this.materia_logici1.getBuscarUno(this.builder_object_materia1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async nuevo(materia_create_request1) {
        try {
            this.materia1 = new materia_1.Materia();
            materia_create_request_1.MateriaCreateRequest.setMateria(materia_create_request1, this.materia1);
            this.result = await this.materia_logici1.nuevo(this.materia1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async actualizar(materia_update_request1) {
        try {
            materia_update_request_1.MateriaUpdateRequest.setMateria(materia_update_request1, this.materia1);
            this.result = await this.materia_logici1.actualizar(this.materia1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.materia_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async nuevos(materia_create_requests) {
        try {
            this.materias = new Array();
            materia_create_request_1.MateriaCreateRequest.setMaterias(materia_create_requests, this.materias);
            await this.materia_logici1.nuevos(this.materias);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async eliminars(ids) {
        try {
            await this.materia_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async actualizars(materia_update_requests, updates_columnas) {
        try {
            this.materias = new Array();
            materia_update_request_1.MateriaUpdateRequest.setMaterias(materia_update_requests, this.materias);
            await this.materia_logici1.actualizars(this.materias, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async guardarCambios(news_materias, ids_deletes_materias, updates_materias, updates_columnas) {
        try {
            await this.materia_logici1.nuevos(news_materias);
            await this.materia_logici1.eliminars(ids_deletes_materias);
            await this.materia_logici1.actualizars(updates_materias, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getTodosRelaciones(pagination1) {
        try {
            this.relations1 = {
                alumnos: true,
                alumno_materias: true,
                docentes: true,
                notas: true,
                docente_materias: true
            };
            this.materias = await this.materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getSeleccionarRelaciones(id) {
        try {
            this.relations1 = {
                alumnos: true,
                alumno_materias: true,
                docentes: true,
                notas: true,
                docente_materias: true
            };
            this.builder_object_materia1 = this.materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.materia1 = await this.materia_logici1.getBuscarUno(this.builder_object_materia1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.materia_return_view;
    }
    async getTodosEntitiesDto(pagination1) {
        let materias = new Array();
        try {
            this.relations1 = {};
            this.materias = await this.materia_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return materias;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(materia_1.Materia.MATERIA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [materia_create_request_1.MateriaCreateRequest]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(materia_1.Materia.MATERIA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [materia_update_request_1.MateriaUpdateRequest]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_materias', new common_1.ParseArrayPipe({ items: materia_create_request_1.MateriaCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_materias', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_materias', new common_1.ParseArrayPipe({ items: materia_update_request_1.MateriaUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_materias')),
    __param(1, (0, common_1.Body)('ids_deletes_materias')),
    __param(2, (0, common_1.Body)('updates_materias')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_RELACIONES),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getTodosRelaciones", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR_RELACIONES),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getSeleccionarRelaciones", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "getTodosEntitiesDto", null);
MateriaController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/estructura/materia_api'),
    __metadata("design:paramtypes", [materia_logic_1.MateriaLogic])
], MateriaController);
exports.MateriaController = MateriaController;
//# sourceMappingURL=materia.controller.js.map