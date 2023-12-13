import { Docente } from '../../../../estructura/docente/domain/model/docente';
declare class Sueldo {
    static SUELDO: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    id_docente: number;
    id_docente_descripcion: string;
    anio: number;
    mes: number;
    valor: number;
    cobrado: boolean;
    constructor();
    docente: Docente;
}
export { Sueldo };
