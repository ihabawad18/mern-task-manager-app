const { default: mongoose } = require("mongoose");
const  Task = require("../models/taskModel");


// create new task
const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

// get all tasks

const getTasks = async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

// get a single task
const getTask = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.isValidObjectId(id)){
            return res.status(400).json({
                message:`Please enter a valid id`
            }); 
        }
        const task = await Task.findById(id);
        if(!task){
           return res.status(404).json({
                message:`Unfound task with this id ${id}`
            });

        }
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

// delete a task

const deleteTask = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.isValidObjectId(id)){
            return res.status(400).json({
                message:`Please enter a valid id`
            }); 
        }
        const task = await Task.findByIdAndDelete(id);
        if(!task){
           return res.status(404).json({
                message:`Unfound task with this id ${id}`
            });

        }
        res.status(204).json();
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

// update task using patch

const updateTask = async (req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.isValidObjectId(id)){
            return res.status(400).json({
                message:`Please enter a valid id`
            }); 
        }
        const task = await Task.findByIdAndUpdate({_id:id},
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if(!task){
           return res.status(404).json({
                message:`Unfound task with this id ${id}`
            });
        }
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}