# Task Manager Full Stack App

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing tasks. Users can keep track of both completed and incomplete tasks, edit them, delete them, and mark them as complete.
You can preview the app on this hosted website

https://task-manager-app-k67o.onrender.com/

## Key Features

   * Task List:
         View a list of tasks, categorized as completed and not completed.
   * Create Task:
        Add new tasks to the list.
   * Edit Task:
        Modify task details such as title, description, etc.
   * Delete Task:
        Remove tasks from the list.
   * Mark as Complete:
        Toggle the status of tasks between completed and not completed.


## Technologies Used

  * Frontend:

    * React
    * Axios for HTTP requests
 
  * Backend:

    * Node.js with Express
    * MongoDB for data storage
    * Mongoose for MongoDB object modeling
    
## Getting Started
   In order to run the application you must follow these steps:
   
   1- Clone the repository
   
        
        git clone https://github.com/ihabawad18/mern-task-manager-app.git

        
        

   2- Navigate to the backend folder:

       cd Workouts-App/backend


   3- Create .env file and set a MONGODB_URI connection string.

   4- create .env file in the frontend folder and set the REACT_APP_SERVER_URL to the API server endpoint. 
    
   5- Launching the app :
      
    * Running this command from the root directory of mern-task-manager-app folder:

   On windows:
   
   ```
      cd backend;npm start;
      cd ../frontend/;npm start;
   ```

   On linux:

   ```
      cd backend && npm start && cd ../frontend/ && npm start
   ```
