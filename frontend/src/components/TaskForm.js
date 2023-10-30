
const TaskForm = ({name,onChangeInputHandler,createTask,updateTask,isEditing}) => {
    return (
    <form className="task-form" onSubmit={isEditing?updateTask:createTask}>
        <input type="text" value={name} name={name} onChange={onChangeInputHandler} placeholder="Add a task"/>
        <button type="submit">{isEditing?"Edit":"Add"}</button>
    </form>
  )
}

export default TaskForm