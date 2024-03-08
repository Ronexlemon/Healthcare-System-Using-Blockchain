import React from "react";
import hLogo from "../../public/img/hlogo.png";
import Image from "next/image";
import { IoMdSettings, IoMdHome} from "react-icons/io";
import { FaBox, FaHeart, FaChartPie } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";

export default function SideBar() {
    return (
        <>
            <div className="h-screen bg-white w-3/4 rounded border border-gray-300">
                <div className="h-full m-5 flex flex-col justify-between">

                    <div className="flex flex-col justify-start space-y-8">
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <Image src={hLogo} alt="" />
                            <button className="text-xl text-[#1A4FBA] hover:text-white">Healthish</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <IoMdHome className="h-3/4 w-1/4" />
                            <button>DashBoard</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaChartPie className="h-3/4 w-1/4" />
                            <button>Reports</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaHeart className="h-3/4 w-1/4" />
                            <button>Goals</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <FaBox className="h-3/4 w-1/4" />
                            <button>Reminders</button>
                        </div>
                        <div className="hover:bg-[#0E45B7] hover:text-white w-3/4 h-10 rounded-xl flex items-center">
                            <IoMdSettings className="h-3/4 w-1/4" />
                            <button>Settings</button>
                        </div>
                    </div>

                    <div className="hover:bg-[#0E45B7] mb-10 hover:text-white w-3/4 h-10 rounded-xl flex  items-center">
                    <IoPersonRemove className="h-3/4 w-1/4" />
                        <button>Logout</button>
                    </div>

                </div>
            </div>
        </>
    )
}
