import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET(request) {
    //const url = new URL(request.url);
    //return NextResponse.json(url);
    try {
        const dbconnection = await mysql.createConnection({
            host: "localhost",
            database: "orange_tree",
            port: "3306",
            user: "root",
            password: "",
            //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
        });

        const query = "SELECT * FROM products";
        const values = [];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        const data = await [results];

        return NextResponse.json(data[0]);
    } catch (e) {
        return NextResponse.error(e);
    }
}

export async function POST(request) {
    try {
        const dbconnection = await mysql.createConnection({
            host: "localhost",
            database: "orange_tree",
            port: "3306",
            user: "root",
            password: "",
            //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
        });

        const req = await request.json();

        const query = "INSERT INTO products (name, description) VALUES (?, ?)";
        const values = [req.name, req.description];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        const data = await [results];
        return NextResponse.json(data[0].insertId);
    } catch (error) {}
}
