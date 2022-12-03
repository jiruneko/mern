const router = require("express").Router();

router.get("/profile", (req, res) => {
  res.send("profile router");
})

module.exports = router;
