import { AlumnoMateria } from '../../../domain/model/alumno_materia';
declare class AlumnoMateriaUpdateRequest {
    id: number;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    constructor();
    static setAlumnoMateria(alumno_materia_update_request1: AlumnoMateriaUpdateRequest, alumno_materia1: AlumnoMateria): void;
    static setAlumnoMaterias(alumno_materia_update_requests: Array<AlumnoMateriaUpdateRequest>, alumno_materias: Array<AlumnoMateria>): void;
}
export { AlumnoMateriaUpdateRequest };
