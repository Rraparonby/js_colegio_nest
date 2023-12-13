import { Docente } from '../../../domain/model/docente';
declare class DocenteUpdateRequest {
    id: number;
    updated_at: Date;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    anios_experiencia: number;
    nota_evaluacion: number;
    constructor();
    static setDocente(docente_update_request1: DocenteUpdateRequest, docente1: Docente): void;
    static setDocentes(docente_update_requests: Array<DocenteUpdateRequest>, docentes: Array<Docente>): void;
}
export { DocenteUpdateRequest };
