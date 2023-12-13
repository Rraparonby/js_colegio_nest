"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const alumno_module_1 = require("./estructura/alumno/infrastructure/module/alumno.module");
const alumno_materia_module_1 = require("./estructura/alumno_materia/infrastructure/module/alumno_materia.module");
const contrato_module_1 = require("./financiero/contrato/infrastructure/module/contrato.module");
const docente_module_1 = require("./estructura/docente/infrastructure/module/docente.module");
const docente_materia_module_1 = require("./estructura/docente_materia/infrastructure/module/docente_materia.module");
const materia_module_1 = require("./estructura/materia/infrastructure/module/materia.module");
const matricula_module_1 = require("./proceso/matricula/infrastructure/module/matricula.module");
const nota_module_1 = require("./proceso/nota/infrastructure/module/nota.module");
const pension_module_1 = require("./financiero/pension/infrastructure/module/pension.module");
const sueldo_module_1 = require("./financiero/sueldo/infrastructure/module/sueldo.module");
const alumno_1 = require("./estructura/alumno/domain/model/alumno");
const alumno_materia_1 = require("./estructura/alumno_materia/domain/model/alumno_materia");
const contrato_1 = require("./financiero/contrato/domain/model/contrato");
const docente_1 = require("./estructura/docente/domain/model/docente");
const docente_materia_1 = require("./estructura/docente_materia/domain/model/docente_materia");
const materia_1 = require("./estructura/materia/domain/model/materia");
const matricula_1 = require("./proceso/matricula/domain/model/matricula");
const nota_1 = require("./proceso/nota/domain/model/nota");
const pension_1 = require("./financiero/pension/domain/model/pension");
const sueldo_1 = require("./financiero/sueldo/domain/model/sueldo");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            alumno_module_1.AlumnoModule,
            alumno_materia_module_1.AlumnoMateriaModule,
            contrato_module_1.ContratoModule,
            docente_module_1.DocenteModule,
            docente_materia_module_1.DocenteMateriaModule,
            materia_module_1.MateriaModule,
            matricula_module_1.MatriculaModule,
            nota_module_1.NotaModule,
            pension_module_1.PensionModule,
            sueldo_module_1.SueldoModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: '2015_colegio_relaciones',
                synchronize: false,
                entities: [
                    alumno_1.Alumno,
                    alumno_materia_1.AlumnoMateria,
                    contrato_1.Contrato,
                    docente_1.Docente,
                    docente_materia_1.DocenteMateria,
                    materia_1.Materia,
                    matricula_1.Matricula,
                    nota_1.Nota,
                    pension_1.Pension,
                    sueldo_1.Sueldo
                ],
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map