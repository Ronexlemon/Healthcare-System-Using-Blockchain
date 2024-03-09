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

                    <div className="flex justify-between items-center w-3/4 h-1/4 mt-1 ">
                       <div className="flex  items-center justify-around bg-blend-lighten bg-blue-900   shadow h-1/2 w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-400 flex  "> <h3 className=" font-bold text-white ">{202}/</h3>3000</span>
                                <span>Step taken</span>
                            </div>
                            

                        </div>
                       <div className="flex  items-center justify-around bg-blend-lighten bg-blue-900   shadow h-1/2 w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-400 flex gap-2 "> <h3 className=" font-bold text-white ">{408}</h3>kcal</span>
                                <span>Calories burned</span>
                            </div>
                            

                        </div>
                        <div className="flex  items-center justify-around bg-blend-lighten bg-blue-900   shadow h-1/2 w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-400 flex gap-2 "> <h3 className=" font-bold text-white ">{87}</h3>litres</span>
                                <span>Water Taken</span>
                            </div>
                            

                        </div>


                    </div>




        </div>
    )
}