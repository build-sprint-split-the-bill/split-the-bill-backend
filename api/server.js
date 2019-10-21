const express = require("express");
const server = express();
const authRoute = require("./routes/userRoute");
const billsRouter = require('./routes/billRouter');


server.use("/api/auth", authRoute);
server.use("/api/bills", billsRouter);

module.exports = server;