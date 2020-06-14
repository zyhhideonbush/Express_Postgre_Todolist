const controller = require('../TodoList_controller/getAndupdateDataController') 
module.exports = app => {

    app.route('/todos')
       .get(controller.getAllitems)
       .post(controller.insertOneItem);

    app.route('/todos')
       .delete(controller.deleteOneItem)
       .put(controller.updateOneItem);
}