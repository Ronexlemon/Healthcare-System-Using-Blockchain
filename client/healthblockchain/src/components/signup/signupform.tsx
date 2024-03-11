import React from "react";
import logoh from "../../../public/img/logoh.png"
import Image from "next/image";
export default function SignUpForm() {
    const data = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'examplepassword'
      };
      
      fetch('http://localhost:3000/api/yourEndpointName', {
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
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white  w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs shadow-slate-100">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sign up.</h1>
                    <div className="flex flex-col  items-center m-2">
                    <Image  src={logoh} alt=""/>
                   
                    

                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        First-Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="John" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Last-Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Doe" />
                </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" />
                </div>
                <div className="flex items-center justify-between mb-2">
                    <h2>Already a member?</h2>
                   
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Log in
                    </a>
                </div>
                <div className="flex items-center justify-between  w-full">
                    <button className="bg-[#A48989] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                        Sign Up
                    </button>
                    
                </div>
            </div>
        </div>
    );
}
