import { Pagination } from '../../../../base/application/logic/pagination';
import { Alumno } from '../../domain/model/alumno';
interface AlumnoLogicI {
    getTodos(pagination1: Pagination, relations1: any): Promise<Alumno[]>;
    getBuscar(builder_object_alumno1: any, pagination1: Pagination, relations1: any): Promise<Alumno[]>;
    getBuscarGeneral(builder_object_alumno1: any, pagination1: Pagination, relations1: any): Promise<Alumno[]>;
    getBuscarUno(builder_object_alumno1: any, relations1: any): Promise<Alumno>;
    nuevo(alumno1: Alumno): Promise<any>;
    actualizar(alumno1: Alumno): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(alumnos: Array<Alumno>): any;
    eliminars(ids: Array<number>): any;
    actualizars(updates_alumnos: Array<Alumno>, updates_columnas: Array<string>): any;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { AlumnoLogicI };
