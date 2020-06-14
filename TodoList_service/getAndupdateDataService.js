const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser:711217@cluster0-uugo9.mongodb.net/test?retryWrites=true&w=majority');
const todoSchema = new mongoose.Schema({
    item:String
});
const Todos = mongoose.model('Todo',todoSchema);

const getAllItems = () => {
    return Todos.find({},function(err,data){
                if(err) throw err ;
                return data ;
            });
    }

const insertOneItem = (item) => {
    Todos(item).save(function(err){
        if(err) throw err ;
    });
};

const deleteOneItem = (item) => {
    Todos.find(item).remove(function(err){
        if(err) throw err ;
    });
};

const updateOneItem = (item) => {
    Todos.update({item:item.item},{$set:{item:item.newValue}},function(err){
        if(err) throw err ;
    });
};


module.exports = {
    getAllItems,
    insertOneItem,
    deleteOneItem,
    updateOneItem
};
    
