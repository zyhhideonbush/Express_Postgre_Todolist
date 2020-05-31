module.exports = app => {
    const db = require('./queries');

    app.route('/todo')
       .get(db.get_all_item)
       .post(db.insert_one_item);

    app.route('/todo/:item')
       .delete(db.delete_one_item);
}