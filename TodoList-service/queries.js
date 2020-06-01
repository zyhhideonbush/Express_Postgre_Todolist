const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser:711217@cluster0-uugo9.mongodb.net/test?retryWrites=true&w=majority');
const todoSchema = new mongoose.Schema({
    item:String
});
const Todo = mongoose.model('Todo',todoSchema);

const get_all_item = (req,res) => {
    Todo.find({},function(err,data){
        if(err) throw err ;
        console.log(data);
        res.render('todo' , {todos : data}) ;
    });
};

const insert_one_item = (req,res) => {
    Todo(req.body).save(function(err,data){
        if(err) throw err ;
        res.json(data);
    });
};

const delete_one_item = (req,res) => {
    Todo.find({ item:req.params.item.replace(/-/g," ")}).remove(function(err,data){
        if(err) throw err ;
        res.json(data);
    });
};

module.exports = {
    get_all_item,
    insert_one_item,
    delete_one_item
};