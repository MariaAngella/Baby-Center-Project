const express = require("express");
const router = express.Router();
const Register = require("../models/officialmodel");

const mongoose = require("mongoose");



/* router.get("/", async (req, res) => {
  if (req.session.user) {
    
    let items = await Register.find();
   
    res.render("officialdashboard", {
      users: items,
      currentUser: req.session.user
    });
  } else {
    res.redirect("/officiallogin");
  }
});
 */


router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("officialdashboard", { parents: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});




module.exports = router;
