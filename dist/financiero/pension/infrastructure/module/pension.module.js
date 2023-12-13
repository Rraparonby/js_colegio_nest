"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PensionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pension_controller_1 = require("../controller/pension.controller");
const pension_logic_1 = require("../../application/logic/pension.logic");
const pension_data_1 = require("../../infrastructure/data/pension.data");
const pension_1 = require("../../domain/model/pension");
const alumno_module_1 = require("../../../../estructura/alumno/infrastructure/module/alumno.module");
let PensionModule = class PensionModule {
};
PensionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pension_1.Pension]), alumno_module_1.AlumnoModule],
        controllers: [pension_controller_1.PensionController],
        providers: [pension_logic_1.PensionLogic, pension_data_1.PensionData],
        exports: [pension_logic_1.PensionLogic, pension_data_1.PensionData]
    })
], PensionModule);
exports.PensionModule = PensionModule;
//# sourceMappingURL=pension.module.js.map