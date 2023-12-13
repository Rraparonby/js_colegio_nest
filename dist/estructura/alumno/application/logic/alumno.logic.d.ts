import { GeneralEntityLogic } from '../../../../base/application/logic/general_entity_logic';
import { Pagination } from '../../../../base/application/logic/pagination';
import { Alumno } from '../../domain/model/alumno';
import { AlumnoData } from '../../infrastructure/data/alumno.data';
import { AlumnoLogicI } from './alumno.logici';
declare class AlumnoLogic extends GeneralEntityLogic implements AlumnoLogicI {
    private alumno_datai1;
    result: any;
    total: any;
    alumno1?: Alumno;
    alumnos: Alumno[];
    constructor(alumno_datai1: AlumnoData);
    getTodos(pagination1: Pagination, relations1: any): Promise<Alumno[]>;
    getBuscar(builder_object_alumno1: any, pagination1: Pagination, relations1: any): Promise<Alumno[]>;
    getBuscarGeneral(builder_object_alumno1: any, pagination1: Pagination, relations1: any): Promise<Alumno[]>;
    getBuscarUno(builder_object_alumno1: any, relations1: any): Promise<Alumno>;
    nuevo(alumno1: Alumno): Promise<any>;
    actualizar(alumno1: Alumno): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(alumnos: Array<Alumno>): Promise<void>;
    eliminars(ids: Array<number>): Promise<void>;
    actualizars(updates_alumnos: Array<Alumno>, updates_columnas: Array<string>): Promise<void>;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { AlumnoLogic };
