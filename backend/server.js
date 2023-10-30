const dotenv =require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRouter");
const cors = require('cors');
const app = express();

// Middlewares 

app.use(express.json());
app.use(cors());
app.use('/api/tasks',taskRoutes);



const PORT = process.env.PORT || 5000;

// start DB then express server 
const startServer = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
}

startServer();