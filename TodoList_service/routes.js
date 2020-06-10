const controller = require('../TodoList_controller/getAndupdateDataController') 
module.exports = app => {

    app.route('/todos')
       .get(controller.getall)
       .post(controller.insertone);

    app.route('/todos/:item')
       .delete(controller.deleteone);
}