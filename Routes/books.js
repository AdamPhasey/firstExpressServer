const express = require('express');
const router = express.Router();

const books = require("../books-data");

router.get('/', function (req, res) {
    res.send("This worked")
})

module.exports = router;