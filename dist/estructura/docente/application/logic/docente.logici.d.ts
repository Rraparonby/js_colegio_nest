import { Pagination } from '../../../../base/application/logic/pagination';
import { Docente } from '../../domain/model/docente';
interface DocenteLogicI {
    getTodos(pagination1: Pagination, relations1: any): Promise<Docente[]>;
    getBuscar(builder_object_docente1: any, pagination1: Pagination, relations1: any): Promise<Docente[]>;
    getBuscarGeneral(builder_object_docente1: any, pagination1: Pagination, relations1: any): Promise<Docente[]>;
    getBuscarUno(builder_object_docente1: any, relations1: any): Promise<Docente>;
    nuevo(docente1: Docente): Promise<any>;
    actualizar(docente1: Docente): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(docentes: Array<Docente>): any;
    eliminars(ids: Array<number>): any;
    actualizars(updates_docentes: Array<Docente>, updates_columnas: Array<string>): any;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { DocenteLogicI };
