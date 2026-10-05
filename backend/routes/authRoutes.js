const express=require("express");
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const router=express.Router();

router.post("/register",async(req,res)=>{
    try{
        const{username,email,password}=req.body;

        //1. validate required fields
        if(!username || !email ||!password){
            return res.status(400).json({
                message:"Username, email and password are required"
            });
        }

        //2. check whether the email already exists

        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                message:"Email already registered"
            });
        }

        //3. Hash the password
        const hashedPassword=await bcrypt.hash(password,10);

        //4.create a new user
        const user=await User.create({
            username,email,password:hashedPassword
        });

        //5.send response
        res.status(201).json({
            message: "User registered successfully",
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                role:user.role
            }
        });
    }
    catch(error){
        console.error("Registration error:",error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
});
module.exports=router;