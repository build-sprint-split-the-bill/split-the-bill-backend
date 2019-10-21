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
    if (process.env.NODE_ENV === "production") {
      const [newBill] = await db("bills").insert(bill, ["id"]);
      return findById(newBill.id);
    } else {
      const [id] = await db("bills").insert(bill);
      return findById(id);

    }
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
  
  