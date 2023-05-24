import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET(request) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "orange_tree",
        port: "3306",
        user: "root",
        password: "",
        //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    });

    try {
        const query = "SELECT * FROM products";
        const values = [];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        //const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await [results];
        return NextResponse.json(data[0]);
    } catch (e) {
        return NextResponse.error(e);
    }
}
