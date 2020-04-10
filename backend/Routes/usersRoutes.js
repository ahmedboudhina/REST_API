const express = require("express");
const router = express.Router();
const User = require("../Model/usersModel");
const bcrypt = require("bcrypt");
const validateRegister = require("../controler/validation").validateRegister;
const jwt = require("jsonwebtoken");
require("dotenv/config");

// Register
router.post("/register", async (req, res) => {
  // validation befor Create User
  const { error } = validateRegister(req.body);
  if (error) res.status(400).send(error.details[0].message);
  else {
    // verify if Email Exist
    const user = await User.findOne({ email: req.body.email });
    if (user) res.status(400).send("Email is already exist");
    else {
      try {
        // hash password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        });
        const savedUser = await user.save();

        const token = jwt.sign(
          { _id: savedUser._id },
          process.env.SECRET_TOKEN
        );

        res.header("auth-token", token).status(200).send({ user, token });
      } catch (err) {
        res.status(400).send({ msg: err });
      }
    }
  }
});

// Login
router.post("/login", async (req, res) => {
  // verify if Email Exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) res.status(400).send("Ivalid email or password");
  else {
    try {
      //compare Passord
      const verifyPassowrd = await bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!verifyPassowrd) res.status(400).send("Ivalid email or password");
      else {
        // Create token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
        res.header("auth-token", token).status(200).send({ user, token });
      }
    } catch (err) {
      res.status(400).send({ msg: err });
    }
  }
});

module.exports = router;
