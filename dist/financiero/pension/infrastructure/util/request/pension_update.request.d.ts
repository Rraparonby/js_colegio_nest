import { Pension } from '../../../domain/model/pension';
declare class PensionUpdateRequest {
    id: number;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    anio: number;
    mes: number;
    valor: number;
    cobrado: boolean;
    constructor();
    static setPension(pension_update_request1: PensionUpdateRequest, pension1: Pension): void;
    static setPensions(pension_update_requests: Array<PensionUpdateRequest>, pensions: Array<Pension>): void;
}
export { PensionUpdateRequest };
