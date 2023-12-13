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
exports.PensionUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const pension_1 = require("../../../domain/model/pension");
class PensionUpdateRequest {
    constructor() {
        this.id = -1;
        this.updated_at = new Date();
        this.id_alumno = -1;
        this.id_alumno_descripcion = '';
        this.anio = 0;
        this.mes = 0;
        this.valor = 0.0;
        this.cobrado = false;
    }
    static setPension(pension_update_request1, pension1) {
        pension1.id = pension_update_request1.id;
        pension1.updated_at = pension_update_request1.updated_at;
        pension1.id_alumno = pension_update_request1.id_alumno;
        pension1.anio = pension_update_request1.anio;
        pension1.mes = pension_update_request1.mes;
        pension1.valor = pension_update_request1.valor;
        pension1.cobrado = pension_update_request1.cobrado;
    }
    static setPensions(pension_update_requests, pensions) {
        let pension1;
        for (let pension_update_request1 of pension_update_requests) {
            pension1 = new pension_1.Pension();
            PensionUpdateRequest.setPension(pension_update_request1, pension1);
            pensions.push(pension1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PensionUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], PensionUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PensionUpdateRequest.prototype, "id_alumno", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PensionUpdateRequest.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PensionUpdateRequest.prototype, "mes", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PensionUpdateRequest.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], PensionUpdateRequest.prototype, "cobrado", void 0);
exports.PensionUpdateRequest = PensionUpdateRequest;
//# sourceMappingURL=pension_update.request.js.map