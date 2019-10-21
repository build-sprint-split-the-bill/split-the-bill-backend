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
    return db("friends")
}

function findById(id) {
    return db('friends')
    .where({ id })
    .first()
}

async function insert(friend) {
    if (process.env.NODE_ENV === "production") {
      const [newfriend] = await db("friends").insert(friend, ["id"]);
      return findById(newfriend.id);
    } else {
      const [id] = await db("friends").insert(friend);
      return findById(id);

    }
  }

  function findBy(name) {
      return db('friends')
      .where({ name })
      .first()
  }

  function update(id, friend) {
      return db("friends")
      .where({ id })
      .update(friend);
  }

  function remove(id) {
      return db("friends")
      .where({ id })
      .del();
  }
  
  