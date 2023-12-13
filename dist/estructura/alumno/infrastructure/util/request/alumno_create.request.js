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
exports.AlumnoCreateRequest = void 0;
const class_validator_1 = require("class-validator");
const alumno_1 = require("../../../domain/model/alumno");
class AlumnoCreateRequest {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.nombre = '';
        this.apellido = '';
        this.fecha_nacimiento = new Date();
    }
    static setAlumno(alumno_create_request1, alumno1) {
        alumno1.created_at = alumno_create_request1.created_at;
        alumno1.updated_at = alumno_create_request1.updated_at;
        alumno1.nombre = alumno_create_request1.nombre;
        alumno1.apellido = alumno_create_request1.apellido;
        alumno1.fecha_nacimiento = alumno_create_request1.fecha_nacimiento;
    }
    static setAlumnos(alumno_create_requests, alumnos) {
        let alumno1;
        for (let alumno_create_request1 of alumno_create_requests) {
            alumno1 = new alumno_1.Alumno();
            AlumnoCreateRequest.setAlumno(alumno_create_request1, alumno1);
            alumnos.push(alumno1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], AlumnoCreateRequest.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], AlumnoCreateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AlumnoCreateRequest.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AlumnoCreateRequest.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], AlumnoCreateRequest.prototype, "fecha_nacimiento", void 0);
exports.AlumnoCreateRequest = AlumnoCreateRequest;
//# sourceMappingURL=alumno_create.request.js.map