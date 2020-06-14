const service =require('../TodoList_service/getAndupdateDataService');


const getAllitems = async (req,res) => {
    const data = await service.getAllItems();
    console.log(data);
    res.json(data) ;
};

const insertOneItem= (req,res) => {
    const todo = req.body.item ;
    const todo_in = {
        'item' : todo 
    }
    service.insertOneItem(todo_in) ;
    res.json() ;
};

const deleteOneItem = (req,res) => {
    const item = req.body.item;
    const itemTodelete = {
        'item' : item
    }
    service.deleteOneItem(itemTodelete);
    res.json() ;
};

const updateOneItem = (req,res) => {
    const item = req.body;
    const itemTodelete = {
        'item' : item.item,
        'newValue' : item.newValue
    }
    service.updateOneItem(itemTodelete);
    console.log(itemTodelete);
    res.json() ;
};


module.exports = {
    getAllitems,
    insertOneItem,
    deleteOneItem,
    updateOneItem
};