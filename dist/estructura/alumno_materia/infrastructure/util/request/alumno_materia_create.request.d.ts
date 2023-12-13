import { AlumnoMateria } from '../../../domain/model/alumno_materia';
declare class AlumnoMateriaCreateRequest {
    created_at: Date;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    constructor();
    static setAlumnoMateria(alumno_materia_create_request1: AlumnoMateriaCreateRequest, alumno_materia1: AlumnoMateria): void;
    static setAlumnoMaterias(alumno_materia_create_requests: Array<AlumnoMateriaCreateRequest>, alumno_materias: Array<AlumnoMateria>): void;
}
export { AlumnoMateriaCreateRequest };
