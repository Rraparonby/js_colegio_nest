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
exports.MatriculaController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const matricula_1 = require("../../domain/model/matricula");
const matricula_logic_1 = require("../../application/logic/matricula.logic");
const matricula_return_view_return_1 = require("../../infrastructure/util/return/matricula_return_view.return");
const matricula_create_request_1 = require("../../infrastructure/util/request/matricula_create.request");
const matricula_update_request_1 = require("../../infrastructure/util/request/matricula_update.request");
const matricula_fk_return_view_return_1 = require("../../infrastructure/util/return/matricula_fk_return_view.return");
let MatriculaController = class MatriculaController extends general_entity_controller_1.GeneralEntityController {
    constructor(matricula_logici1) {
        super();
        this.matricula_logici1 = matricula_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.matricula1 = new matricula_1.Matricula();
        this.matriculas = new Array();
        this.matricula_return_view = new matricula_return_view_return_1.MatriculaReturnView();
        this.matricula_fk_return_view_dto = new matricula_fk_return_view_return_1.MatriculaFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.matricula_return_view.setReturnView(tipo_accion_enum1, this.matricula1, this.matriculas);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.matriculas = await this.matricula_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.matriculas = await this.matricula_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.matriculas = await this.matricula_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.builder_object_matricula1 = this.matricula_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.matriculas = await this.matricula_logici1.getBuscar(this.builder_object_matricula1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                alumno: true
            };
            this.builder_object_matricula1 = this.matricula_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.matricula1 = await this.matricula_logici1.getBuscarUno(this.builder_object_matricula1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async nuevo(matricula_create_request1) {
        try {
            this.matricula1 = new matricula_1.Matricula();
            matricula_create_request_1.MatriculaCreateRequest.setMatricula(matricula_create_request1, this.matricula1);
            this.result = await this.matricula_logici1.nuevo(this.matricula1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async actualizar(matricula_update_request1) {
        try {
            matricula_update_request_1.MatriculaUpdateRequest.setMatricula(matricula_update_request1, this.matricula1);
            this.result = await this.matricula_logici1.actualizar(this.matricula1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.matricula_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async nuevos(matricula_create_requests) {
        try {
            this.matriculas = new Array();
            matricula_create_request_1.MatriculaCreateRequest.setMatriculas(matricula_create_requests, this.matriculas);
            await this.matricula_logici1.nuevos(this.matriculas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async eliminars(ids) {
        try {
            await this.matricula_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async actualizars(matricula_update_requests, updates_columnas) {
        try {
            this.matriculas = new Array();
            matricula_update_request_1.MatriculaUpdateRequest.setMatriculas(matricula_update_requests, this.matriculas);
            await this.matricula_logici1.actualizars(this.matriculas, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async guardarCambios(news_matriculas, ids_deletes_matriculas, updates_matriculas, updates_columnas) {
        try {
            await this.matricula_logici1.nuevos(news_matriculas);
            await this.matricula_logici1.eliminars(ids_deletes_matriculas);
            await this.matricula_logici1.actualizars(updates_matriculas, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.matricula_return_view;
    }
    async getFks() {
        try {
            await this.matricula_logici1.getFks();
            this.matricula_fk_return_view_dto.alumnosFK = this.matricula_logici1.alumnosFK;
            return this.matricula_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let matriculas = new Array();
        try {
            this.relations1 = {
                alumno: true
            };
            this.matriculas = await this.matricula_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return matriculas;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(matricula_1.Matricula.MATRICULA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [matricula_create_request_1.MatriculaCreateRequest]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(matricula_1.Matricula.MATRICULA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [matricula_update_request_1.MatriculaUpdateRequest]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_matriculas', new common_1.ParseArrayPipe({ items: matricula_create_request_1.MatriculaCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_matriculas', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_matriculas', new common_1.ParseArrayPipe({ items: matricula_update_request_1.MatriculaUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_matriculas')),
    __param(1, (0, common_1.Body)('ids_deletes_matriculas')),
    __param(2, (0, common_1.Body)('updates_matriculas')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "getTodosEntitiesDto", null);
MatriculaController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/proceso/matricula_api'),
    __metadata("design:paramtypes", [matricula_logic_1.MatriculaLogic])
], MatriculaController);
exports.MatriculaController = MatriculaController;
//# sourceMappingURL=matricula.controller.js.map