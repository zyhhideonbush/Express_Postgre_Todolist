const service =require('../TodoList_service/getAndupdateDataService');


const getall = async (req,res) => {
    const data = await service.get_all_item();
    console.log(data);
    res.json(data) ;
};

const insertone= (req,res) => {
    const todo = req.body.item ;
    const todo_in = {
        'item' : todo 
    }
    service.insert_item(todo_in) ;
    res.json() ;
};

const deleteone = (req,res) => {
    const item = req.body;
    service.delete_item(item) ;
    res.json(item) ;
};

module.exports = {
    getall,
    insertone,
    deleteone
};