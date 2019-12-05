const express = require("express");
const router = express.Router();
const Register = require("../models/sittermodel");

const mongoose = require("mongoose");

router.get("/:id", async (req, res) => {
  let mongo_id = req.params.id;
  Register.findById(mongo_id).then(
    item => {
      if (item) res.render("sitterdashboard", { parent: item });
      res.render("404");
    }
  );
});

module.exports = router;
