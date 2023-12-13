import { Alumno } from '../../../../estructura/alumno/domain/model/alumno';
import { Materia } from '../../../../estructura/materia/domain/model/materia';
declare class AlumnoMateria {
    static ALUMNO_MATERIA: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    constructor();
    alumno: Alumno;
    materia: Materia;
}
export { AlumnoMateria };
