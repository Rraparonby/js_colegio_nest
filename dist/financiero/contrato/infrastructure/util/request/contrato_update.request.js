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
exports.ContratoUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const contrato_1 = require("../../../domain/model/contrato");
class ContratoUpdateRequest {
    constructor() {
        this.id = -1;
        this.updated_at = new Date();
        this.anio = 0;
        this.valor = 0.0;
        this.fecha = new Date();
        this.firmado = false;
    }
    static setContrato(contrato_update_request1, contrato1) {
        contrato1.id = contrato_update_request1.id;
        contrato1.updated_at = contrato_update_request1.updated_at;
        contrato1.anio = contrato_update_request1.anio;
        contrato1.valor = contrato_update_request1.valor;
        contrato1.fecha = contrato_update_request1.fecha;
        contrato1.firmado = contrato_update_request1.firmado;
    }
    static setContratos(contrato_update_requests, contratos) {
        let contrato1;
        for (let contrato_update_request1 of contrato_update_requests) {
            contrato1 = new contrato_1.Contrato();
            ContratoUpdateRequest.setContrato(contrato_update_request1, contrato1);
            contratos.push(contrato1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ContratoUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ContratoUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ContratoUpdateRequest.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ContratoUpdateRequest.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ContratoUpdateRequest.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ContratoUpdateRequest.prototype, "firmado", void 0);
exports.ContratoUpdateRequest = ContratoUpdateRequest;
//# sourceMappingURL=contrato_update.request.js.map