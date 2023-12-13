import { Nota } from '../../../domain/model/nota';
declare class NotaReturnView {
    title: string;
    nota1: Nota;
    notas: Array<Nota>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, nota1: Nota, notas: Array<Nota>): void;
}
export { NotaReturnView };
