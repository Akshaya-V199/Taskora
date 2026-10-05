const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");

dotenv.config();

const PORT=process.env.PORT || 5000;
const app=express();

//middleware
app.use(express.json());
app.use(cors());

//connect mongodb
connectDB();

//test route
app.get("/",(req,res)=>{
    res.send("Taskora Backend is running...");
});

//start server

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});