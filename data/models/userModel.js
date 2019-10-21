const db = require('../dbConfig')

module.exports = {
    get,
    // getBy,
    findById,
    // insert,
    // update,
    // remove
}

function get() {
    return db(user)
}

function findById(id) {
    return db('users')
    .where({ id })
    .first()
}