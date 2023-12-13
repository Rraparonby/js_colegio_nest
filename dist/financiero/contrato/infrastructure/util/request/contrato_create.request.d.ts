import { Contrato } from '../../../domain/model/contrato';
declare class ContratoCreateRequest {
    created_at: Date;
    updated_at: Date;
    anio: number;
    valor: number;
    fecha: Date;
    firmado: boolean;
    constructor();
    static setContrato(contrato_create_request1: ContratoCreateRequest, contrato1: Contrato): void;
    static setContratos(contrato_create_requests: Array<ContratoCreateRequest>, contratos: Array<Contrato>): void;
}
export { ContratoCreateRequest };
