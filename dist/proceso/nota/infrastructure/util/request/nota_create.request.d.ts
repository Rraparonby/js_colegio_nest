import { Nota } from '../../../domain/model/nota';
declare class NotaCreateRequest {
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
    static setNota(nota_create_request1: NotaCreateRequest, nota1: Nota): void;
    static setNotas(nota_create_requests: Array<NotaCreateRequest>, notas: Array<Nota>): void;
}
export { NotaCreateRequest };
