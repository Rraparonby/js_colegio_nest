"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralEntityLogic = void 0;
const connexion_knex_1 = require("../../util/connexion_knex");
class GeneralEntityLogic {
    constructor() {
        this.query = "";
        this.query_pagination = "";
        this.connexion1 = new connexion_knex_1.Connexion();
        this.query = "";
        this.query_pagination = "";
    }
}
exports.GeneralEntityLogic = GeneralEntityLogic;
//# sourceMappingURL=general_entity_logic.js.map