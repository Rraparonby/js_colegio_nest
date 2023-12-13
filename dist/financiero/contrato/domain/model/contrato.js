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
exports.Contrato = void 0;
const typeorm_1 = require("typeorm");
const docente_1 = require("../../../../estructura/docente/domain/model/docente");
let Contrato = class Contrato {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.anio = 0;
        this.valor = 0.0;
        this.fecha = new Date();
        this.firmado = false;
    }
};
Contrato.CONTRATO = "contrato";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Contrato.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Contrato.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Contrato.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "anio", default: 0 }),
    __metadata("design:type", Number)
], Contrato.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor", default: 0.0 }),
    __metadata("design:type", Number)
], Contrato.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha", default: new Date() }),
    __metadata("design:type", Date)
], Contrato.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "firmado", default: false }),
    __metadata("design:type", Boolean)
], Contrato.prototype, "firmado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_1.Docente, docente => docente.contrato),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", docente_1.Docente)
], Contrato.prototype, "docente", void 0);
Contrato = __decorate([
    (0, typeorm_1.Entity)({ name: 'contrato' }),
    __metadata("design:paramtypes", [])
], Contrato);
exports.Contrato = Contrato;
//# sourceMappingURL=contrato.js.map