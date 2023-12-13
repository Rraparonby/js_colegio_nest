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
exports.NotaUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const nota_1 = require("../../../domain/model/nota");
class NotaUpdateRequest {
    constructor() {
        this.id = -1;
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
    static setNota(nota_update_request1, nota1) {
        nota1.id = nota_update_request1.id;
        nota1.updated_at = nota_update_request1.updated_at;
        nota1.id_alumno = nota_update_request1.id_alumno;
        nota1.id_materia = nota_update_request1.id_materia;
        nota1.id_docente = nota_update_request1.id_docente;
        nota1.nota_prueba = nota_update_request1.nota_prueba;
        nota1.nota_trabajo = nota_update_request1.nota_trabajo;
        nota1.nota_examen = nota_update_request1.nota_examen;
        nota1.nota_final = nota_update_request1.nota_final;
    }
    static setNotas(nota_update_requests, notas) {
        let nota1;
        for (let nota_update_request1 of nota_update_requests) {
            nota1 = new nota_1.Nota();
            NotaUpdateRequest.setNota(nota_update_request1, nota1);
            notas.push(nota1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], NotaUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "id_alumno", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "id_materia", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "id_docente", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "nota_prueba", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "nota_trabajo", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "nota_examen", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NotaUpdateRequest.prototype, "nota_final", void 0);
exports.NotaUpdateRequest = NotaUpdateRequest;
//# sourceMappingURL=nota_update.request.js.map