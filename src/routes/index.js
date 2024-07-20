// src/routes/index.js
const express = require("express");
const v1Routes = require("./v1");

const router = express.Router();

// Use the v1 routes under the '/v1' path
router.use("/v1", v1Routes);

module.exports = router;
