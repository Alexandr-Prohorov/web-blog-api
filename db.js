const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "157947",
    host: "localhost",
    port: 5432,
    database: "aleksandrprohorov",
})

module.exports = pool