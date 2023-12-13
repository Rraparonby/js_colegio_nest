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
exports.Pension = void 0;
const typeorm_1 = require("typeorm");
const alumno_1 = require("../../../../estructura/alumno/domain/model/alumno");
let Pension = class Pension {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_alumno = -1;
        this.id_alumno_descripcion = '';
        this.anio = 0;
        this.mes = 0;
        this.valor = 0.0;
        this.cobrado = false;
    }
};
Pension.PENSION = "pension";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Pension.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Pension.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Pension.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_alumno", default: -1 }),
    __metadata("design:type", Number)
], Pension.prototype, "id_alumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "anio", default: 0 }),
    __metadata("design:type", Number)
], Pension.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "mes", default: 0 }),
    __metadata("design:type", Number)
], Pension.prototype, "mes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor", default: 0.0 }),
    __metadata("design:type", Number)
], Pension.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cobrado", default: false }),
    __metadata("design:type", Boolean)
], Pension.prototype, "cobrado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_1.Alumno, alumno => alumno.pensions),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", alumno_1.Alumno)
], Pension.prototype, "alumno", void 0);
Pension = __decorate([
    (0, typeorm_1.Entity)({ name: 'pension' }),
    __metadata("design:paramtypes", [])
], Pension);
exports.Pension = Pension;
//# sourceMappingURL=pension.js.map