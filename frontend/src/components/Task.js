import {FaCheckDouble,FaEdit,FaRegTrashAlt} from 'react-icons/fa';
const Task = ({index,task,deleteTask,getSingleTask,setTasktoComplete}) => {
  return (
    <div className={task.completed?"task completed":"task"}>
        <p>
            <b>{index + 1}. </b>
            {task.name}
        </p>
        <div className="task-icons">
            <FaCheckDouble color='green' onClick={()=>setTasktoComplete(task)}/>
            <FaEdit color='purple' onClick={()=>getSingleTask(task)}/>
            <FaRegTrashAlt color='red' onClick={()=>deleteTask(task._id)}/>
        </div>
    </div>
  )
}

export default Task