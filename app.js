const express = require("express")
const app = express()

const indexRouter = require("./routers/indexRouter")
const newMessageRouter = require("./routers/newMessageRouter")

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000

app.listen(PORT, () => {
    console.log("server running")
})