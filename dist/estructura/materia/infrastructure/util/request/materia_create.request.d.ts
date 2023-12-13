import { Materia } from '../../../domain/model/materia';
declare class MateriaCreateRequest {
    created_at: Date;
    updated_at: Date;
    codigo: string;
    nombre: string;
    activo: boolean;
    constructor();
    static setMateria(materia_create_request1: MateriaCreateRequest, materia1: Materia): void;
    static setMaterias(materia_create_requests: Array<MateriaCreateRequest>, materias: Array<Materia>): void;
}
export { MateriaCreateRequest };
