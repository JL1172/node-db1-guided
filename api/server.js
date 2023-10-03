const express = require("express")
const helmet = require("helmet");

const shippersRouter = require("./shippers/shippers-router")

const server = express()

server.use(express.json())
server.use(helmet());

server.use("/api/shippers", shippersRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" })
})

module.exports = server
