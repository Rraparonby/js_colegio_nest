import { Pension } from '../../../domain/model/pension';
declare class PensionReturnView {
    title: string;
    pension1: Pension;
    pensions: Array<Pension>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, pension1: Pension, pensions: Array<Pension>): void;
}
export { PensionReturnView };
