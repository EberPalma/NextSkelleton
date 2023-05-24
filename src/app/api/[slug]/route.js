import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

// * Index and get function from the API
// * Params : [ request, { params } ]

export async function GET(request, { params }) {
    const id = getID(request);

    const slug = validateSlug(params.slug);

    //return NextResponse.json(params.slug);
    try {
        const dbconnection = await mysql.createConnection({
            host: "localhost",
            database: "orange_tree",
            port: "3306",
            user: "root",
            password: "",
            //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
        });

        const query =
            id == null
                ? `SELECT * FROM ${slug}`
                : `SELECT * FROM ${slug} WHERE id = ${id}`;
        const values = [];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        const data = [results];

        return NextResponse.json(data[0]);
    } catch (e) {
        return NextResponse.error(e);
    }
}

// * Store function from the API
// * Params : [ request, { params } ]

export async function POST(request, { params }) {
    const slug = validateSlug(params.slug);

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

        const query = `INSERT INTO ${slug} (name, description) VALUES (?, ?)`;
        const values = [req.name, req.description];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        const data = await [results];
        return NextResponse.json(data[0].insertId);
    } catch (error) {}
}

// * Update function from the API
// * Params : [ request, { params } ]

export async function PUT(request, { params }) {
    const slug = validateSlug(params.slug);

    const id = getID(request);

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

        const query = `UPDATE ${slug} SET name = ?, description = ? WHERE id = ${id}`;
        const values = [req.name, req.description];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        const data = await [results];
        return NextResponse.json(data[0].info);
    } catch (error) {}
}

// * Delete function from the API
// * Params : [ request, { params } ]

export async function DELETE(request, { params }) {
    const id = getID(request);

    const slug = validateSlug(params.slug);

    try {
        if (id == null) {
            return NextResponse.json({ messaje: "ID not defined" });
        }
        const dbconnection = await mysql.createConnection({
            host: "localhost",
            database: "orange_tree",
            port: "3306",
            user: "root",
            password: "",
            //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
        });

        const query = `DELETE FROM ${slug} WHERE id = ${id}`;
        const values = [];
        const [results] = await dbconnection.query(query, values);
        dbconnection.end();

        const data = await [results];
        return NextResponse.json(data[0]);
    } catch (error) {}
}

// * Validates the slug from the categories to prevent an error on the response
function validateSlug(param) {
    var slug = undefined;

    switch (param) {
        case "products":
            slug = "products";
            break;
        default:
            slug = undefined;
    }

    if (slug == undefined) {
        return NextResponse.json({ messaje: "Category not found" });
    }
    return slug;
}

// * Validates the ID from the searchParams on the response
function getID(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    return id;
}
