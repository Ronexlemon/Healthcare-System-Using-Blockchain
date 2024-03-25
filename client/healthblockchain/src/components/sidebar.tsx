
"use client"
import React from "react";
import hLogo from "../../public/img/hlogo.png";
import Image from "next/image";
import { IoMdSettings, IoMdHome} from "react-icons/io";
import { FaBox, FaHeart, FaChartPie } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import ConnectButton from "./connectButon/connect";
import { useRouter } from 'next/navigation'
import { getSession, signIn, useSession,signOut } from "next-auth/react";
import { useEffect,useState } from "react";

export default  function SideBar() {
    const router = useRouter();
    const [role,setRole] = useState<any>("")

    const getRole=async()=>{
        const updatedSession: any = await  getSession();
    const userRole = updatedSession?.user?.user?.role;
    console.log("User Role : ", userRole);
    setRole(userRole);

    }
    useEffect(()=>{
        const fetchRole = async () => {
             await getRole();
            
        };

         fetchRole();
    },[role])
    
    return (
        <>
            <div className="h-full bg-blend-lighten bg-blue-900  w-3/4 rounded ">
                <div className="h-full m-5 mt-0 flex flex-col justify-between">

                        

                    <div className="flex flex-col justify-start space-y-8">
                        
                    
                    {role == "insurance"  && (
                        <div  className="flex flex-col justify-start space-y-8">
                            <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center  mt-5">
                            <Image src={hLogo} alt="" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Jitume Insurance</button>
                        </div>

                       
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" onClick={()=>router.push("/insurance")}>
                            <IoMdHome className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">DashBoard</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" onClick={()=>router.push("/insurance/claims")}>
                            <FaChartPie className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Reports</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaHeart className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Goals</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaBox className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Reminders</button>
                        </div>
                        </div>
                        
                            
                            )
                            
                            }

{role == "patient"  && (
                        <div  className="flex flex-col justify-start space-y-8">
                            <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center  mt-5">
                            <Image src={hLogo} alt="" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Reliance Hospital</button>
                        </div>

                       
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" onClick={()=>router.push("/patient")}>
                            <IoMdHome className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">DashBoard</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" >
                            <FaChartPie className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Profile</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center " onClick={()=>router.push("/patient/claimform")}>
                            <FaBox className="h-3/4 w-1/4 text-gray-300" />
                            <button  className="text-sm text-[#BDC2F6] hover:text-white">claim-form</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaBox className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Claim-status</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaBox className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Claim-Balance</button>
                        </div>
                        </div>
                        
                            
                            )
                            
                            }


{role == "hospital"  && (
                        <div  className="flex flex-col justify-start space-y-8 ">

<div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center  mt-5">
                            <Image src={hLogo} alt="" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Reliance Hospital</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" onClick={()=>router.push("/hospital")}>
                            <IoMdHome className="h-3/4 w-1/4 text-gray-300" />
                            <button className=" text-sm text-[#BDC2F6] hover:text-white">DashBoard</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" >
                            <FaChartPie className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Profile</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" >
                            <FaChartPie className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Manage users</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center" >
                            <FaChartPie className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Manage notifications</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center " onClick={()=>router.push("/hospital/claimform")}>
                            <FaBox className="h-3/4 w-1/4 text-gray-300" />
                            <button  className="text-sm text-[#BDC2F6] hover:text-white">Claim-Form</button>
                        </div>
                       
                        
                        </div>
                        
                            
                            )
                            
                            }
                      
                        
                       
                       
                       
                        
                        
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <IoMdSettings className="h-3/4 w-1/4 text-gray-300" />
                            <button className="text-sm text-[#BDC2F6] hover:text-white">Settings</button>
                        </div>
                        <div>
                            <ConnectButton/>
                        </div>
                    </div>

                    <div className="hover:bg-[#0E45B7] mb-10 hover:text-white w-3/4 h-10 rounded-xl flex  items-center" onClick={()=>signOut()}>
                    <IoPersonRemove className="h-3/4 w-1/4 text-gray-300" />
                        <button className="text-sm text-[#BDC2F6] hover:text-white">Logout</button>
                    </div>

                </div>
            </div>
        </>
    )
}
