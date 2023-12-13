"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoMateriaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumno_materia_controller_1 = require("../controller/alumno_materia.controller");
const alumno_materia_logic_1 = require("../../application/logic/alumno_materia.logic");
const alumno_materia_data_1 = require("../../infrastructure/data/alumno_materia.data");
const alumno_materia_1 = require("../../domain/model/alumno_materia");
const alumno_module_1 = require("../../../../estructura/alumno/infrastructure/module/alumno.module");
const materia_module_1 = require("../../../../estructura/materia/infrastructure/module/materia.module");
let AlumnoMateriaModule = class AlumnoMateriaModule {
};
AlumnoMateriaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alumno_materia_1.AlumnoMateria]), alumno_module_1.AlumnoModule, materia_module_1.MateriaModule],
        controllers: [alumno_materia_controller_1.AlumnoMateriaController],
        providers: [alumno_materia_logic_1.AlumnoMateriaLogic, alumno_materia_data_1.AlumnoMateriaData],
        exports: [alumno_materia_logic_1.AlumnoMateriaLogic, alumno_materia_data_1.AlumnoMateriaData]
    })
], AlumnoMateriaModule);
exports.AlumnoMateriaModule = AlumnoMateriaModule;
//# sourceMappingURL=alumno_materia.module.js.map