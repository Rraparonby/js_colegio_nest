import { DocenteMateria } from '../../../domain/model/docente_materia';
declare class DocenteMateriaReturnView {
    title: string;
    docente_materia1: DocenteMateria;
    docente_materias: Array<DocenteMateria>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, docente_materia1: DocenteMateria, docente_materias: Array<DocenteMateria>): void;
}
export { DocenteMateriaReturnView };
