"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docente_controller_1 = require("../controller/docente.controller");
const docente_logic_1 = require("../../application/logic/docente.logic");
const docente_data_1 = require("../../infrastructure/data/docente.data");
const docente_1 = require("../../domain/model/docente");
let DocenteModule = class DocenteModule {
};
DocenteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docente_1.Docente])],
        controllers: [docente_controller_1.DocenteController],
        providers: [docente_logic_1.DocenteLogic, docente_data_1.DocenteData],
        exports: [docente_logic_1.DocenteLogic, docente_data_1.DocenteData]
    })
], DocenteModule);
exports.DocenteModule = DocenteModule;
//# sourceMappingURL=docente.module.js.map