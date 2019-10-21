const express = require("express");
const server = express();
const authRoute = require("./routes/userRoute");



server.use("/api/auth", authRoute);


module.exports = server;