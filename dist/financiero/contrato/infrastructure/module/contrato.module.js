"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContratoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contrato_controller_1 = require("../controller/contrato.controller");
const contrato_logic_1 = require("../../application/logic/contrato.logic");
const contrato_data_1 = require("../../infrastructure/data/contrato.data");
const contrato_1 = require("../../domain/model/contrato");
const docente_module_1 = require("../../../../estructura/docente/infrastructure/module/docente.module");
let ContratoModule = class ContratoModule {
};
ContratoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([contrato_1.Contrato]), docente_module_1.DocenteModule],
        controllers: [contrato_controller_1.ContratoController],
        providers: [contrato_logic_1.ContratoLogic, contrato_data_1.ContratoData],
        exports: [contrato_logic_1.ContratoLogic, contrato_data_1.ContratoData]
    })
], ContratoModule);
exports.ContratoModule = ContratoModule;
//# sourceMappingURL=contrato.module.js.map