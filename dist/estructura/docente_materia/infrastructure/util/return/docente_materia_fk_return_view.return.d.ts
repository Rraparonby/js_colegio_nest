import { Docente } from '../../../../../estructura/docente/domain/model/docente';
import { Materia } from '../../../../../estructura/materia/domain/model/materia';
declare class DocenteMateriaFKReturnView {
    docentesFK: Array<Docente>;
    materiasFK: Array<Materia>;
    constructor();
}
export { DocenteMateriaFKReturnView };
