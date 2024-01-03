const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ozpsql",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
