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
exports.Docente = void 0;
const typeorm_1 = require("typeorm");
const sueldo_1 = require("../../../../financiero/sueldo/domain/model/sueldo");
const contrato_1 = require("../../../../financiero/contrato/domain/model/contrato");
const materia_1 = require("../../../../estructura/materia/domain/model/materia");
const nota_1 = require("../../../../proceso/nota/domain/model/nota");
const docente_materia_1 = require("../../../../estructura/docente_materia/domain/model/docente_materia");
let Docente = class Docente {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.nombre = '';
        this.apellido = '';
        this.fecha_nacimiento = new Date();
        this.anios_experiencia = 0;
        this.nota_evaluacion = 0.0;
    }
};
Docente.DOCENTE = "docente";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Docente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Docente.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Docente.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre", default: '' }),
    __metadata("design:type", String)
], Docente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "apellido", default: '' }),
    __metadata("design:type", String)
], Docente.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_nacimiento", default: new Date() }),
    __metadata("design:type", Date)
], Docente.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "anios_experiencia", default: 0 }),
    __metadata("design:type", Number)
], Docente.prototype, "anios_experiencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nota_evaluacion", default: 0.0 }),
    __metadata("design:type", Number)
], Docente.prototype, "nota_evaluacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sueldo_1.Sueldo, (sueldo) => sueldo.docente),
    __metadata("design:type", Array)
], Docente.prototype, "sueldos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => contrato_1.Contrato, (contrato) => contrato.docente),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", contrato_1.Contrato)
], Docente.prototype, "contrato", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => materia_1.Materia),
    (0, typeorm_1.JoinTable)({
        name: 'docente_materia',
        joinColumn: { name: 'id_docente', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_materia', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Docente.prototype, "materias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nota_1.Nota, (nota) => nota.docente),
    __metadata("design:type", Array)
], Docente.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docente_materia_1.DocenteMateria, (docente_materia) => docente_materia.docente),
    __metadata("design:type", Array)
], Docente.prototype, "docente_materias", void 0);
Docente = __decorate([
    (0, typeorm_1.Entity)({ name: 'docente' }),
    __metadata("design:paramtypes", [])
], Docente);
exports.Docente = Docente;
//# sourceMappingURL=docente.js.map