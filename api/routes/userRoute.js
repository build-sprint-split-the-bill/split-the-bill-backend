const express = require('express');
const Users = require("../../data/models/userModel");
const router = express.Router();
router.use(express.json());
const bcrypt = require("bcryptjs");

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





















router.get('/', async (req,res,next) => {
    try {
        const user = await User.get();
        res.status(200).json(user); 
    } catch (err) {
        next(err)
    }
})

module.exports = router;