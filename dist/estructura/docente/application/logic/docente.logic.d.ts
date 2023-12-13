import { GeneralEntityLogic } from '../../../../base/application/logic/general_entity_logic';
import { Pagination } from '../../../../base/application/logic/pagination';
import { Docente } from '../../domain/model/docente';
import { DocenteData } from '../../infrastructure/data/docente.data';
import { DocenteLogicI } from './docente.logici';
declare class DocenteLogic extends GeneralEntityLogic implements DocenteLogicI {
    private docente_datai1;
    result: any;
    total: any;
    docente1?: Docente;
    docentes: Docente[];
    constructor(docente_datai1: DocenteData);
    getTodos(pagination1: Pagination, relations1: any): Promise<Docente[]>;
    getBuscar(builder_object_docente1: any, pagination1: Pagination, relations1: any): Promise<Docente[]>;
    getBuscarGeneral(builder_object_docente1: any, pagination1: Pagination, relations1: any): Promise<Docente[]>;
    getBuscarUno(builder_object_docente1: any, relations1: any): Promise<Docente>;
    nuevo(docente1: Docente): Promise<any>;
    actualizar(docente1: Docente): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(docentes: Array<Docente>): Promise<void>;
    eliminars(ids: Array<number>): Promise<void>;
    actualizars(updates_docentes: Array<Docente>, updates_columnas: Array<string>): Promise<void>;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { DocenteLogic };
