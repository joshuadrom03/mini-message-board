const {Router} = require("express")

const indexRouter = Router();

//create the index router routes
indexRouter.get("/", (req, res)=> {
    res.send("Index Page")
})

module.exports = indexRouter;