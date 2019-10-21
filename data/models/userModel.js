const db = require('../dbConfig')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    get,
    findBy,
    findById,
    insert,
    hashPassword,
    generateToken
}

function get() {
    return db('users')
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

  function findBy(username) {
      return db('users')
      .where({ username })
      .first()
  }

 


  function hashPassword(req, res, next) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 5);
    user.password = hash;
    next();
  }


   function generateToken (user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
    const secret = process.env.SECRET || "test"
    const options = {
      expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options);
  
  }