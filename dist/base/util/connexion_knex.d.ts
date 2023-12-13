import { Pagination } from '../application/logic/pagination';
declare class Connexion {
    titulo: string;
    connection?: any;
    constructor();
    static GetNewConnexion(): Promise<Connexion>;
    executeQuery(sql: string): Promise<any>;
    executeSelect(table: string, pagination1: Pagination): Promise<any>;
    executeInsert(table: string, values: any[]): Promise<any>;
    executeUpdate(table: string, values_where: any, values: any[]): Promise<any>;
    executeDelete(table: string, values: any[]): Promise<any>;
    static GetQueryPagination(pagination1: Pagination): string;
    executeSelectFunction(table: string, builder_function1: any, pagination1: Pagination): Promise<any>;
    executeSelectObject(table: string, jobject1: any, pagination1: Pagination): Promise<any>;
    executeSelectKeyValue(table: string, key_value1: any[], pagination1: Pagination): Promise<any>;
}
export { Connexion };
