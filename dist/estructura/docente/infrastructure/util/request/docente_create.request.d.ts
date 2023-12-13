import { Docente } from '../../../domain/model/docente';
declare class DocenteCreateRequest {
    created_at: Date;
    updated_at: Date;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    anios_experiencia: number;
    nota_evaluacion: number;
    constructor();
    static setDocente(docente_create_request1: DocenteCreateRequest, docente1: Docente): void;
    static setDocentes(docente_create_requests: Array<DocenteCreateRequest>, docentes: Array<Docente>): void;
}
export { DocenteCreateRequest };
