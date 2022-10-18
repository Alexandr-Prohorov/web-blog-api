const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "157947",
    host: "localhost",
    port: 5432,
    database: "web_blog_db",
})

module.exports = pool