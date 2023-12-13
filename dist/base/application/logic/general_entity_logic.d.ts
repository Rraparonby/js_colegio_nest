import { Connexion } from '../../util/connexion_knex';
declare class GeneralEntityLogic {
    connexion1?: Connexion;
    query: string;
    query_pagination: string;
    constructor();
}
export { GeneralEntityLogic };
