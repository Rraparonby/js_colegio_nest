import { Matricula } from '../../../domain/model/matricula';
declare class MatriculaCreateRequest {
    created_at: Date;
    updated_at: Date;
    anio: number;
    costo: number;
    fecha: Date;
    pagado: boolean;
    constructor();
    static setMatricula(matricula_create_request1: MatriculaCreateRequest, matricula1: Matricula): void;
    static setMatriculas(matricula_create_requests: Array<MatriculaCreateRequest>, matriculas: Array<Matricula>): void;
}
export { MatriculaCreateRequest };
