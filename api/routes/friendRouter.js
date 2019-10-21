const express = require("express");
const router = express.Router();
const Friends = require("../../data/models/friendModel");
// const { myprivate } = require("../middleware/auth");
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const users = await Friends.get();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
})


router.post('/', (req,res) => {
    let friend = req.body;
    Friends.insert(friend)
    .then(saved => {
        res.status(200).json(saved)
    })
    .catch(error => {
        res.status(500).json({ message: "server error"})
    })
})

router.delete('/:id', (req, res) => {
    Bills.remove(req.params.id)
    .then(friend => {
      if(friend) {
        res.status(201).json(friend)
  
      } else res.status(404).json({ message: 'Friend not found'})
    })
    .catch(error => {
      res.status(500).json(error)
    })
  })
  
  router.put('/:id', (req, res) => {
    const changes = req.body
    Friends.update(req.params.id, changes)
    .then(friend => {
      res.status(200).json(friend)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  })
  


module.exports = router