"use client"
import React from "react";
import { FormEvent } from "react";
import logoh from "../../../public/img/logoh.png"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";


//import { useRouter } from "next/router";



export default function LoginForm() {
    const router = useRouter();


    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     const onSubmit = async(data: any) => {

        
        
        console.log("starting")
    
      
        try {
            console.log("data daata",data?.email)
            // const res = await SignInUser({
            //     email: data?.email,
            //     password: data?.password,
            //   });
            //   alert(res)
            //   console.log("res res",  res)
            const res = await signIn('credentials', {
                redirect: false,
                email: data?.email,
                password:data?.password,
              })
            console.log("res is  giving",res);
            if (res?.url){
                const updatedSession: any = await getSession();
                const userRole = updatedSession?.user?.user?.role;
                console.log("user role",userRole)
                
               
  
                // Redirect based on user's role
                switch (userRole) {
                  case "hospital":
                    router.replace("/hospital");
                    break;
                  case "insurance":
                    router.replace("/insurance");
                    break;
                  case "patient":
                    router.replace("/patient");
                    break;
                  
                  default:
                    // Redirect to a default route or handle accordingly
                    router.replace("/login");
                    break;
                }

                //router.push("/dashboard/patience")
               // router.replace("/dashboard/patience")
                
            }
              
          
          
        } catch (error) {
            console.log("eroror",error)
          
         
        }
      };
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white  w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs shadow-slate-100">
                <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                    <div className="flex flex-col  items-center m-2">
                    <Image  src={logoh} alt=""/>
                    <h2>Welcome User,</h2>

                </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                    {...register("email", {
                        required: " This is required ",
                      })}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Enter your email" />
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                    {...register("password", {
                        required: " This is required ",
                      })}
                    
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="************" />
                </div>
               
                <div className="flex items-center justify-end mb-2 gap-16">
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    
                   
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signup">
                        register
                    </Link>
                </div>
                <div className="flex items-center justify-between  w-full">
                    <button type="submit" className="bg-[#A48989] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                        Sign In
                    </button>
                    
                    
                </div>
                </form>
            </div>
        </div>
    );
}
