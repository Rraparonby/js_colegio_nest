"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const materia_controller_1 = require("../controller/materia.controller");
const materia_logic_1 = require("../../application/logic/materia.logic");
const materia_data_1 = require("../../infrastructure/data/materia.data");
const materia_1 = require("../../domain/model/materia");
let MateriaModule = class MateriaModule {
};
MateriaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([materia_1.Materia])],
        controllers: [materia_controller_1.MateriaController],
        providers: [materia_logic_1.MateriaLogic, materia_data_1.MateriaData],
        exports: [materia_logic_1.MateriaLogic, materia_data_1.MateriaData]
    })
], MateriaModule);
exports.MateriaModule = MateriaModule;
//# sourceMappingURL=materia.module.js.map