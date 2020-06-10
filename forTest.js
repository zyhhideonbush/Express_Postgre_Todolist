const axios =  require('axios')  ;
// const pg = require('pg') ;

// var knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1:5555',
//         user: 'postgres',
//         password: 'postgres',
//         database: 'todolist'
//     },
//     searchPath: ['knex', 'public'],
// })
// var data = [
//     { _id: 33, item: 'study c#', __v: 0 },
//     { _id: 22, item: 'study nodejs', __v: 0 },
//     { _id: 11, item: 'study step function', __v: 0 }
// ];

// var newww = data.map(x=>x.item) ;
// // var newd = JSON.stringify(data,['item']);
// console.log("===========================================");
// console.log(newww);
// console.log("===========================================");

// knex.schema.hasTable('todolistt').then(function (exists) {
//     if (!exists) {
//         return knex.schema.createTable('todolist', function (table) {
//             table.increments('id').primary();
//             table.string('item');
//         });
//     }
// })
// var result = knex.select('item').from('todolist'); 
// console.log(result);

// knex('todolist').insert([{ id: 3 }, { item: "go to school" }], function (err) {
//     if (err) throw err;
// });


// var result = knex.column('item').select().from('todolist') ;

// console.log("=======");

// console.log(result);

//mongoose DB
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://newuser:711217@cluster0-uugo9.mongodb.net/test?retryWrites=true&w=majority');
// const todoSchema = new mongoose.Schema({
//     item:String
// });
// const Todo = mongoose.model('Todo',todoSchema);
// const itemone  = Todo({item:'go to school'}).save(function(err){
//     if(err) throw err ;
//     console.log('item saved');
// });


// function findAllItem(){
//     return Todo.find({},function(err,data){
//         if(err) throw err ;
//     });
// };

// var num = findAllItem();
// console.log(num);

async function getTodos() {
    const todos = await axios.get('http://localhost:3001/todos').then(function (response) {
        console.log(response)
        return response;
    });
    return todos;
  };

const todositem = getTodos() ;
console.log(todositem)