const express = require("express");
const server = express();
const cors = require("cors");
const authRoute = require("./routes/userRoute");
const billsRouter = require('./routes/billRouter');
const friendsRoute = require('./routes/friendRouter')
const auth = require('./middleware/auth')
server.use(cors())
server.use("/api/friends", friendsRoute)
server.use("/api/auth", authRoute);
server.use("/api/bills", billsRouter);


module.exports = server;