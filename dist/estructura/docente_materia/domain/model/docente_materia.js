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
exports.DocenteMateria = void 0;
const typeorm_1 = require("typeorm");
const docente_1 = require("../../../../estructura/docente/domain/model/docente");
const materia_1 = require("../../../../estructura/materia/domain/model/materia");
let DocenteMateria = class DocenteMateria {
    constructor() {
        this.id = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_docente = -1;
        this.id_docente_descripcion = '';
        this.id_materia = -1;
        this.id_materia_descripcion = '';
    }
};
DocenteMateria.DOCENTE_MATERIA = "docente_materia";
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "id" }),
    __metadata("design:type", Number)
], DocenteMateria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], DocenteMateria.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], DocenteMateria.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_docente", default: -1 }),
    __metadata("design:type", Number)
], DocenteMateria.prototype, "id_docente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_materia", default: -1 }),
    __metadata("design:type", Number)
], DocenteMateria.prototype, "id_materia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_1.Docente, docente => docente.docente_materias),
    (0, typeorm_1.JoinColumn)({ name: 'id_docente' }),
    __metadata("design:type", docente_1.Docente)
], DocenteMateria.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => materia_1.Materia, materia => materia.docente_materias),
    (0, typeorm_1.JoinColumn)({ name: 'id_materia' }),
    __metadata("design:type", materia_1.Materia)
], DocenteMateria.prototype, "materia", void 0);
DocenteMateria = __decorate([
    (0, typeorm_1.Entity)({ name: 'docente_materia' }),
    __metadata("design:paramtypes", [])
], DocenteMateria);
exports.DocenteMateria = DocenteMateria;
//# sourceMappingURL=docente_materia.js.map