import { Materia } from '../../../domain/model/materia';
declare class MateriaReturnView {
    title: string;
    materia1: Materia;
    materias: Array<Materia>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, materia1: Materia, materias: Array<Materia>): void;
}
export { MateriaReturnView };
