import { Alumno } from '../../../domain/model/alumno';
declare class AlumnoCreateRequest {
    created_at: Date;
    updated_at: Date;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    constructor();
    static setAlumno(alumno_create_request1: AlumnoCreateRequest, alumno1: Alumno): void;
    static setAlumnos(alumno_create_requests: Array<AlumnoCreateRequest>, alumnos: Array<Alumno>): void;
}
export { AlumnoCreateRequest };
