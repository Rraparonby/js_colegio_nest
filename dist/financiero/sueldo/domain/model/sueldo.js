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
exports.Sueldo = void 0;
const typeorm_1 = require("typeorm");
const docente_1 = require("../../../../estructura/docente/domain/model/docente");
let Sueldo = class Sueldo {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_docente = -1;
        this.id_docente_descripcion = '';
        this.anio = 0;
        this.mes = 0;
        this.valor = 0.0;
        this.cobrado = false;
    }
};
Sueldo.SUELDO = "sueldo";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Sueldo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Sueldo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Sueldo.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_docente", default: -1 }),
    __metadata("design:type", Number)
], Sueldo.prototype, "id_docente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "anio", default: 0 }),
    __metadata("design:type", Number)
], Sueldo.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "mes", default: 0 }),
    __metadata("design:type", Number)
], Sueldo.prototype, "mes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor", default: 0.0 }),
    __metadata("design:type", Number)
], Sueldo.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cobrado", default: false }),
    __metadata("design:type", Boolean)
], Sueldo.prototype, "cobrado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_1.Docente, docente => docente.sueldos),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", docente_1.Docente)
], Sueldo.prototype, "docente", void 0);
Sueldo = __decorate([
    (0, typeorm_1.Entity)({ name: 'sueldo' }),
    __metadata("design:paramtypes", [])
], Sueldo);
exports.Sueldo = Sueldo;
//# sourceMappingURL=sueldo.js.map