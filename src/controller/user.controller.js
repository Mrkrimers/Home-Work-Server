const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse')
const { getAll } = require('../service/user.service')

route.get('/', (req, res) => {
    try {
        const data = getAll();
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

module.exports = route;