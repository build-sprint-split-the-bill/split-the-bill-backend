const jwt = require('jsonwebtoken')
const secrets = require('../secrets')

// secrets = secrets[process.env.NODE_ENV];

module.exports =  {
  myprivate: function (req, res, next)  {
  const token = req.headers.authorization;
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
    if (error) {
      res.status(401).json({ you: 'shall not pass!' })
    }
      req.decodedToken = decodedToken
      next()
    })
},


}
