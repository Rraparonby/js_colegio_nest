"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connexion = void 0;
const promise_1 = require("mysql2/promise");
const config_1 = require("./config");
class Connexion {
    constructor() {
        this.titulo = "";
        this.titulo = "Connexion";
    }
    static async GetNewConnexion() {
        let connexion1 = new Connexion();
        let connection = null;
        try {
            console.log(promise_1.default);
            connection = await promise_1.default.createConnection(config_1.Config.db);
            console.log(promise_1.default);
            console.log(connection);
            connexion1.connection = connection;
        }
        catch (ex) {
            throw ex;
        }
        return connexion1;
    }
    async executeQuery(sql) {
        var _a;
        try {
            let results_general = await ((_a = this.connection) === null || _a === void 0 ? void 0 : _a.execute(sql));
            const [results,] = [...results_general];
            return results;
        }
        catch (ex) {
            throw ex;
        }
    }
    async execute(sql, values) {
        var _a;
        try {
            let results_general = await ((_a = this.connection) === null || _a === void 0 ? void 0 : _a.execute(sql, values));
            const [results,] = [...results_general];
            return results;
        }
        catch (ex) {
            throw ex;
        }
    }
    static GetQueryPagination(pagination1) {
        let query_pagination = "";
        query_pagination = " LIMIT " + pagination1.limit + " OFFSET " + pagination1.skip;
        return query_pagination;
    }
}
exports.Connexion = Connexion;
//# sourceMappingURL=connexion.js.map