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
exports.Matricula = void 0;
const typeorm_1 = require("typeorm");
const alumno_1 = require("../../../../estructura/alumno/domain/model/alumno");
let Matricula = class Matricula {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.anio = 0;
        this.costo = 0.0;
        this.fecha = new Date();
        this.pagado = false;
    }
};
Matricula.MATRICULA = "matricula";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Matricula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Matricula.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Matricula.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "anio", default: 0 }),
    __metadata("design:type", Number)
], Matricula.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "costo", default: 0.0 }),
    __metadata("design:type", Number)
], Matricula.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha", default: new Date() }),
    __metadata("design:type", Date)
], Matricula.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pagado", default: false }),
    __metadata("design:type", Boolean)
], Matricula.prototype, "pagado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_1.Alumno, alumno => alumno.matricula),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", alumno_1.Alumno)
], Matricula.prototype, "alumno", void 0);
Matricula = __decorate([
    (0, typeorm_1.Entity)({ name: 'matricula' }),
    __metadata("design:paramtypes", [])
], Matricula);
exports.Matricula = Matricula;
//# sourceMappingURL=matricula.js.map