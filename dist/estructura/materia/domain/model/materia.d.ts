import { Alumno } from '../../../../estructura/alumno/domain/model/alumno';
import { AlumnoMateria } from '../../../../estructura/alumno_materia/domain/model/alumno_materia';
import { Docente } from '../../../../estructura/docente/domain/model/docente';
import { Nota } from '../../../../proceso/nota/domain/model/nota';
import { DocenteMateria } from '../../../../estructura/docente_materia/domain/model/docente_materia';
declare class Materia {
    static MATERIA: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    codigo: string;
    nombre: string;
    activo: boolean;
    constructor();
    alumnos: Alumno[];
    alumno_materias: AlumnoMateria[];
    docentes: Docente[];
    notas: Nota[];
    docente_materias: DocenteMateria[];
}
export { Materia };
