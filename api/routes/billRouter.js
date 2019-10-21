const express = require("express");
const router = express.Router();
const Bills = require("../../data/models/billsModel");
// const { myprivate } = require("../middleware/auth");
router.use(express.json());


router.get("/", async (req, res, next) => {
    try {
      const users = await Bills.get();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;