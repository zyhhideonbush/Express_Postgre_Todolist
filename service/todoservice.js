const defultTable = function(){
    knex.schema.withSchema('public').createSchemaIfNotExists('todolist',function(table){
        table.increments();
        table.string('todo');
        table.timestamps();
    }).toString()
}
