const db = require('../dbConfig')

module.exports = {
    get,
    // getBy,
    findById,
    insert,
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

async function insert(user) {
    if (process.env.NODE_ENV === "production") {
      const [newUser] = await db("users").insert(user, ["id"]);
      return findById(newUser.id);
    } else {
      const [id] = await db("users").insert(user);
      return findById(id);

    }
  }
  
  