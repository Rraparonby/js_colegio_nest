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
exports.MatriculaUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const matricula_1 = require("../../../domain/model/matricula");
class MatriculaUpdateRequest {
    constructor() {
        this.id = -1;
        this.updated_at = new Date();
        this.anio = 0;
        this.costo = 0.0;
        this.fecha = new Date();
        this.pagado = false;
    }
    static setMatricula(matricula_update_request1, matricula1) {
        matricula1.id = matricula_update_request1.id;
        matricula1.updated_at = matricula_update_request1.updated_at;
        matricula1.anio = matricula_update_request1.anio;
        matricula1.costo = matricula_update_request1.costo;
        matricula1.fecha = matricula_update_request1.fecha;
        matricula1.pagado = matricula_update_request1.pagado;
    }
    static setMatriculas(matricula_update_requests, matriculas) {
        let matricula1;
        for (let matricula_update_request1 of matricula_update_requests) {
            matricula1 = new matricula_1.Matricula();
            MatriculaUpdateRequest.setMatricula(matricula_update_request1, matricula1);
            matriculas.push(matricula1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MatriculaUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MatriculaUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MatriculaUpdateRequest.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MatriculaUpdateRequest.prototype, "costo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MatriculaUpdateRequest.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], MatriculaUpdateRequest.prototype, "pagado", void 0);
exports.MatriculaUpdateRequest = MatriculaUpdateRequest;
//# sourceMappingURL=matricula_update.request.js.map