const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser:711217@cluster0-uugo9.mongodb.net/test?retryWrites=true&w=majority');
const todoSchema = new mongoose.Schema({
    item:String
});
const Todos = mongoose.model('Todo',todoSchema);

const get_all_item = () => {
    return Todos.find({},function(err,data){
                if(err) throw err ;
                return data ;
            });
    }

const insert_item = (item) => {
    Todos(item).save(function(err){
        if(err) throw err ;
    });
};

const delete_item = (item) => {
    Todos.find(item).remove(function(err){
        if(err) throw err ;
    });
};

module.exports = {
    get_all_item,
    insert_item,
    delete_item
};
    
