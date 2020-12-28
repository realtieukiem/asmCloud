var http = require('http');
const express = require('express'); //Thêm module express vào project.
const app = express(); //Khởi tạo một app mới sử dụng module express


app.use(express.static(require('path').join(__dirname, "public")))

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const engines = require('consolidate');
app.engine('hbs', engines.handlebars);

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'hbs'); // Sử dụng hbs làm view engine

const toys_Route = require('./routes/toys');
app.use('/', toys_Route);

app.listen(process.env.PORT || 6969, function () {
    console.log("Your app running on port 6969");
}) //PORT
