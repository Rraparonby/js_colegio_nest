"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connexion = void 0;
const config_knex_1 = require("./config_knex");
const knex_1 = require("knex");
class Connexion {
    constructor() {
        this.titulo = "";
        this.titulo = "Connexion";
    }
    static async GetNewConnexion() {
        let connexion1 = new Connexion();
        let connection = null;
        try {
            connection = await (0, knex_1.default)(config_knex_1.ConfigKnex);
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
            let results_general = await ((_a = this.connection) === null || _a === void 0 ? void 0 : _a.schema.raw(sql));
            let results = results_general[0];
            return results;
        }
        catch (ex) {
            throw ex;
        }
    }
    async executeSelect(table, pagination1) {
        try {
            let results_general = await this.connection.select('*').from(table)
                .limit(pagination1.limit)
                .offset(pagination1.skip);
            return results_general;
        }
        catch (ex) {
            throw ex;
        }
    }
    async executeInsert(table, values) {
        try {
            let results = await this.connection(table)
                .insert(values);
            return results;
        }
        catch (ex) {
            throw ex;
        }
    }
    async executeUpdate(table, values_where, values) {
        try {
            let results = await this.connection(table).where(values_where)
                .update(values);
            return results;
        }
        catch (ex) {
            throw ex;
        }
    }
    async executeDelete(table, values) {
        try {
            let results = await this.connection(table).where(values)
                .del();
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
    async executeSelectFunction(table, builder_function1, pagination1) {
        try {
            let results_general = await this.connection.select('*')
                .from(table)
                .where(builder_function1)
                .limit(pagination1.limit)
                .offset(pagination1.skip);
            return results_general;
        }
        catch (ex) {
            throw ex;
        }
    }
    async executeSelectObject(table, jobject1, pagination1) {
        try {
            let results_general = await this.connection.select('*').from(table)
                .where(jobject1)
                .limit(pagination1.limit)
                .offset(pagination1.skip);
            return results_general;
        }
        catch (ex) {
            throw ex;
        }
    }
    async executeSelectKeyValue(table, key_value1, pagination1) {
        try {
            let results_general = await this.connection.select('*').from(table)
                .where(...key_value1)
                .limit(pagination1.limit)
                .offset(pagination1.skip);
            return results_general;
        }
        catch (ex) {
            throw ex;
        }
    }
}
exports.Connexion = Connexion;
//# sourceMappingURL=connexion_knex.js.map