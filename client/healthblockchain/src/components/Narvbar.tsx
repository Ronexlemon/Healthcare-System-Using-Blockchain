import React from "react";
import logoh from "../../public/img/logoh.png"
import Image from "next/image";


const Narvbar = ()=>{

    return(
        <div className="flex justify-around w-full items-center h-20 bg-[#4BB5E9] text-white ">
            <div>
<Image src={logoh} alt=""/>
            </div>
            <div className="flex justify-around w-1/4">
                <div>
                    Home
                </div>
                <div>
                    About us
                </div>
                <div>
                    FAQ's
                </div>


            </div>
            <div className="flex justify-around items-center gap-4">
    <div className="w-20 h-10  rounded-xl bg-black text-white flex justify-center items-center">
        <button className="text-center">Sign-up</button>
    </div>
    <div className="w-20 h-10 bg-black rounded-xl text-white flex justify-center items-center">
        <button className="text-center">Login</button>
    </div>
</div>


        </div>
    )

}

export default Narvbar;