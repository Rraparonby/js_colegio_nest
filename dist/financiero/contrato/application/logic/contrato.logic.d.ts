import { GeneralEntityLogic } from '../../../../base/application/logic/general_entity_logic';
import { Pagination } from '../../../../base/application/logic/pagination';
import { Contrato } from '../../domain/model/contrato';
import { ContratoData } from '../../infrastructure/data/contrato.data';
import { ContratoLogicI } from './contrato.logici';
import { Docente } from '../../../../estructura/docente/domain/model/docente';
declare class ContratoLogic extends GeneralEntityLogic implements ContratoLogicI {
    private contrato_datai1;
    result: any;
    total: any;
    contrato1?: Contrato;
    contratos: Contrato[];
    docentesFK: Docente[];
    private readonly docenteLogic;
    constructor(contrato_datai1: ContratoData);
    getTodos(pagination1: Pagination, relations1: any): Promise<Contrato[]>;
    getBuscar(builder_object_contrato1: any, pagination1: Pagination, relations1: any): Promise<Contrato[]>;
    getBuscarGeneral(builder_object_contrato1: any, pagination1: Pagination, relations1: any): Promise<Contrato[]>;
    getBuscarUno(builder_object_contrato1: any, relations1: any): Promise<Contrato>;
    nuevo(contrato1: Contrato): Promise<any>;
    actualizar(contrato1: Contrato): Promise<any>;
    eliminar(id: number): Promise<any>;
    nuevos(contratos: Array<Contrato>): Promise<void>;
    eliminars(ids: Array<number>): Promise<void>;
    actualizars(updates_contratos: Array<Contrato>, updates_columnas: Array<string>): Promise<void>;
    getBuilderFunctionObjectParametroSeleccionar(id: number): any;
    getBuilderFunctionObjectParametroBuscar(req: any): any;
    getFks(): Promise<void>;
}
export { ContratoLogic };
