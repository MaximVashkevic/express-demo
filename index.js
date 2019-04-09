const fs = require("fs")

const express = require("express")
const app = express()

app.use(express.static("."))

app.get("/", function(req, res){
    const text = fs.readFileSync("index.html", "utf-8")
    // const text = "Hello"
    res.setHeader("type", "text/html")
    console.log(text.toString())
    res.send(text)
})

app.listen(3000, function(){
    console.log("server started...")
})