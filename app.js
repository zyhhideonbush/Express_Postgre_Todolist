const express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    routes = require('./TodoList_service/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(3001,function(){
    console.log('Server running at port 3000');
});

