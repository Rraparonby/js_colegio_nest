import { DocenteMateria } from '../../../domain/model/docente_materia';
declare class DocenteMateriaCreateRequest {
    created_at: Date;
    updated_at: Date;
    id_docente: number;
    id_docente_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    constructor();
    static setDocenteMateria(docente_materia_create_request1: DocenteMateriaCreateRequest, docente_materia1: DocenteMateria): void;
    static setDocenteMaterias(docente_materia_create_requests: Array<DocenteMateriaCreateRequest>, docente_materias: Array<DocenteMateria>): void;
}
export { DocenteMateriaCreateRequest };
