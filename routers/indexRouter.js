const {Router} = require("express")

const indexRouter = Router();

//create an array of sample messages
const messages = [
    {
        text: "hello there",
        user: "Kenobi",
        added: new Date()
    },
    {
        text: "General Kenobi!",
        user: "Grevious",
        added: new Date()
    },

]

//create the index router routes
indexRouter.get("/", (req, res)=> {
    res.send("Index Page")
})

module.exports = indexRouter;