import { GeneralEntityLogic } from '../../../../base/application/logic/general_entity_logic';
import { Pagination } from '../../../../base/application/logic/pagination';
import { AlumnoMateria } from '../../domain/model/alumno_materia';
import { AlumnoMateriaData } from '../../infrastructure/data/alumno_materia.data';
import { AlumnoMateriaLogicI } from './alumno_materia.logici';
import { Alumno } from '../../../../estructura/alumno/domain/model/alumno';
import { Materia } from '../../../../estructura/materia/domain/model/materia';
declare class AlumnoMateriaLogic extends GeneralEntityLogic implements AlumnoMateriaLogicI {
    private alumno_materia_datai1;
    result: any;
    total: any;
    alumno_materia1?: AlumnoMateria;
    alumno_materias: AlumnoMateria[];
    alumnosFK: Alumno[];
    materiasFK: Materia[];
    private readonly alumnoLogic;
    private readonly materiaLogic;
    constructor(alumno_materia_datai1: AlumnoMateriaData);
    getTodos(pagination1: Pagination, relations1: any): Promise<AlumnoMateria[]>;
    getBuscar(builder_object_alumno_materia1: any, pagination1: Pagination, relations1: any): Promise<AlumnoMateria[]>;
    getBuscarGeneral(builder_object_alumno_materia1: any, pagination1: Pagination, relations1: any): Promise<AlumnoMateria[]>;
    getBuscarUno(builder_object_alumno_materia1: any, relations1: any): Promise<AlumnoMateria>;
    nuevo(alumno_materia1: AlumnoMateria): Promise<any>;
    actualizar(alumno_materia1: AlumnoMateria): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(alumno_materias: Array<AlumnoMateria>): Promise<void>;
    eliminars(ids: Array<number>): Promise<void>;
    actualizars(updates_alumno_materias: Array<AlumnoMateria>, updates_columnas: Array<string>): Promise<void>;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
    getFks(): Promise<void>;
}
export { AlumnoMateriaLogic };
