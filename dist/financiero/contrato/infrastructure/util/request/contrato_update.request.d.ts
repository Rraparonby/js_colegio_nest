import { Contrato } from '../../../domain/model/contrato';
declare class ContratoUpdateRequest {
    id: number;
    updated_at: Date;
    anio: number;
    valor: number;
    fecha: Date;
    firmado: boolean;
    constructor();
    static setContrato(contrato_update_request1: ContratoUpdateRequest, contrato1: Contrato): void;
    static setContratos(contrato_update_requests: Array<ContratoUpdateRequest>, contratos: Array<Contrato>): void;
}
export { ContratoUpdateRequest };
