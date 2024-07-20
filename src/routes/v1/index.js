// src/routes/v1/index.js
const express = require("express");
const { InfoController } = require("../../controllers");

const router = express.Router();

// Define the route using the InfoController
router.get("/info", InfoController.info);

// Export the router
module.exports = router;
