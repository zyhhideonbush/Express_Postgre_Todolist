const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended:false});

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser:711217@cluster0-nuv8a.mongodb.net/test?retryWrites=true&w=majority');
const todoSchema = new mongoose.Schema({
    item:String
});
const Todo = mongoose.model('Todo',todoSchema);

function router(app){
    app.route('/todo')
        .get(function(req,res){
            Todo.find({},function(err,data){
                if(err) throw err ;
                res.render('todo',{todos:data});
            })
        })
        .post(urlencodedParser,function(req,res){
            Todo(req.body).save(function(err,data){
                if(err) throw err ;
                res.json(data);
            })
        });

    app.delete('/todo/:item',function(req,res){
        Todo.find({ item:req.params.item.replace(/-/g," ")}).remove(function(err,data){
            if(err) throw err ;
            res.json(data);
        });
    });
}



module.exports.router = router ;
