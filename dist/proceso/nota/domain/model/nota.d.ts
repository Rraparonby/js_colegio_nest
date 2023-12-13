import { Alumno } from '../../../../estructura/alumno/domain/model/alumno';
import { Materia } from '../../../../estructura/materia/domain/model/materia';
import { Docente } from '../../../../estructura/docente/domain/model/docente';
declare class Nota {
    static NOTA: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    id_docente: number;
    id_docente_descripcion: string;
    nota_prueba: number;
    nota_trabajo: number;
    nota_examen: number;
    nota_final: number;
    constructor();
    alumno: Alumno;
    materia: Materia;
    docente: Docente;
}
export { Nota };
