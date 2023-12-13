"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SueldoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sueldo_controller_1 = require("../controller/sueldo.controller");
const sueldo_logic_1 = require("../../application/logic/sueldo.logic");
const sueldo_data_1 = require("../../infrastructure/data/sueldo.data");
const sueldo_1 = require("../../domain/model/sueldo");
const docente_module_1 = require("../../../../estructura/docente/infrastructure/module/docente.module");
let SueldoModule = class SueldoModule {
};
SueldoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sueldo_1.Sueldo]), docente_module_1.DocenteModule],
        controllers: [sueldo_controller_1.SueldoController],
        providers: [sueldo_logic_1.SueldoLogic, sueldo_data_1.SueldoData],
        exports: [sueldo_logic_1.SueldoLogic, sueldo_data_1.SueldoData]
    })
], SueldoModule);
exports.SueldoModule = SueldoModule;
//# sourceMappingURL=sueldo.module.js.map