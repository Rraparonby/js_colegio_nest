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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const docente_1 = require("../../../domain/model/docente");
class DocenteUpdateRequest {
    constructor() {
        this.id = -1;
        this.updated_at = new Date();
        this.nombre = '';
        this.apellido = '';
        this.fecha_nacimiento = new Date();
        this.anios_experiencia = 0;
        this.nota_evaluacion = 0.0;
    }
    static setDocente(docente_update_request1, docente1) {
        docente1.id = docente_update_request1.id;
        docente1.updated_at = docente_update_request1.updated_at;
        docente1.nombre = docente_update_request1.nombre;
        docente1.apellido = docente_update_request1.apellido;
        docente1.fecha_nacimiento = docente_update_request1.fecha_nacimiento;
        docente1.anios_experiencia = docente_update_request1.anios_experiencia;
        docente1.nota_evaluacion = docente_update_request1.nota_evaluacion;
    }
    static setDocentes(docente_update_requests, docentes) {
        let docente1;
        for (let docente_update_request1 of docente_update_requests) {
            docente1 = new docente_1.Docente();
            DocenteUpdateRequest.setDocente(docente_update_request1, docente1);
            docentes.push(docente1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DocenteUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], DocenteUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DocenteUpdateRequest.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DocenteUpdateRequest.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], DocenteUpdateRequest.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DocenteUpdateRequest.prototype, "anios_experiencia", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DocenteUpdateRequest.prototype, "nota_evaluacion", void 0);
exports.DocenteUpdateRequest = DocenteUpdateRequest;
//# sourceMappingURL=docente_update.request.js.map