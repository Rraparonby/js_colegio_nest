"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nota_controller_1 = require("../controller/nota.controller");
const nota_logic_1 = require("../../application/logic/nota.logic");
const nota_data_1 = require("../../infrastructure/data/nota.data");
const nota_1 = require("../../domain/model/nota");
const alumno_module_1 = require("../../../../estructura/alumno/infrastructure/module/alumno.module");
const materia_module_1 = require("../../../../estructura/materia/infrastructure/module/materia.module");
const docente_module_1 = require("../../../../estructura/docente/infrastructure/module/docente.module");
let NotaModule = class NotaModule {
};
NotaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nota_1.Nota]), alumno_module_1.AlumnoModule, materia_module_1.MateriaModule, docente_module_1.DocenteModule],
        controllers: [nota_controller_1.NotaController],
        providers: [nota_logic_1.NotaLogic, nota_data_1.NotaData],
        exports: [nota_logic_1.NotaLogic, nota_data_1.NotaData]
    })
], NotaModule);
exports.NotaModule = NotaModule;
//# sourceMappingURL=nota.module.js.map