import { Sueldo } from '../../../../financiero/sueldo/domain/model/sueldo';
import { Contrato } from '../../../../financiero/contrato/domain/model/contrato';
import { Materia } from '../../../../estructura/materia/domain/model/materia';
import { Nota } from '../../../../proceso/nota/domain/model/nota';
import { DocenteMateria } from '../../../../estructura/docente_materia/domain/model/docente_materia';
declare class Docente {
    static DOCENTE: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    anios_experiencia: number;
    nota_evaluacion: number;
    constructor();
    sueldos: Sueldo[];
    contrato: Contrato;
    materias: Materia[];
    notas: Nota[];
    docente_materias: DocenteMateria[];
}
export { Docente };
