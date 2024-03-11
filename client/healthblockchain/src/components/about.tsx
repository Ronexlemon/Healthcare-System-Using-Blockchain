import React from "react";

export default function About() {
    return (
        <div className="bg-[#CAF4FC] h-[50vh] w-full ">
            <div className="h-full w-full max-w-screen">
                <div className="flex flex-col  items-center h-full bg-gray-300">
                    <span className="text-2xl">Why Reliance?</span>
                    <div className="flex justify-evenly items-center w-full mt-4 text-2xl">
                        {/* Card 1 */}
                        <div className="w-1/4 h-[30vh] bg-[#B9C3E9] rounded-xl p-4 flex flex-col justify-center items-center">
    <span className="text-center">
        Seamless <br />
        insurance claim <br />
        processing.
    </span>
    <div className="border-b-2 border-black w-full mt-2"></div>
</div>

                        {/* Card 2 */}
                        <div className="w-1/4 h-[30vh] bg-[#B9C3E9] rounded-xl p-4 flex flex-col justify-center items-center">
    <span className="text-center">
        Comprehensive <br />
        services.<br />
        
    </span>
    <div className="border-b-2 border-black w-full mt-2"></div>
</div>
                        {/* Card 3 */}
                        <div className="w-1/4 h-[30vh] bg-[#B9C3E9] rounded-xl p-4 flex flex-col justify-center items-center">
    <span className="text-center">
        Advanced <br />
        facilities <br />
        
    </span>
    <div className="border-b-2 border-black w-full mt-2"></div>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
