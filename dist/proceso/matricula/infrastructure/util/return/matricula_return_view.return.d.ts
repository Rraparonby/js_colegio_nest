import { Matricula } from '../../../domain/model/matricula';
declare class MatriculaReturnView {
    title: string;
    matricula1: Matricula;
    matriculas: Array<Matricula>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, matricula1: Matricula, matriculas: Array<Matricula>): void;
}
export { MatriculaReturnView };
