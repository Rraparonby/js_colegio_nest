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
exports.MatriculaCreateRequest = void 0;
const class_validator_1 = require("class-validator");
const matricula_1 = require("../../../domain/model/matricula");
class MatriculaCreateRequest {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.anio = 0;
        this.costo = 0.0;
        this.fecha = new Date();
        this.pagado = false;
    }
    static setMatricula(matricula_create_request1, matricula1) {
        matricula1.created_at = matricula_create_request1.created_at;
        matricula1.updated_at = matricula_create_request1.updated_at;
        matricula1.anio = matricula_create_request1.anio;
        matricula1.costo = matricula_create_request1.costo;
        matricula1.fecha = matricula_create_request1.fecha;
        matricula1.pagado = matricula_create_request1.pagado;
    }
    static setMatriculas(matricula_create_requests, matriculas) {
        let matricula1;
        for (let matricula_create_request1 of matricula_create_requests) {
            matricula1 = new matricula_1.Matricula();
            MatriculaCreateRequest.setMatricula(matricula_create_request1, matricula1);
            matriculas.push(matricula1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MatriculaCreateRequest.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MatriculaCreateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MatriculaCreateRequest.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MatriculaCreateRequest.prototype, "costo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MatriculaCreateRequest.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], MatriculaCreateRequest.prototype, "pagado", void 0);
exports.MatriculaCreateRequest = MatriculaCreateRequest;
//# sourceMappingURL=matricula_create.request.js.map