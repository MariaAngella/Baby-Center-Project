const express = require("express");
const router = express.Router();
const Register = require("../models/parentdbmodel");






router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("officialdashboard", { users: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});



router.delete('/delete', (req, res) => {  
  db.collection("officialdashboard").findOneAndDelete(
    { name: req.body.babyname },
    (err, result) => {
      if (err) return res.send(500, err);
      res.send("An appointment is deleted");
    }
  );})


module.exports = router;
