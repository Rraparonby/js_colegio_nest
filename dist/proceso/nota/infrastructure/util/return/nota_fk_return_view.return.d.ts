import { Alumno } from '../../../../../estructura/alumno/domain/model/alumno';
import { Materia } from '../../../../../estructura/materia/domain/model/materia';
import { Docente } from '../../../../../estructura/docente/domain/model/docente';
declare class NotaFKReturnView {
    alumnosFK: Array<Alumno>;
    materiasFK: Array<Materia>;
    docentesFK: Array<Docente>;
    constructor();
}
export { NotaFKReturnView };
