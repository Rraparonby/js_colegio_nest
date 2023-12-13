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
exports.Nota = void 0;
const typeorm_1 = require("typeorm");
const alumno_1 = require("../../../../estructura/alumno/domain/model/alumno");
const materia_1 = require("../../../../estructura/materia/domain/model/materia");
const docente_1 = require("../../../../estructura/docente/domain/model/docente");
let Nota = class Nota {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_alumno = -1;
        this.id_alumno_descripcion = '';
        this.id_materia = -1;
        this.id_materia_descripcion = '';
        this.id_docente = -1;
        this.id_docente_descripcion = '';
        this.nota_prueba = 0.0;
        this.nota_trabajo = 0.0;
        this.nota_examen = 0.0;
        this.nota_final = 0.0;
    }
};
Nota.NOTA = "nota";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Nota.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Nota.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Nota.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_alumno", default: -1 }),
    __metadata("design:type", Number)
], Nota.prototype, "id_alumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_materia", default: -1 }),
    __metadata("design:type", Number)
], Nota.prototype, "id_materia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_docente", default: -1 }),
    __metadata("design:type", Number)
], Nota.prototype, "id_docente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nota_prueba", default: 0.0 }),
    __metadata("design:type", Number)
], Nota.prototype, "nota_prueba", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nota_trabajo", default: 0.0 }),
    __metadata("design:type", Number)
], Nota.prototype, "nota_trabajo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nota_examen", default: 0.0 }),
    __metadata("design:type", Number)
], Nota.prototype, "nota_examen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nota_final", default: 0.0 }),
    __metadata("design:type", Number)
], Nota.prototype, "nota_final", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_1.Alumno, alumno => alumno.notas),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", alumno_1.Alumno)
], Nota.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => materia_1.Materia, materia => materia.notas),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", materia_1.Materia)
], Nota.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_1.Docente, docente => docente.notas),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", docente_1.Docente)
], Nota.prototype, "docente", void 0);
Nota = __decorate([
    (0, typeorm_1.Entity)({ name: 'nota' }),
    __metadata("design:paramtypes", [])
], Nota);
exports.Nota = Nota;
//# sourceMappingURL=nota.js.map