const express = require("express");
const token = require("../middelware/tokenValidation");

const router = express.Router();
const Contact = require("../Model/contactModel");

router.get("/", async (req, res) => {
  try {
    const contactlist = await Contact.find();
    res.json(contactlist);
  } catch (err) {
    console.log("ERROR", err);
  }
});

router.post("/add_contact", (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    telephone: req.body.telephone,
    email: req.body.email,
    date: req.body.date,
  });
  contact
    .save()
    .then((data) => {
      res.json("contact was added");
    })
    .catch((err) => {
      console.log("ERR");
    });
});

router.delete("/delete_contact/:id", token, async (req, res) => {
  try {
    const deleteContact = await Contact.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json("contact delete");
  } catch (err) {
    console.log("ERROR", err);
  }
});
router.patch("/modify_contact/:id", token, async (req, res) => {
  try {
    const updateContact = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          telephone: req.body.telephone,
          email: req.body.email,
        },
      }
    );
    res.json("contact update");
  } catch (err) {
    console.log("ERROR", err);
  }
});
module.exports = router;
