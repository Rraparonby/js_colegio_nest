import mysql from 'mysql2/promise';
import { Pagination } from '../application/logic/pagination';
declare class Connexion {
    titulo: string;
    connection?: mysql.Connection;
    constructor();
    static GetNewConnexion(): Promise<Connexion>;
    executeQuery(sql: string): Promise<mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader>;
    execute(sql: string, values: any[]): Promise<mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader>;
    static GetQueryPagination(pagination1: Pagination): string;
}
export { Connexion };
