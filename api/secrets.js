module.exports = {
    development: {
    jwtSecret: process.env.JWT_SECRET || 'my' 
},
production: {
    jwtSecret: process.env.JWT_SECRET || "my"

  }
}