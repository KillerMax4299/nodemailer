const express = require("express");
const router = express.Router();
const { sendemail } = require("./middleware");
const { gethtml } = require("./gethtml");

router.post("/sendemail", async (req, res) => {
  await sendemail(req.body);
  res.json(true);
});

router.post("/gethtml",async function (req, res) {
  const result = gethtml(req.body);
  res.send(result);
});

module.exports = router;
