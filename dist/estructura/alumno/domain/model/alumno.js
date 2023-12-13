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
exports.Alumno = void 0;
const typeorm_1 = require("typeorm");
const matricula_1 = require("../../../../proceso/matricula/domain/model/matricula");
const alumno_materia_1 = require("../../../../estructura/alumno_materia/domain/model/alumno_materia");
const materia_1 = require("../../../../estructura/materia/domain/model/materia");
const pension_1 = require("../../../../financiero/pension/domain/model/pension");
const nota_1 = require("../../../../proceso/nota/domain/model/nota");
let Alumno = class Alumno {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.nombre = '';
        this.apellido = '';
        this.fecha_nacimiento = new Date();
    }
};
Alumno.ALUMNO = "alumno";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Alumno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Alumno.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Alumno.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre", default: '' }),
    __metadata("design:type", String)
], Alumno.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "apellido", default: '' }),
    __metadata("design:type", String)
], Alumno.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_nacimiento", default: new Date() }),
    __metadata("design:type", Date)
], Alumno.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => matricula_1.Matricula, (matricula) => matricula.alumno),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", matricula_1.Matricula)
], Alumno.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alumno_materia_1.AlumnoMateria, (alumno_materia) => alumno_materia.alumno),
    __metadata("design:type", Array)
], Alumno.prototype, "alumno_materias", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => materia_1.Materia),
    (0, typeorm_1.JoinTable)({
        name: 'alumno_materia',
        joinColumn: { name: 'id_alumno', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_materia', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Alumno.prototype, "materias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pension_1.Pension, (pension) => pension.alumno),
    __metadata("design:type", Array)
], Alumno.prototype, "pensions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nota_1.Nota, (nota) => nota.alumno),
    __metadata("design:type", Array)
], Alumno.prototype, "notas", void 0);
Alumno = __decorate([
    (0, typeorm_1.Entity)({ name: 'alumno' }),
    __metadata("design:paramtypes", [])
], Alumno);
exports.Alumno = Alumno;
//# sourceMappingURL=alumno.js.map