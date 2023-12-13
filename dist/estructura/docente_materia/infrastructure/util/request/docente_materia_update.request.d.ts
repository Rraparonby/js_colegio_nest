import { DocenteMateria } from '../../../domain/model/docente_materia';
declare class DocenteMateriaUpdateRequest {
    id: number;
    updated_at: Date;
    id_docente: number;
    id_docente_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    constructor();
    static setDocenteMateria(docente_materia_update_request1: DocenteMateriaUpdateRequest, docente_materia1: DocenteMateria): void;
    static setDocenteMaterias(docente_materia_update_requests: Array<DocenteMateriaUpdateRequest>, docente_materias: Array<DocenteMateria>): void;
}
export { DocenteMateriaUpdateRequest };
