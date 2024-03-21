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
        role:{
            type:String,
            unique:false,
            enum:["admin","patient","insurance"],
            default:"user",  //if no
            required:true,
        },

    },
    {timestamps:true}
 );
  export default mongoose.models.User || mongoose.model("User",userSchema);