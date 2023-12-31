import { Pagination } from '../../../../base/application/logic/pagination';
import { AlumnoMateria } from '../../domain/model/alumno_materia';
interface AlumnoMateriaDataI {
    getTodos(pagination1: Pagination, relations1: any): Promise<AlumnoMateria[]>;
    getBuscar(builder_object_alumno_materia1: any, pagination1: Pagination, relations1: any): Promise<AlumnoMateria[]>;
    getBuscarGeneral(builder_object_alumno_materia1: any, pagination1: Pagination, relations1: any): Promise<AlumnoMateria[]>;
    getBuscarUno(builder_object_alumno_materia1: any, relations1: any): Promise<AlumnoMateria>;
    nuevo(alumno_materia1: AlumnoMateria): Promise<any>;
    actualizar(alumno_materia1: AlumnoMateria): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(alumno_materias: Array<AlumnoMateria>): any;
    eliminars(ids: Array<number>): any;
    actualizars(updates_alumno_materias: Array<AlumnoMateria>, updates_columnas: Array<string>): any;
    getEntitiesFromModels(result: any): AlumnoMateria[];
    getEntityFromModel(result: any): AlumnoMateria;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { AlumnoMateriaDataI };
