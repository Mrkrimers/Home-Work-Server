const pool = require('../bd')

async function getAllDB() {
    const client = await pool.connect();

    const sql = `SELECT * FROM users`;
    const data = await client.query(sql);

    return data.rows;
}

module.exports = { getAllDB }