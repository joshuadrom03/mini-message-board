const express = require("express")
const app = express()
const path = require("node:path");

const indexRouter = require("./routers/indexRouter")
const newMessageRouter = require("./routers/newMessages")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter)

app.use("/new", newMessageRouter);


const PORT = 3000

app.listen(PORT, () => {
    console.log("server running")
})