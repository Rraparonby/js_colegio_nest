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
exports.AlumnoController = void 0;
const common_1 = require("@nestjs/common");
const constantes_1 = require("../../../../base/util/constantes");
const tipo_accion_enum_1 = require("../../../../base/util/tipo_accion_enum");
const general_entity_controller_1 = require("../../../../base/infrastructure/controller/general_entity_controller");
const pagination_1 = require("../../../../base/application/logic/pagination");
const alumno_1 = require("../../domain/model/alumno");
const alumno_logic_1 = require("../../application/logic/alumno.logic");
const alumno_return_view_return_1 = require("../../infrastructure/util/return/alumno_return_view.return");
const alumno_create_request_1 = require("../../infrastructure/util/request/alumno_create.request");
const alumno_update_request_1 = require("../../infrastructure/util/request/alumno_update.request");
let AlumnoController = class AlumnoController extends general_entity_controller_1.GeneralEntityController {
    constructor(alumno_logici1) {
        super();
        this.alumno_logici1 = alumno_logici1;
        this.pagination1 = new pagination_1.Pagination();
        this.alumno1 = new alumno_1.Alumno();
        this.alumnos = new Array();
        this.alumno_return_view = new alumno_return_view_return_1.AlumnoReturnView();
    }
    setReturnView(tipo_accion_enum1) {
        this.alumno_return_view.setReturnView(tipo_accion_enum1, this.alumno1, this.alumnos);
    }
    async getDefault(pagination1) {
        try {
            this.relations1 = {};
            this.alumnos = await this.alumno_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getIndex(pagination1) {
        try {
            this.relations1 = {};
            this.alumnos = await this.alumno_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getTodos(pagination1) {
        try {
            this.relations1 = {};
            this.alumnos = await this.alumno_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getBuscar(pagination1, req) {
        try {
            this.relations1 = {};
            this.builder_object_alumno1 = this.alumno_logici1.getBuilderFunctionObjectParametroBuscar(req);
            this.alumnos = await this.alumno_logici1.getBuscar(this.builder_object_alumno1, pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getSeleccionar(id) {
        try {
            this.relations1 = {};
            this.builder_object_alumno1 = this.alumno_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.alumno1 = await this.alumno_logici1.getBuscarUno(this.builder_object_alumno1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async nuevo(alumno_create_request1) {
        try {
            this.alumno1 = new alumno_1.Alumno();
            alumno_create_request_1.AlumnoCreateRequest.setAlumno(alumno_create_request1, this.alumno1);
            this.result = await this.alumno_logici1.nuevo(this.alumno1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async actualizar(alumno_update_request1) {
        try {
            alumno_update_request_1.AlumnoUpdateRequest.setAlumno(alumno_update_request1, this.alumno1);
            this.result = await this.alumno_logici1.actualizar(this.alumno1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async eliminar(id) {
        try {
            this.result = await this.alumno_logici1.eliminar(id);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async nuevos(alumno_create_requests) {
        try {
            this.alumnos = new Array();
            alumno_create_request_1.AlumnoCreateRequest.setAlumnos(alumno_create_requests, this.alumnos);
            await this.alumno_logici1.nuevos(this.alumnos);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.NUEVO);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async eliminars(ids) {
        try {
            await this.alumno_logici1.eliminars(ids);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ELIMINAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async actualizars(alumno_update_requests, updates_columnas) {
        try {
            this.alumnos = new Array();
            alumno_update_request_1.AlumnoUpdateRequest.setAlumnos(alumno_update_requests, this.alumnos);
            await this.alumno_logici1.actualizars(this.alumnos, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.ACTUALIZAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async guardarCambios(news_alumnos, ids_deletes_alumnos, updates_alumnos, updates_columnas) {
        try {
            await this.alumno_logici1.nuevos(news_alumnos);
            await this.alumno_logici1.eliminars(ids_deletes_alumnos);
            await this.alumno_logici1.actualizars(updates_alumnos, updates_columnas);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.GUARDAR_CAMBIOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getTodosRelaciones(pagination1) {
        try {
            this.relations1 = {
                matricula: true,
                alumno_materias: true,
                materias: true,
                pensions: true,
                notas: true
            };
            this.alumnos = await this.alumno_logici1.getTodos(pagination1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.BUSCAR_TODOS);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getSeleccionarRelaciones(id) {
        try {
            this.relations1 = {
                matricula: true,
                alumno_materias: true,
                materias: true,
                pensions: true,
                notas: true
            };
            this.builder_object_alumno1 = this.alumno_logici1.getBuilderFunctionObjectParametroSeleccionar(id);
            this.alumno1 = await this.alumno_logici1.getBuscarUno(this.builder_object_alumno1, this.relations1);
            this.setReturnView(tipo_accion_enum_1.TipoAccionEnum.SELECCIONAR);
        }
        catch (e) {
            throw e;
        }
        return this.alumno_return_view;
    }
    async getTodosEntitiesDto(pagination1) {
        let alumnos = new Array();
        try {
            this.relations1 = {};
            this.alumnos = await this.alumno_logici1.getTodos(pagination1, this.relations1);
        }
        catch (e) {
            throw e;
        }
        return alumnos;
    }
};
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.DEFAULT),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getDefault", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.INDEX),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.BUSCAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination, Object]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getBuscar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getSeleccionar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(alumno_1.Alumno.ALUMNO)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [alumno_create_request_1.AlumnoCreateRequest]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "nuevo", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(alumno_1.Alumno.ALUMNO)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [alumno_update_request_1.AlumnoUpdateRequest]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINAR),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.NUEVOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_alumnos', new common_1.ParseArrayPipe({ items: alumno_create_request_1.AlumnoCreateRequest }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "nuevos", null);
__decorate([
    (0, common_1.Delete)(constantes_1.Constantes.ELIMINARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('ids_deletes_alumnos', new common_1.ParseArrayPipe({ items: Number }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "eliminars", null);
__decorate([
    (0, common_1.Put)(constantes_1.Constantes.ACTUALIZARS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('updates_alumnos', new common_1.ParseArrayPipe({ items: alumno_update_request_1.AlumnoUpdateRequest }))),
    __param(1, (0, common_1.Body)('updates_columnas', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "actualizars", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.GUARDAR_CAMBIOS),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('news_alumnos')),
    __param(1, (0, common_1.Body)('ids_deletes_alumnos')),
    __param(2, (0, common_1.Body)('updates_alumnos')),
    __param(3, (0, common_1.Body)('updates_columnas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "guardarCambios", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_RELACIONES),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getTodosRelaciones", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.SELECCIONAR_RELACIONES),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.ID, common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getSeleccionarRelaciones", null);
__decorate([
    (0, common_1.Post)(constantes_1.Constantes.TODOS_ENTITIES_DTO),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)(constantes_1.Constantes.PAGINATION)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.Pagination]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "getTodosEntitiesDto", null);
AlumnoController = __decorate([
    (0, common_1.Controller)('/api/colegio_relaciones/estructura/alumno_api'),
    __metadata("design:paramtypes", [alumno_logic_1.AlumnoLogic])
], AlumnoController);
exports.AlumnoController = AlumnoController;
//# sourceMappingURL=alumno.controller.js.map