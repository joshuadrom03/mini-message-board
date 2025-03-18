const {Router} = require("express")
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res)=> {
    res.render("form")
})

newMessageRouter.post("/new")

module.exports = newMessageRouter;