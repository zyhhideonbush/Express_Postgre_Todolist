// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         port: '5555',
//         user: 'postgres',
//         password: 'postgres',
//         database: 'todolist'
//     }
// })

// knex.schema.hasTable('todolist').then(function (exists) {
//     if (!exists) {
//         return knex.schema.createTable('todolist', function (table) {
//             table.increments('id').primary();
//             table.string('item',100);
//         });
//     }
// })
// var result = knex.select('item').from('todolist'); 
// knex.schema.then(function(){
//     knex('todolist').insert({item:'go to school'});
// });

// knex.column('item').select().from('todolist') ;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser:711217@cluster0-nuv8a.mongodb.net/test?retryWrites=true&w=majority');
const todoSchema = new mongoose.Schema({
    item:String
});
const Todo = mongoose.model('Todo',todoSchema);
// const itemone  = Todo({item:'go to school'}).save(function(err){
//     if(err) throw err ;
//     console.log('item saved');
// });

function findAllItem(){
    return Todo.find({},function(err,data){
        if(err) throw err ;
    });
};

var num = findAllItem();
console.log(num);
