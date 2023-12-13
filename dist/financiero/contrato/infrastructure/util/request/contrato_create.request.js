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
exports.ContratoCreateRequest = void 0;
const class_validator_1 = require("class-validator");
const contrato_1 = require("../../../domain/model/contrato");
class ContratoCreateRequest {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.anio = 0;
        this.valor = 0.0;
        this.fecha = new Date();
        this.firmado = false;
    }
    static setContrato(contrato_create_request1, contrato1) {
        contrato1.created_at = contrato_create_request1.created_at;
        contrato1.updated_at = contrato_create_request1.updated_at;
        contrato1.anio = contrato_create_request1.anio;
        contrato1.valor = contrato_create_request1.valor;
        contrato1.fecha = contrato_create_request1.fecha;
        contrato1.firmado = contrato_create_request1.firmado;
    }
    static setContratos(contrato_create_requests, contratos) {
        let contrato1;
        for (let contrato_create_request1 of contrato_create_requests) {
            contrato1 = new contrato_1.Contrato();
            ContratoCreateRequest.setContrato(contrato_create_request1, contrato1);
            contratos.push(contrato1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ContratoCreateRequest.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ContratoCreateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ContratoCreateRequest.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ContratoCreateRequest.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ContratoCreateRequest.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ContratoCreateRequest.prototype, "firmado", void 0);
exports.ContratoCreateRequest = ContratoCreateRequest;
//# sourceMappingURL=contrato_create.request.js.map