import { NextRequest, NextResponse } from 'next/server'
import User from '@/model/User';
import connect from '@/lib/mongodb';
import bcrypt from "bcryptjs"
export async function POST(request:any) {
 const {password,firstName,lastName,email} = await request.json();
    await connect();
    const existingUser = await User.findOne({email});
    if(existingUser){
      return new NextResponse("phoneNumber already in use",{
        status:400
      });
    }
    const hashPassword = await bcrypt.hash(password,5);
    const newUser = new User({
     firstName: firstName,
      password: hashPassword,
       email:email,
       lastName:lastName
      
      
    });

    try{
      await newUser.save();
      return new NextResponse("User is registerd",{
        status:200
      });

    }catch(error:any){
      return  new NextResponse(error,{
        status:500,
      })
    }
   
 
}