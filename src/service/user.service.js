const { getAllDB } = require('../repository/user.repository');

async function getAll() {
    const data = await getAllDB();
    if (!data.length) throw new Error(`DB is empty`);

    return data;
}

module.exports = { getAll }