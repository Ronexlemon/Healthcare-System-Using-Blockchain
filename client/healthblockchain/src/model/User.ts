import mongoose from "mongoose";
const {Schema} = mongoose;
 const userSchema = new Schema(
    {
        email:{
            type:String,
            unique:true,
            required:false,
        },
        
        password:{
            type:String,
            required: false,
        },
       
          fullName:{
            type:String,
            unique:false,
            required:false,
        },

    },
    {timestamps:true}
 );
  export default mongoose.models.User || mongoose.model("User",userSchema);