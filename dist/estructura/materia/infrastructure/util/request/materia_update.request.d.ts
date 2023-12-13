import { Materia } from '../../../domain/model/materia';
declare class MateriaUpdateRequest {
    id: number;
    updated_at: Date;
    codigo: string;
    nombre: string;
    activo: boolean;
    constructor();
    static setMateria(materia_update_request1: MateriaUpdateRequest, materia1: Materia): void;
    static setMaterias(materia_update_requests: Array<MateriaUpdateRequest>, materias: Array<Materia>): void;
}
export { MateriaUpdateRequest };
