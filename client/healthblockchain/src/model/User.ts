import mongoose from "mongoose";
const {Schema} = mongoose;
 const userSchema = new Schema(
    {
        email:{
            type:String,
            unique:true,
            required:true,
        },
        
        password:{
            type:String,
            required:true,
        },
       
          firstName:{
            type:String,
            unique:false,
            required:true,
        },
        lastName:{
            type:String,
            unique:false,
            required:true,
        },

    },
    {timestamps:true}
 );
  export default mongoose.models.User || mongoose.model("User",userSchema);