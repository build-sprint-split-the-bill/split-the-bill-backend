const db = require('../dbConfig')

module.exports = {
    get,
    findBy,
    findById,
    insert,
    update,
    remove
}

function get() {
    return db('bills')
}

function findById(id) {
    return db('bills')
    .where({ id })
    .first()
}

async function insert(bill) {
    return db("bills").insert(bill);
  }

  function findBy(name) {
      return db('bills')
      .where({ name })
      .first()
  }

  function update(id, bills) {
      return db("bills")
      .where({ id })
      .update(bills);
  }

  function remove(id) {
      return db("bills")
      .where({ id })
      .del();
  }
  
  