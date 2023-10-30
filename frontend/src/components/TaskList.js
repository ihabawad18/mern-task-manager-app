import { toast } from "react-toastify";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  const onChangeInputHandler = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (formData.name === "") {
      return toast.error("Input field cannot be empty.");
    }

    try {
      await axios.post(`${URL}/tasks`, formData);
      toast.success("Task added successfully");
      setFormData({ ...formData, name: "" });
      getTasks();
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const getTasks = async () => {
    try {
      setTasks([]);
      setIsLoading(true);
    //   await delay(500);
      const { data } = await axios.get(`${URL}/tasks`);
      console.log(tasks);
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const getSingleTask = (task) => {
    setFormData({
      name: task.name,
      completed: false,
    });
    setIsEditing(true);
    setTaskId(task._id);
  };

  const updateTask = async (e) => {
    e.preventDefault();
    if (formData.name === "") {
      return toast.error("Input field cannot be empty.");
    }
    try {
      await axios.patch(`${URL}/tasks/${taskId}`, formData);
      setIsEditing(false);
      toast.success('Task was edited successfully')
      setFormData({ ...formData, name: "" });
      setTaskId(null);
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/tasks/${id}`);
      toast.success('Task was deleted successfully')
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const setTasktoComplete = async (task) => {
    try {
      await axios.patch(`${URL}/tasks/${task._id}`, {
        name: task.name,
        completed: true,
      });
      toast.success('Task was set to complete successfully')
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    const filteredArray = tasks.filter((el)=>{
        return el.completed===true;
    });
    setCompletedTasks(filteredArray);

  },tasks)

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        onChangeInputHandler={onChangeInputHandler}
        name={formData.name}
        createTask={createTask}
        updateTask={updateTask}
        isEditing={isEditing}
      />
      {tasks.length > 0 && (
        <div className="stat-container">
          <p>
            <b>Total Tasks:</b> {tasks.length}
          </p>
          <p>
            <b>Completed Tasks:</b> {completedTasks.length}
          </p>
        </div>
      )}

      <hr />
      {isLoading && (
        <div className="loading">
          <img src={loadingImg} alt="loading"></img>
        </div>
      )}
      {!isLoading && tasks.length === 0 ? (
        <p>There is no tasks. Please add a task</p>
      ) : (
        <>
          {tasks.map((task, ind) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={ind}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                setTasktoComplete={setTasktoComplete}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskList;
