import { Pension } from '../../../domain/model/pension';
declare class PensionCreateRequest {
    created_at: Date;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    anio: number;
    mes: number;
    valor: number;
    cobrado: boolean;
    constructor();
    static setPension(pension_create_request1: PensionCreateRequest, pension1: Pension): void;
    static setPensions(pension_create_requests: Array<PensionCreateRequest>, pensions: Array<Pension>): void;
}
export { PensionCreateRequest };
