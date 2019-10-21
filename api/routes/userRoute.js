const express = require('express');
const bcrypt = require("bcryptjs");
const Users = require("../../data/models/userModel");
const { generateToken } = require("../middleware/auth");
const router = express.Router();
router.use(express.json());



router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
  
    Users.insert(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
        console.log(error)
      res.status(500).json({message: 'There was a problem registering'})
    })
  });


  router.post('/login', (req, res) => {
    let { username, password} = req.body;
    Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({token});
      } else {
        res.status(401).json({ error: error, message: "please provide the valid credentialsthere was a problem logging in the user"})
      }
    })
    .catch(error => {
      res.status(500).json({ error: error, message: 'error in login'})
    })
  });


















router.get('/', async (req,res,next) => {
    try {
        const user = await User.get();
        res.status(200).json(user); 
    } catch (err) {
        next(err)
    }
})

module.exports = router;