// src/index.js
const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const serverConfig = require("./config/server-config");

const app = express();

// Use the main API routes
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
  // Logger.info("Sucessfully Started server",{msg: "something" });
});
 