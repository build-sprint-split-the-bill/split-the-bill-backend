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

module.exports = router