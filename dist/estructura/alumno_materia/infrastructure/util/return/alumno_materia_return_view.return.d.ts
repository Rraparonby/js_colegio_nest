import { AlumnoMateria } from '../../../domain/model/alumno_materia';
declare class AlumnoMateriaReturnView {
    title: string;
    alumno_materia1: AlumnoMateria;
    alumno_materias: Array<AlumnoMateria>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, alumno_materia1: AlumnoMateria, alumno_materias: Array<AlumnoMateria>): void;
}
export { AlumnoMateriaReturnView };
