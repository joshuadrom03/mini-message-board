const {Router} = require("express")
const indexRouter = Router();
const express = require("express")
const app = express()
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini MessageBoard", messages: messages})
  })

  indexRouter.post("/new", (req, res) => {
    
    messages.push({ text: req.body.textMessage, user: req.body.userName, added : new Date()})
    res.redirect("/")
  })

  module.exports = indexRouter