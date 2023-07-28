const express = require('express'); // takes http requests from clients through web browser and also helps server send back http response
const bodyParser = require('body-parser'); // body-parser is a helpful tool that helps your Node.js server understand and work with the data it receives from websites or apps

var app = express();


app.set("view engine","ejs"); // use to connect ejs with view engine
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})); // include to use body-parser
var items = [];

app.get("/",function(req,res){ // taking request using express
    res.render("list",{ejes : items}) // returns array to list.ejs
});

app.post("/",function(req,res){ // collecting the tasks from textbox input and push into array items
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");
})





app.listen("https://to-do-list-git-main-jaydeeprana049.vercel.app/",function(){ // creating server
console.log("Server started");
})
