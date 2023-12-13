import { Nota } from '../../../domain/model/nota';
declare class NotaUpdateRequest {
    id: number;
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
    static setNota(nota_update_request1: NotaUpdateRequest, nota1: Nota): void;
    static setNotas(nota_update_requests: Array<NotaUpdateRequest>, notas: Array<Nota>): void;
}
export { NotaUpdateRequest };
