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
exports.AlumnoMateriaController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const alumno_materia_1 = require("../../domain/model/alumno_materia");
const alumno_materia_logic_1 = require("../../application/logic/alumno_materia.logic");
const alumno_materia_return_view_return_1 = require("../../infrastructure/util/return/alumno_materia_return_view.return");
const alumno_materia_create_request_1 = require("../../infrastructure/util/request/alumno_materia_create.request");
const alumno_materia_update_request_1 = require("../../infrastructure/util/request/alumno_materia_update.request");
const alumno_materia_fk_return_view_return_1 = require("../../infrastructure/util/return/alumno_materia_fk_return_view.return");
let AlumnoMateriaController = class AlumnoMateriaController extends general_entity_controller_1.GeneralEntityController {
    constructor(alumno_materia_logici1) {
        super();
        this.alumno_materia_logici1 = alumno_materia_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.alumno_materia1 = new alumno_materia_1.AlumnoMateria();
        this.alumno_materias = new Array();
        this.alumno_materia_return_view = new alumno_materia_return_view_return_1.AlumnoMateriaReturnView();
        this.alumno_materia_fk_return_view_dto = new alumno_materia_fk_return_view_return_1.AlumnoMateriaFKReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.alumno_materia_return_view.setReturnView(tipo_accion_enum1, this.alumno_materia1, this.alumno_materias);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true
            };
            this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true
            };
            this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true
            };
            this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true
            };
            this.builder_object_alumno_materia1 = this.alumno_materia_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.alumno_materias = await this.alumno_materia_logici1.getBuscar(this.builder_object_alumno_materia1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {
                alumno: true,
                materia: true
            };
            this.builder_object_alumno_materia1 = this.alumno_materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.alumno_materia1 = await this.alumno_materia_logici1.getBuscarUno(this.builder_object_alumno_materia1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async nuevo(alumno_materia_create_request1) {
        try {
            this.alumno_materia1 = new alumno_materia_1.AlumnoMateria();
            alumno_materia_create_request_1.AlumnoMateriaCreateRequest.setAlumnoMateria(alumno_materia_create_request1, this.alumno_materia1);
            this.result = await this.alumno_materia_logici1.nuevo(this.alumno_materia1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async actualizar(alumno_materia_update_request1) {
        try {
            alumno_materia_update_request_1.AlumnoMateriaUpdateRequest.setAlumnoMateria(alumno_materia_update_request1, this.alumno_materia1);
            this.result = await this.alumno_materia_logici1.actualizar(this.alumno_materia1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.alumno_materia_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async nuevos(alumno_materia_create_requests) {
        try {
            this.alumno_materias = new Array();
            alumno_materia_create_request_1.AlumnoMateriaCreateRequest.setAlumnoMaterias(alumno_materia_create_requests, this.alumno_materias);
            await this.alumno_materia_logici1.nuevos(this.alumno_materias);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async eliminars(ids) {
        try {
            await this.alumno_materia_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async actualizars(alumno_materia_update_requests, updates_columnas) {
        try {
            this.alumno_materias = new Array();
            alumno_materia_update_request_1.AlumnoMateriaUpdateRequest.setAlumnoMaterias(alumno_materia_update_requests, this.alumno_materias);
            await this.alumno_materia_logici1.actualizars(this.alumno_materias, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async guardarCambios(news_alumno_materias, ids_deletes_alumno_materias, updates_alumno_materias, updates_columnas) {
        try {
            await this.alumno_materia_logici1.nuevos(news_alumno_materias);
            await this.alumno_materia_logici1.eliminars(ids_deletes_alumno_materias);
            await this.alumno_materia_logici1.actualizars(updates_alumno_materias, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_materia_return_view;
    }
    async getFks() {
        try {
            await this.alumno_materia_logici1.getFks();
            this.alumno_materia_fk_return_view_dto.alumnosFK = this.alumno_materia_logici1.alumnosFK;
            this.alumno_materia_fk_return_view_dto.materiasFK = this.alumno_materia_logici1.materiasFK;
            return this.alumno_materia_fk_return_view_dto;
        }
        catch (e) {
            throw e;
        }
    }
    async getTodosEntitiesDto(pagination1) {
        let alumno_materias = new Array();
        try {
            this.relations1 = {
                alumno: true,
                materia: true
            };
            this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return alumno_materias;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(alumno_materia_1.AlumnoMateria.ALUMNO_MATERIA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [alumno_materia_create_request_1.AlumnoMateriaCreateRequest]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(alumno_materia_1.AlumnoMateria.ALUMNO_MATERIA)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [alumno_materia_update_request_1.AlumnoMateriaUpdateRequest]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_alumno_materias', new common_1.ParseArrayPipe({ items: alumno_materia_create_request_1.AlumnoMateriaCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_alumno_materias', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_alumno_materias', new common_1.ParseArrayPipe({ items: alumno_materia_update_request_1.AlumnoMateriaUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_alumno_materias')),
    __param(1, (0, common_1.Body)('ids_deletes_alumno_materias')),
    __param(2, (0, common_1.Body)('updates_alumno_materias')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GET_FKS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getFks", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoMateriaController.prototype, "getTodosEntitiesDto", null);
AlumnoMateriaController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/estructura/alumno_materia_api'),
    __metadata("design:paramtypes", [alumno_materia_logic_1.AlumnoMateriaLogic])
], AlumnoMateriaController);
exports.AlumnoMateriaController = AlumnoMateriaController;
//# sourceMappingURL=alumno_materia.controller.js.map