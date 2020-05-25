var bodyParser = require('body-parser');
var data = [{item:'study java'},{item:'study node.js'},{item:'study express'}];
var urlencodedParser = bodyParser.urlencoded({ extended:false});

// var pg = require('pg');
// var config = {
//     user : 'postgres',
//     database : 'postgres',
//     password : 'postgres',
//     port : 54321
// };
// var pool = new pg.pool(config);

function router(app){
    app.route('/todo')
        .get(function(req,res){
            res.render('todo',{ todos : data });
        })
        .post(urlencodedParser,function(req,res){
            data.push(req.body);
            res.json(data);
        });

    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, "-") !== req.params.item ;
        });
        res.json(data);
    });
}



module.exports = router ;
