import { Docente } from '../../../domain/model/docente';
declare class DocenteReturnView {
    title: string;
    docente1: Docente;
    docentes: Array<Docente>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, docente1: Docente, docentes: Array<Docente>): void;
}
export { DocenteReturnView };
