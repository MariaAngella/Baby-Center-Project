const express = require("express");
const router = express.Router();
const Register = require("../models/parentdbmodel");

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

/* 
 */



router.get("/", async (req, res) => {
  if (req.session.user) {
    let items = await Register.find();
    // if (req.query.city){
    //   items = await Register.find({city:req.query.city})
    // }
    res.render("officialdashboard", {
      users: items,
      currentUser: req.session.user
    });
  } else {
    res.redirect("/officiallogin");
  }
});


module.exports = router;
