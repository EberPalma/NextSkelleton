/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    env: {
        MYSQL_HOST: "127.0.0.1",
        MYSQL_PORT: "3306",
        MYSQL_DATABASE: "orange_tree",
        MYSQL_USER: "root",
        MYSQL_PASSWORD: "",
    },
};

module.exports = nextConfig;
