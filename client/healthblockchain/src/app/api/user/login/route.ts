import { NextRequest, NextResponse } from 'next/server'
import User from '@/model/User';
import connect from '@/lib/mongodb';
import bcrypt from "bcryptjs"
export async function POST(request:any) {
 const {email,password} = await request.json();
    await connect();
    
    const user = await User.findOne({email});
    
    

    

    try{
      if(!user){
        return new NextResponse("User does not exist",{
          status:400
        });
  
      }
      if (user) {
        const isPasswordCorrect = await bcrypt.compare(
          password,
          user.password
        );
        if (isPasswordCorrect) {
          return new NextResponse("login success",{
            status:200
          });
    
        }
      }
      
    }catch(error:any){
      return  new NextResponse(error,{
        status:500,
      })
    }
    return  NextResponse.json({hello:"world"})
 
}