var express = require("express");
var path = require('path');
var body_parse = require('body-parser');
var json_file_object = require("json-file-object");
var peers = require("./peers");

// TODO: Remove after project 1 since this renders html pages
var http = require('http');

var app = express();

var etat = json_file_object({
    file: "etat.json",
    value: {
        encryptedKey: null,
        yp: {},
        letters: []
    }
});

peers(etat, ["http://localhost:8889/etat"], 15);

app.locals.pretty = true;

// TODO: Remove after project 1 since this renders html pages
app.use('/', express.static(path.join(__dirname, 'public/')));

app.use('/vendors', express.static(path.join(__dirname, 'public/vendors')));
app.use('/img', express.static(path.join(__dirname, 'public/images')));
app.use('/jss', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css', express.static(path.join(__dirname, 'public/stylesheets')));

http.createServer(app).listen(8888);

/*
TODO: Uncomment for project 2
app.get("/", function (req, res) {
    res.render("courriel.jade", {
        title: "Courriel"
    });
});

app.get("/archive", function (req, res) {
    res.render("courrielArchive.jade");
});

app.get("/test", function (req, res) {
    res.render("test.jade", {
        title: "Testing"
    });
});

app.post("/storeEncryptedKey", body_parse.json(), function (req, res) {
    console.log(req.body.encryptedKey);
    etat.encryptedKey = req.body.encryptedKey;
    res.json("ok");
});

app.post("/addAddress", body_parse.json(), function (req, res) {
    etat.yp[req.body.pem] = req.body;
    res.json("Address added");
});

app.post("/postMessage", body_parse.json(), function (req, res) {
    etat.letters.push(req.body);
    res.json("Message posted");
});

app.get("/etat", function (req, res) {
    res.json(etat);
});

app.listen(8888);
*/