
import {app} from "./app.js"
import dotenv from "dotenv";
dotenv.config();
// import connectDB from "./db/db.js";
// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT||8000,()=>{
//         console.log("Server started at PORT")
//     }) 
//     app.on("error",(error)=>{
//         console.log("ERROR OCCURE IN STARTING IN SERVER",error)
//         throw error;
//     })
// })

// .catch((err)=>{
//     console.log("Failed to connect to data base ",err)
//     process.exit(1)
// })
app.listen(process.env.PORT||8000,()=>{
       console.log("Server started at PORT")})
     
