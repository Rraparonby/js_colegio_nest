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
exports.AlumnoMateria = void 0;
const typeorm_1 = require("typeorm");
const alumno_1 = require("../../../../estructura/alumno/domain/model/alumno");
const materia_1 = require("../../../../estructura/materia/domain/model/materia");
let AlumnoMateria = class AlumnoMateria {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_alumno = -1;
        this.id_alumno_descripcion = '';
        this.id_materia = -1;
        this.id_materia_descripcion = '';
    }
};
AlumnoMateria.ALUMNO_MATERIA = "alumno_materia";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], AlumnoMateria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], AlumnoMateria.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], AlumnoMateria.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_alumno", default: -1 }),
    __metadata("design:type", Number)
], AlumnoMateria.prototype, "id_alumno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_materia", default: -1 }),
    __metadata("design:type", Number)
], AlumnoMateria.prototype, "id_materia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_1.Alumno, alumno => alumno.alumno_materias),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", alumno_1.Alumno)
], AlumnoMateria.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => materia_1.Materia, materia => materia.alumno_materias),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", materia_1.Materia)
], AlumnoMateria.prototype, "materia", void 0);
AlumnoMateria = __decorate([
    (0, typeorm_1.Entity)({ name: 'alumno_materia' }),
    __metadata("design:paramtypes", [])
], AlumnoMateria);
exports.AlumnoMateria = AlumnoMateria;
//# sourceMappingURL=alumno_materia.js.map