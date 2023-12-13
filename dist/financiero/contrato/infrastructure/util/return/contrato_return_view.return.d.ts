import { Contrato } from '../../../domain/model/contrato';
declare class ContratoReturnView {
    title: string;
    contrato1: Contrato;
    contratos: Array<Contrato>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, contrato1: Contrato, contratos: Array<Contrato>): void;
}
export { ContratoReturnView };
