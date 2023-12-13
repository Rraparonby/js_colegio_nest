import { Request } from "express";
import { TipoAccionEnum } from '../../../../base/util/tipo_accion_enum';
import { GeneralEntityController } from '../../../../base/infrastructure/controller/general_entity_controller';
import { Pagination } from '../../../../base/application/logic/pagination';
import { Nota } from '../../domain/model/nota';
import { NotaLogic } from '../../application/logic/nota.logic';
import { NotaReturnView } from '../../infrastructure/util/return/nota_return_view.return';
import { NotaCreateRequest } from '../../infrastructure/util/request/nota_create.request';
import { NotaUpdateRequest } from '../../infrastructure/util/request/nota_update.request';
import { NotaFKReturnView } from '../../infrastructure/util/return/nota_fk_return_view.return';
declare class NotaController extends GeneralEntityController {
    private nota_logici1;
    pagination1: Pagination;
    relations1: any;
    nota1: Nota;
    notas: Array<Nota>;
    nota_return_view: NotaReturnView;
    result: any;
    nota_fk_return_view_dto: NotaFKReturnView;
    builder_object_nota1: any;
    constructor(nota_logici1: NotaLogic);
    setReturnView(tipo_accion_enum1: TipoAccionEnum): void;
    getDefault(pagination1: Pagination): Promise<NotaReturnView>;
    getIndex(pagination1: Pagination): Promise<NotaReturnView>;
    getTodos(pagination1: Pagination): Promise<NotaReturnView>;
    getBuscar(pagination1: Pagination, req: Request): Promise<NotaReturnView>;
    getSeleccionar(id: number): Promise<NotaReturnView>;
    nuevo(nota_create_request1: NotaCreateRequest): Promise<NotaReturnView>;
    actualizar(nota_update_request1: NotaUpdateRequest): Promise<NotaReturnView>;
    eliminar(id: number): Promise<NotaReturnView>;
    nuevos(nota_create_requests: Array<NotaCreateRequest>): Promise<NotaReturnView>;
    eliminars(ids: Array<number>): Promise<NotaReturnView>;
    actualizars(nota_update_requests: Array<NotaUpdateRequest>, updates_columnas: Array<string>): Promise<NotaReturnView>;
    guardarCambios(news_notas: Array<Nota>, ids_deletes_notas: Array<number>, updates_notas: Array<Nota>, updates_columnas: Array<string>): Promise<NotaReturnView>;
    getFks(): Promise<NotaFKReturnView>;
    getTodosEntitiesDto(pagination1: Pagination): Promise<Array<Nota>>;
}
export { NotaController };
