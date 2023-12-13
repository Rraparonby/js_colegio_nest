import { Matricula } from '../../../../proceso/matricula/domain/model/matricula';
import { AlumnoMateria } from '../../../../estructura/alumno_materia/domain/model/alumno_materia';
import { Materia } from '../../../../estructura/materia/domain/model/materia';
import { Pension } from '../../../../financiero/pension/domain/model/pension';
import { Nota } from '../../../../proceso/nota/domain/model/nota';
declare class Alumno {
    static ALUMNO: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    constructor();
    matricula: Matricula;
    alumno_materias: AlumnoMateria[];
    materias: Materia[];
    pensions: Pension[];
    notas: Nota[];
}
export { Alumno };
