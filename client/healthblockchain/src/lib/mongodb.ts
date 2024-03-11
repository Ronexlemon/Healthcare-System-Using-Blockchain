import mongoose from "mongoose";

const connect =async () => {
    if(mongoose.connections[0].readyState)return;
    try{
        await mongoose.connect(process.env.MONGODB_URI as string)
            
          
console.log("mongo connection success");
    }catch(error){
        console.log("error to db",error)
        throw new Error("error connecting to db");

    }




}

export default connect;