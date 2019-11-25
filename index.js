const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const logger = require("./Middleware/logger")
// app.use(logger); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "views")));
app.use('/api/bosses', require("./Routes/Api/bosses"));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Welcome to the year ${PORT}`))