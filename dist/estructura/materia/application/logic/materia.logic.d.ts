import { GeneralEntityLogic } from '../../../../base/application/logic/general_entity_logic';
import { Pagination } from '../../../../base/application/logic/pagination';
import { Materia } from '../../domain/model/materia';
import { MateriaData } from '../../infrastructure/data/materia.data';
import { MateriaLogicI } from './materia.logici';
declare class MateriaLogic extends GeneralEntityLogic implements MateriaLogicI {
    private materia_datai1;
    result: any;
    total: any;
    materia1?: Materia;
    materias: Materia[];
    constructor(materia_datai1: MateriaData);
    getTodos(pagination1: Pagination, relations1: any): Promise<Materia[]>;
    getBuscar(builder_object_materia1: any, pagination1: Pagination, relations1: any): Promise<Materia[]>;
    getBuscarGeneral(builder_object_materia1: any, pagination1: Pagination, relations1: any): Promise<Materia[]>;
    getBuscarUno(builder_object_materia1: any, relations1: any): Promise<Materia>;
    nuevo(materia1: Materia): Promise<any>;
    actualizar(materia1: Materia): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(materias: Array<Materia>): Promise<void>;
    eliminars(ids: Array<number>): Promise<void>;
    actualizars(updates_materias: Array<Materia>, updates_columnas: Array<string>): Promise<void>;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
}
export { MateriaLogic };
