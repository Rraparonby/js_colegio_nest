import { Alumno } from '../../../domain/model/alumno';
declare class AlumnoUpdateRequest {
    id: number;
    updated_at: Date;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    constructor();
    static setAlumno(alumno_update_request1: AlumnoUpdateRequest, alumno1: Alumno): void;
    static setAlumnos(alumno_update_requests: Array<AlumnoUpdateRequest>, alumnos: Array<Alumno>): void;
}
export { AlumnoUpdateRequest };
