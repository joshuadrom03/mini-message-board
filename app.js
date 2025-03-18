const express = require("express")
const app = express()
const path = require("node:path");

const messages = [
    {
      text: "Hello There",
      user: "Kenobi",
      added: new Date()
    },
    {
      text: "General Kenobi",
      user: "Grevious",
      added: new Date()
    }
  ];
  


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.render("index", {messages: messages})
});

app.get("/new", (req, res)=> {
    res.render("newMessage")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("server running")
})