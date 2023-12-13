import { Alumno } from '../../../../estructura/alumno/domain/model/alumno';
declare class Matricula {
    static MATRICULA: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    anio: number;
    costo: number;
    fecha: Date;
    pagado: boolean;
    constructor();
    alumno: Alumno;
}
export { Matricula };
