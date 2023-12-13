import { Sueldo } from '../../../domain/model/sueldo';
declare class SueldoReturnView {
    title: string;
    sueldo1: Sueldo;
    sueldos: Array<Sueldo>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, sueldo1: Sueldo, sueldos: Array<Sueldo>): void;
}
export { SueldoReturnView };
