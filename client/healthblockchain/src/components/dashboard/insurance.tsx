"use client"
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import dash from "../../../public/img/dash.png"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import Barchart from "../Barchat";
import { UserData } from "../Data";


export default function InsuranceDashboard(){
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
            <div className="flex justify-between items-center" >
                <div className="mb-1">
                <span className="text-white">Dashboard Overview</span>
                </div>
                    </div>
                    
                   
                    <div className=" flex justify-between w-3/4  h-1/4 rounded-xl bg-gradient-to-r from-indigo-500 from-10% to-emerald-500 to-90%">
                        <div className="flex flex-col  p-10 text-white">
                            <span className="font-bold">{session?.user?.user?.firstName}  {session?.user?.user?.lastName},</span>
                            <span className="text-sm">Have a nice day and don`t forget to take<br/> care of your health</span>
                            <Link href="#" className=" mt-8 text-green-400 text-sm">learn more </Link>

                        </div>
                        <Image src={dash}  alt=""/>

                    </div>

                    <div className="flex justify-between items-center w-3/4 h-1/4  ">
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
                    {/* chart */}
                    <div className="grid grid-cols-5 w-5/6 gap-4 h-1/4">
                        <div className="  col-span-3 bg-blend-lighten bg-blue-900  h-full rounded-xl ">

                        </div>
                        <div className=" bg-blend-lighten bg-blue-900  h-full rounded-xl ">

</div>



                    </div>

                    {/* reminders */}
                      <div className="flex justify-between items-center w-3/4 h-1/4 mt-2  ">
                       <div className="flex  items-center justify-around bg-blend-lighten bg-blue-900  h-full  shadow  w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-400 flex  "> <h3 className=" font-bold text-white ">{202}/</h3>3000</span>
                                <span>Step taken</span>
                            </div>
                            

                        </div>
                       <div className="flex  items-center justify-around bg-blend-lighten bg-blue-900   shadow  h-full w-1/4 rounded-xl p-5">
                            <Image src={dash} alt="" className="h-3/4 w-1/4"/>
                            <div className="flex flex-col justify-center text-white">
                                <span className="text-sm text-gray-400 flex gap-2 "> <h3 className=" font-bold text-white ">{408}</h3>kcal</span>
                                <span>Calories burned</span>
                            </div>
                            

                        </div>
                        <div className="flex  items-center justify-around bg-blend-lighten bg-blue-900   shadow  h-full w-1/4 rounded-xl p-5">
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