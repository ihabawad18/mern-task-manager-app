const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,"Please add task name"],
            maxLength: [20,"The name must be at most 20 characters"]
        },
        completed:{
            type: Boolean,
            required: true,
            default: false
        }
    }, 
    {
        timestamps: true
    }
)

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;