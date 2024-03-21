import { NextRequest, NextResponse } from 'next/server'
import User from '@/model/User';
import connect from '@/lib/mongodb';
import bcrypt from "bcryptjs"
export async function POST(request:any) {
 const {password,firstName,lastName,email,role} = await request.json();
    await connect();
    const existingUser = await User.findOne({email});
    if(existingUser){
      return new NextResponse(JSON.stringify({ error: 'Email exists' }),{
        status:400
      });
    }
    const hashPassword = await bcrypt.hash(password,5);
    const newUser = new User({
     firstName: firstName,
      password: hashPassword,
       email:email,
       lastName:lastName,
       role:role,
      
      
    });

    try{
      await newUser.save();
      return new NextResponse(JSON.stringify({ message: 'Success' }),{
        status:200
      });

    }catch(error:any){
      return  new NextResponse(JSON.stringify({ error:error }),{
        status:500,
      })
    }
   
 
}