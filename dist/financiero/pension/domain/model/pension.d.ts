import { Alumno } from '../../../../estructura/alumno/domain/model/alumno';
declare class Pension {
    static PENSION: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    id_alumno: number;
    id_alumno_descripcion: string;
    anio: number;
    mes: number;
    valor: number;
    cobrado: boolean;
    constructor();
    alumno: Alumno;
}
export { Pension };
