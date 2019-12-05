const express = require("express");
const router = express.Router();
const Register = require("../models/officialmodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("officialdashboard");
});

router.post("/", async (req, res) => { 
     res.render("officiallogin");
});

module.exports = router;
