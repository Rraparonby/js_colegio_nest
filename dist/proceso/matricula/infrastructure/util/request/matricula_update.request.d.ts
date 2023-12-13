import { Matricula } from '../../../domain/model/matricula';
declare class MatriculaUpdateRequest {
    id: number;
    updated_at: Date;
    anio: number;
    costo: number;
    fecha: Date;
    pagado: boolean;
    constructor();
    static setMatricula(matricula_update_request1: MatriculaUpdateRequest, matricula1: Matricula): void;
    static setMatriculas(matricula_update_requests: Array<MatriculaUpdateRequest>, matriculas: Array<Matricula>): void;
}
export { MatriculaUpdateRequest };
