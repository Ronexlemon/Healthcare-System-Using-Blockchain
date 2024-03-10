"use client"
import React from "react";
import Image from "next/image";
import doc from "../../public/img/doc.png"
import Link from "next/link";


export default function   LandingHero(){

    return(
        <div className=" bg-[#CAF4FC] h-screen  w-full ">
            <div className="flex justify-around ">
            <div className="flex flex-col justify-center gap-2 ml-2 ">
                <h1 className=" text-5xl ">
                    Welcome to Reliance <br/>
                    Hospital
                </h1>
                <span className="text-2xl text-[#7F7F7F]">we are dedicated to providing exceptional healthcare <br/>
                services to our community</span>
                <div className="flex bg-black text-white h-10 w-52 rounded-xl justify-center items-center ">
                    <button className="text-center text-xl"><Link href="/login">Get started</Link> </button>
                </div>

            </div>
            <div className="flex flex-col">
                <Image src={doc} alt="" />

            </div>

            </div>
            


        </div>
    )

}