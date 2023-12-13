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
exports.DocenteMateriaCreateRequest = void 0;
const class_validator_1 = require("class-validator");
const docente_materia_1 = require("../../../domain/model/docente_materia");
class DocenteMateriaCreateRequest {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id_docente = -1;
        this.id_docente_descripcion = '';
        this.id_materia = -1;
        this.id_materia_descripcion = '';
    }
    static setDocenteMateria(docente_materia_create_request1, docente_materia1) {
        docente_materia1.created_at = docente_materia_create_request1.created_at;
        docente_materia1.updated_at = docente_materia_create_request1.updated_at;
        docente_materia1.id_docente = docente_materia_create_request1.id_docente;
        docente_materia1.id_materia = docente_materia_create_request1.id_materia;
    }
    static setDocenteMaterias(docente_materia_create_requests, docente_materias) {
        let docente_materia1;
        for (let docente_materia_create_request1 of docente_materia_create_requests) {
            docente_materia1 = new docente_materia_1.DocenteMateria();
            DocenteMateriaCreateRequest.setDocenteMateria(docente_materia_create_request1, docente_materia1);
            docente_materias.push(docente_materia1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], DocenteMateriaCreateRequest.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], DocenteMateriaCreateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DocenteMateriaCreateRequest.prototype, "id_docente", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DocenteMateriaCreateRequest.prototype, "id_materia", void 0);
exports.DocenteMateriaCreateRequest = DocenteMateriaCreateRequest;
//# sourceMappingURL=docente_materia_create.request.js.map