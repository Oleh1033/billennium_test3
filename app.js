import express from 'express';
import bodyParser from 'body-parser';

// import * as data from '../db/db.txt';
// const word = data.name;
// console.log(word); // output 'testing'



const PORT = 5555;

var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// var fs = require('fs');
// var contents = fs.readFileSync('path to file'');
// var json = JSON.parse(contents);
// res.json(json)

app.get('/1', function (req, res) {
  res.send('Hello World 021');
});


app.get('/do', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(PORT, function () {
  console.log("Example app listening at ", PORT)
});