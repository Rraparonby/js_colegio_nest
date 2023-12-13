import { Sueldo } from '../../../domain/model/sueldo';
declare class SueldoUpdateRequest {
    id: number;
    updated_at: Date;
    id_docente: number;
    id_docente_descripcion: string;
    anio: number;
    mes: number;
    valor: number;
    cobrado: boolean;
    constructor();
    static setSueldo(sueldo_update_request1: SueldoUpdateRequest, sueldo1: Sueldo): void;
    static setSueldos(sueldo_update_requests: Array<SueldoUpdateRequest>, sueldos: Array<Sueldo>): void;
}
export { SueldoUpdateRequest };
