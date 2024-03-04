import React from "react";

export default function Faq() {
    return (
        <div className="bg-[#D2F5EE] h-[50vh] w-full ">
            <div className="h-full w-full max-w-screen">
                <div className="flex flex-col  items-center h-full">
                    <span className="text-5xl">FAQ`s</span>
                    <div className="flex flex-col justify-evenly items-center w-full mt-4 text-2xl gap-4">
                       <div className="border  border-black bg-white rounded-xl p-2">
                        <span>Does Reliance Accept insurance for medical expenses?</span>
                       </div>
                       <div className="border  border-black bg-white rounded-xl p-2">
                        <span>What are the visiting hours for patients?</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
