import { Docente } from '../../../../estructura/docente/domain/model/docente';
import { Materia } from '../../../../estructura/materia/domain/model/materia';
declare class DocenteMateria {
    static DOCENTE_MATERIA: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    id_docente: number;
    id_docente_descripcion: string;
    id_materia: number;
    id_materia_descripcion: string;
    constructor();
    docente: Docente;
    materia: Materia;
}
export { DocenteMateria };
