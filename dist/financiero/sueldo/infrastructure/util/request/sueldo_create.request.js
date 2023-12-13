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
exports.SueldoCreateRequest = void 0;
const class_validator_1 = require("class-validator");
const sueldo_1 = require("../../../domain/model/sueldo");
class SueldoCreateRequest {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_docente = -1;
        this.id_docente_descripcion = '';
        this.anio = 0;
        this.mes = 0;
        this.valor = 0.0;
        this.cobrado = false;
    }
    static setSueldo(sueldo_create_request1, sueldo1) {
        sueldo1.created_at = sueldo_create_request1.created_at;
        sueldo1.updated_at = sueldo_create_request1.updated_at;
        sueldo1.id_docente = sueldo_create_request1.id_docente;
        sueldo1.anio = sueldo_create_request1.anio;
        sueldo1.mes = sueldo_create_request1.mes;
        sueldo1.valor = sueldo_create_request1.valor;
        sueldo1.cobrado = sueldo_create_request1.cobrado;
    }
    static setSueldos(sueldo_create_requests, sueldos) {
        let sueldo1;
        for (let sueldo_create_request1 of sueldo_create_requests) {
            sueldo1 = new sueldo_1.Sueldo();
            SueldoCreateRequest.setSueldo(sueldo_create_request1, sueldo1);
            sueldos.push(sueldo1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], SueldoCreateRequest.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], SueldoCreateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SueldoCreateRequest.prototype, "id_docente", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SueldoCreateRequest.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SueldoCreateRequest.prototype, "mes", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SueldoCreateRequest.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], SueldoCreateRequest.prototype, "cobrado", void 0);
exports.SueldoCreateRequest = SueldoCreateRequest;
//# sourceMappingURL=sueldo_create.request.js.map