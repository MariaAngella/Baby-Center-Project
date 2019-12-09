const express = require("express");
const router = express.Router();
const Register = require("../models/sittermodel");







router.get("/", async (req, res) => {
  if (req.session.user) {
    let items = await Register.find();

    res.render("sitterdashboarddb", {
      users: items,
      currentUser: req.session.user
    });
  } else {
    res.redirect("/supervisorlogin");
  }
});






module.exports = router;
