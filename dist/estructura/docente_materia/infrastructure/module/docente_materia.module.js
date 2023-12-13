"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteMateriaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docente_materia_controller_1 = require("../controller/docente_materia.controller");
const docente_materia_logic_1 = require("../../application/logic/docente_materia.logic");
const docente_materia_data_1 = require("../../infrastructure/data/docente_materia.data");
const docente_materia_1 = require("../../domain/model/docente_materia");
const docente_module_1 = require("../../../../estructura/docente/infrastructure/module/docente.module");
const materia_module_1 = require("../../../../estructura/materia/infrastructure/module/materia.module");
let DocenteMateriaModule = class DocenteMateriaModule {
};
DocenteMateriaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docente_materia_1.DocenteMateria]), docente_module_1.DocenteModule, materia_module_1.MateriaModule],
        controllers: [docente_materia_controller_1.DocenteMateriaController],
        providers: [docente_materia_logic_1.DocenteMateriaLogic, docente_materia_data_1.DocenteMateriaData],
        exports: [docente_materia_logic_1.DocenteMateriaLogic, docente_materia_data_1.DocenteMateriaData]
    })
], DocenteMateriaModule);
exports.DocenteMateriaModule = DocenteMateriaModule;
//# sourceMappingURL=docente_materia.module.js.map