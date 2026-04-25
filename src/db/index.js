import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
       const connectionInstance=
        await mongoose.connect(process.env.MONGODB_URI)
       console.log("DB CONNECTED SUCCESSFULLY",connectionInstance.connection.host)

    } catch (error) {
        console.log("ERROR CONNECTING TO DB",error)
        // we can throw error but node gives option to exit process with failure code
        process.exit(1)
        
    }
}
export default connectDB