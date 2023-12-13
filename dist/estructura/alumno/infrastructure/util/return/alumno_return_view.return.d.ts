import { Alumno } from '../../../domain/model/alumno';
declare class AlumnoReturnView {
    title: string;
    alumno1: Alumno;
    alumnos: Array<Alumno>;
    action: string;
    action_title: string;
    constructor();
    setReturnView(tipo_accion_enum1: string, alumno1: Alumno, alumnos: Array<Alumno>): void;
}
export { AlumnoReturnView };
