const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    try {
        const todo = await Todo.create({userId,title});
        return res.status(201).send(todo);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Something went wrong."
        })
    }
}

exports.getAllTodos = async (req,res)=>{
    const userId = req.userId;

    try{
        const todos = await Todo.find({},{userId:userId});
        res.status(200).send({
            success:true,
            Todos:todos
        })
    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            message: "Something went wrong."
        })
    }
}
exports.getTodo = async (req,res)=>{
    const userId = req.userId;
    const todoId = req.body.id; 
    try{
        const todos = await Todo.find({_id:todoId},{userId:userId});
        res.status(200).send({
            success:true,
            Todos:todos
        })
    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            message: "Something went wrong."
        })
    }
}

exports.updateTodo = async (req, res)=>{
    const todoId = req.params.id;
    const isCompleted = req.body.isCompleted;

    try{
        const getTodo = await findById(todoId);

        if(!getTodo){
            return res.status(400).send({message:"Todo could not found!"});
        }

        getTodo.isCompleted = isCompleted;
        await getTodo.save();

        return res.status(200).send({
            message:"Todo has been updated.",
        })
    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            message: "Something went wrong."
        })
    }
}