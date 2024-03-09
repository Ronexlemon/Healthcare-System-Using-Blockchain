"use client"
import React from "react";

import { useRouter } from "next/navigation";
import dash from "../../../public/img/dash.png"
import Image from "next/image";
import Link from "next/link";

export default function PatienceDashboard(){
    const router = useRouter()


    return(
        <div className="w-full h-screen mt-5">
            <div className="flex justify-between items-center" >
                <div>
                <span>Dashboard Overview</span>
                </div>
                    </div>
                    <div className=" flex justify-between w-3/4 h-1/4 rounded-xl bg-gradient-to-r from-indigo-500 from-10% to-emerald-500 to-90%">
                        <div className="flex flex-col  p-10 text-white">
                            <span className="font-bold">Hello Zulafa,</span>
                            <span className="text-sm">Have a nice daya and don't forget to take<br/> care of your health</span>
                            <Link href="#" className=" mt-8 text-green-400 text-sm">learn more </Link>

                        </div>
                        <Image src={dash}  alt=""/>

                    </div>

                    <div className="flex justify-between items-center w-3/4 h-1/4 mt-10 ">
                        <div className="flex  items-center bg-white border border-gray-200 shadow h-full w-1/4 rounded-xl">
                            <Image src={dash} alt="" className="h-1/4 w-1/4"/>
                            <div className="flex flex-col justify-center">
                                <span>202/3000</span>
                                <span>steps taken</span>
                            </div>

                        </div>


                    </div>




        </div>
    )
}