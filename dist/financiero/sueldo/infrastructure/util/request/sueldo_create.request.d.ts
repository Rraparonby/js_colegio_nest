import { Sueldo } from '../../../domain/model/sueldo';
declare class SueldoCreateRequest {
    created_at: Date;
    updated_at: Date;
    id_docente: number;
    id_docente_descripcion: string;
    anio: number;
    mes: number;
    valor: number;
    cobrado: boolean;
    constructor();
    static setSueldo(sueldo_create_request1: SueldoCreateRequest, sueldo1: Sueldo): void;
    static setSueldos(sueldo_create_requests: Array<SueldoCreateRequest>, sueldos: Array<Sueldo>): void;
}
export { SueldoCreateRequest };
