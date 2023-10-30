const express = require("express");
const {createTask,getTasks,getTask, deleteTask, updateTask} = require("../controllers/taskController");
const router = express.Router();

router.route('/').post(createTask)
.get(getTasks);

router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;