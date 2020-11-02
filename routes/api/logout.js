const express = require("express");
const router = express.Router();

//log out
router.get("/logout", async (req, res) => {
    req.logout();
    res.json({ message: 'logged out' });
});

module.exports = router;