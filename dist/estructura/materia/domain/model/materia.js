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
exports.Materia = void 0;
const typeorm_1 = require("typeorm");
const alumno_1 = require("../../../../estructura/alumno/domain/model/alumno");
const alumno_materia_1 = require("../../../../estructura/alumno_materia/domain/model/alumno_materia");
const docente_1 = require("../../../../estructura/docente/domain/model/docente");
const nota_1 = require("../../../../proceso/nota/domain/model/nota");
const docente_materia_1 = require("../../../../estructura/docente_materia/domain/model/docente_materia");
let Materia = class Materia {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.codigo = '';
        this.nombre = '';
        this.activo = false;
    }
};
Materia.MATERIA = "materia";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Materia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Materia.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Materia.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "codigo", default: '' }),
    __metadata("design:type", String)
], Materia.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre", default: '' }),
    __metadata("design:type", String)
], Materia.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "activo", default: false }),
    __metadata("design:type", Boolean)
], Materia.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => alumno_1.Alumno),
    (0, typeorm_1.JoinTable)({
        name: 'alumno_materia',
        joinColumn: { name: 'id_materia', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_alumno', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Materia.prototype, "alumnos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alumno_materia_1.AlumnoMateria, (alumno_materia) => alumno_materia.materia),
    __metadata("design:type", Array)
], Materia.prototype, "alumno_materias", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => docente_1.Docente),
    (0, typeorm_1.JoinTable)({
        name: 'docente_materia',
        joinColumn: { name: 'id_materia', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_docente', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Materia.prototype, "docentes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nota_1.Nota, (nota) => nota.materia),
    __metadata("design:type", Array)
], Materia.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docente_materia_1.DocenteMateria, (docente_materia) => docente_materia.materia),
    __metadata("design:type", Array)
], Materia.prototype, "docente_materias", void 0);
Materia = __decorate([
    (0, typeorm_1.Entity)({ name: 'materia' }),
    __metadata("design:paramtypes", [])
], Materia);
exports.Materia = Materia;
//# sourceMappingURL=materia.js.map