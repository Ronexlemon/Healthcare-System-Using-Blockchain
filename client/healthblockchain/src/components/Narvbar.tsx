"use client"
import React from "react";
import logoh from "../../public/img/logoh.png"
import Image from "next/image";
import Link from "next/link";


const Narvbar = ()=>{

    return(
        <div className="flex justify-around w-full  items-center h-20 bg-blend-lighten bg-blue-900  text-white ">
            <div>
<Image src={logoh} alt=""/>
            </div>
            <div className="flex justify-around w-1/4">
                <div>
                
                <Link href="/">Home</Link>
                </div>
                <div>
                <Link href="/about">About us</Link>
                </div>
                <div>
                <Link href="/faq"> FAQ`s</Link>
                   
                </div>


            </div>
            <div className="flex justify-around items-center gap-4">
    <div className="w-20 h-10  rounded-xl bg-black text-white flex justify-center items-center">
        <button className="text-center"> <Link href="/signup">Sign-up</Link>
                    </button>
    </div>
    <div className="w-20 h-10 bg-black rounded-xl text-white flex justify-center items-center">
        <button className="text-center">  <Link href="/login">Login</Link></button>
    </div>
</div>


        </div>
    )

}

export default Narvbar;