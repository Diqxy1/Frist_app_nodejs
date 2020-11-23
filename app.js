const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/src/contato.html");
});

app.get("/sobre-crud", function(req, res){
    res.send("Pagina sobre o crud");
});

app.listen(8080);