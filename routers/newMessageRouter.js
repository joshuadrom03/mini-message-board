const {Router} = require("express")

const newMessageRouter = Router();

newMessageRouter.get("/", (req,res) => {
    res.send("New messages!")
})

module.exports = newMessageRouter;