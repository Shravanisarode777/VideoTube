








import dotenv from "dotenv";
dotenv.config();

console.log("MONGO URI =", process.env.MONGODB_URI);

import connectDB from "./db/index.js";

connectDB();

// we use dotenv to load environment variables as soon as possible in our application, 
// so we can use them in our code








// db connection in index file
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app=express
// function connectDB() {}
// connectDB()

// better approach affi function ->excute ->;
(async()=>{
try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("Error connecting to DB",error)
    throw error
   })
   app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
   }
    
} catch (error) {
   console.log("Error connecting to DB",error)
   throw error 
}
})()
*/