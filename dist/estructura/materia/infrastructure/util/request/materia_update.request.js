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
exports.MateriaUpdateRequest = void 0;
const class_validator_1 = require("class-validator");
const materia_1 = require("../../../domain/model/materia");
class MateriaUpdateRequest {
    constructor() {
        this.id = -1;
        this.updated_at = new Date();
        this.codigo = '';
        this.nombre = '';
        this.activo = false;
    }
    static setMateria(materia_update_request1, materia1) {
        materia1.id = materia_update_request1.id;
        materia1.updated_at = materia_update_request1.updated_at;
        materia1.codigo = materia_update_request1.codigo;
        materia1.nombre = materia_update_request1.nombre;
        materia1.activo = materia_update_request1.activo;
    }
    static setMaterias(materia_update_requests, materias) {
        let materia1;
        for (let materia_update_request1 of materia_update_requests) {
            materia1 = new materia_1.Materia();
            MateriaUpdateRequest.setMateria(materia_update_request1, materia1);
            materias.push(materia1);
        }
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MateriaUpdateRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MateriaUpdateRequest.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MateriaUpdateRequest.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MateriaUpdateRequest.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], MateriaUpdateRequest.prototype, "activo", void 0);
exports.MateriaUpdateRequest = MateriaUpdateRequest;
//# sourceMappingURL=materia_update.request.js.map