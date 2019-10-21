const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../../data/models/userModel");
const db = require("../../data/dbConfig");
const router = express.Router();
router.use(express.json());



router.post('/register', Users.hashPassword, (req, res) => {
    let user = req.body;
    Users.insert(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
        console.log(error)
      res.status(500).json({message: 'There was a problem registering'})
    })
  });


  router.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    db("users")
      .where({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = Users.generateToken(user);
          res.status(200).json({ token });
        } else {
          res.status(401).json({ Error: "password fail" });
        }
      })
      .catch(error => {
        res.status(500).json({ Error: "Didn't get past findUser" });
      });
  });
  
  
  
  
  router.post("/find/:id", (req, res) => {
    const id = req.params.id;
    Users
      .findById(id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json({ Error: "Something's gone horribly wrong" });
      });
  });



  router.get("/", (req, res) => {
    Users.get().then(users => {
      res.status(200).json(users);
    });
  });


module.exports = router;