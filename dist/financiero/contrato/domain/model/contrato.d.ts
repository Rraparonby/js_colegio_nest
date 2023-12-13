import { Docente } from '../../../../estructura/docente/domain/model/docente';
declare class Contrato {
    static CONTRATO: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    anio: number;
    valor: number;
    fecha: Date;
    firmado: boolean;
    constructor();
    docente: Docente;
}
export { Contrato };
