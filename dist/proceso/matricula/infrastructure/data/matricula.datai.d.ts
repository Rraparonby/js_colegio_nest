import { Pagination } from '../../../../base/application/logic/pagination';
import { Matricula } from '../../domain/model/matricula';
interface MatriculaDataI {
    getTodos(pagination1: Pagination, relations1: any): Promise<Matricula[]>;
    getBuscar(builder_object_matricula1: any, pagination1: Pagination, relations1: any): Promise<Matricula[]>;
    getBuscarGeneral(builder_object_matricula1: any, pagination1: Pagination, relations1: any): Promise<Matricula[]>;
    getBuscarUno(builder_object_matricula1: any, relations1: any): Promise<Matricula>;
    nuevo(matricula1: Matricula): Promise<any>;
    actualizar(matricula1: Matricula): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(matriculas: Array<Matricula>): any;
    eliminars(ids: Array<number>): any;
    actualizars(updates_matriculas: Array<Matricula>, updates_columnas: Array<string>): any;
    getEntitiesFromModels(result: any): Matricula[];
    getEntityFromModel(result: any): Matricula;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { MatriculaDataI };
