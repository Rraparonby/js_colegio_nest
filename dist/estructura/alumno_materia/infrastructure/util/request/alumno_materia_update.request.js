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
exports.AlumnoMateriaUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const alumno_materia_1 = require("../../../domain/model/alumno_materia");
class AlumnoMateriaUpdateRequest {
    constructor() {
        this.id = -1;
        this.updated_at = new Date();
        this.id_alumno = -1;
        this.id_alumno_descripcion = '';
        this.id_materia = -1;
        this.id_materia_descripcion = '';
    }
    static setAlumnoMateria(alumno_materia_update_request1, alumno_materia1) {
        alumno_materia1.id = alumno_materia_update_request1.id;
        alumno_materia1.updated_at = alumno_materia_update_request1.updated_at;
        alumno_materia1.id_alumno = alumno_materia_update_request1.id_alumno;
        alumno_materia1.id_materia = alumno_materia_update_request1.id_materia;
    }
    static setAlumnoMaterias(alumno_materia_update_requests, alumno_materias) {
        let alumno_materia1;
        for (let alumno_materia_update_request1 of alumno_materia_update_requests) {
            alumno_materia1 = new alumno_materia_1.AlumnoMateria();
            AlumnoMateriaUpdateRequest.setAlumnoMateria(alumno_materia_update_request1, alumno_materia1);
            alumno_materias.push(alumno_materia1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AlumnoMateriaUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], AlumnoMateriaUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AlumnoMateriaUpdateRequest.prototype, "id_alumno", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AlumnoMateriaUpdateRequest.prototype, "id_materia", void 0);
exports.AlumnoMateriaUpdateRequest = AlumnoMateriaUpdateRequest;
//# sourceMappingURL=alumno_materia_update.request.js.map