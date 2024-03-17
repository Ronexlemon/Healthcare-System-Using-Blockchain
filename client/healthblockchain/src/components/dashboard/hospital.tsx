"use client"
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import dash from "../../../public/img/dash.png"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import Barchart from "../Barchat";
import { UserData } from "../Data";
import BarCharts from "../charts/patienceChart";
import MonthlyUsers from "../charts/monthlyUsers";



export default function HospitalDashboard(){
    const {data:session} = useSession()
    const da = session?.user?.user?.firstName
    console.log("username",da)
        const router = useRouter()
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });


    return(
        <div className="w-full h-screen mt-5">
            <div className="grid grid-cols-6 ">
                <div className="h-full col-span-4">

                

            
            <div className="flex justify-between items-center" >
                <div className="mb-1">
                <span className="text-white">Dashboard Overview</span>
                </div>
                    </div>
                    
                   
                    <div className=" flex justify-between w-full   rounded-xl bg-gradient-to-r from-[#7A40F2] from-10% to-[#7A40F2] to-100% mb-2">
                        <div className="flex flex-col  p-10 text-white">
                            <span className="font-bold">Hello,{session?.user?.user?.firstName}  {session?.user?.user?.lastName}</span>
                            <span className="text-sm">Welcome To Admin<br/> Dashboard</span>
                            <Link href="#" className=" mt-8 text-white text-sm">learn more </Link>

                        </div>
                        <Image src={dash}  alt=""/>

                    </div>
                  


                    <div className="flex justify-between items-center w-full h-1/4  ">
                       <div className="flex  items-center justify-around bg-blend-lighten bg-[#7A40F2]   shadow h-3/4 w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                            <span className="text-sm text-gray-100 flex gap-2 ">Department</span>
                                
                                <span className="text-gray-100">{12}</span>
                            </div>
                            

                        </div>
                       <div className="flex  items-center justify-around bg-blend-lighten bg-[#7A40F2]   shadow h-3/4 w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-100 flex gap-2 ">Doctors</span>
                                <span className="text-gray-100">{14}</span>
                            </div>
                            

                        </div>
                        <div className="flex  items-center justify-around bg-blend-lighten bg-[#7A40F2]   shadow h-3/4 w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-100 flex gap-2 ">Patients</span>
                                <span className="text-gray-100">{20}</span>
                            </div>
                            

                        </div>


                    </div>
                   {/* //claim details */}


                    {/* reminders */}
                    <div className="grid grid-cols-6 mt-2 w-full h-1/2">
                        <div className=" col-span-4 ">
                            <div className="flex flex-col gap-2  ">
                                <div  className=" w-full">
                                    
                                    <BarCharts/>

                                </div>
                                <div  className="h-44 w-full ">
                                    <MonthlyUsers/>

                                </div>

                            </div>

                        </div>
                         {/* ?//second div */}
                    <div className="flex justify-between items-center col-span-2">
                        

<span className="text-center">Performance analysis</span>

</div>

                    </div>
                    
                   
                   


                    </div>
                    {/* //next column */}
                    {/* <div className="flex flex-col w-full h-full items-center mt-6">

                        <div className="flex items-center   bg-blend-lighten bg-blue-900   shadow h-1/4 w-3/4 rounded-xl ">
                            <div className="flex items-center ">
                            <Image src={dash} alt="" className="h-3/4 w-3/4"/>
                            </div>

                        </div>

                    </div> */}
                    </div>
        </div>
    )
}