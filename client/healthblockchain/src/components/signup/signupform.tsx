"use client"
import React from "react";
import logoh from "../../../public/img/logoh.png"
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async(data: any) => {
        const dataa = {
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email,
            password: data?.password,
            role:data?.role,
          };
          try{
            fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log("respone",response)
          return response.json();
        })
        .then(datar => {
          console.log('Success:', datar);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      

          }catch(error){

          }


      }

   
      
      
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-white   w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs shadow-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="h-1/2 w-full"  >
                <div className="">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sign up.</h1>
                    <div className="flex flex-col  items-center m-0">
                    <Image  src={logoh} alt=""/>
                   
                    

                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold " htmlFor="password">
                        First-Name
                    </label>
                    <input  
                     {...register("firstName", {
                        required: " This is required ",
                      })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="John" />
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Last-Name
                    </label>
                    <input  
                     {...register("lastName", {
                        required: " This is required ",
                      })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Doe" />
                </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input 
                     {...register("email", {
                        required: " This is required ",
                      })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                                Role
                            </label>
                            <select
                                {...register("role", {
                                    required: " This is required ",
                                })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="role"
                            >
                                <option value="">Select Role</option>
                                <option value="hospital">Hospital</option>
                                <option value="insurance">Insurance</option>
                                <option value="patient">Patient</option>
                            </select>
                        </div>
                
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                     {...register("password", {
                        required: " This is required ",
                      })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" />
                </div>
                <div className="flex items-center justify-between mt-2 ">
                    <h2>Already a member?</h2>
                   
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                        Log in
                    </Link>
                </div>
                <div className="flex items-center justify-between  w-full">
                    <button type="submit" className="bg-[#A48989] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                        Sign Up
                    </button>
                    
                </div>
                </form>
            </div>
        </div>
    );
}
