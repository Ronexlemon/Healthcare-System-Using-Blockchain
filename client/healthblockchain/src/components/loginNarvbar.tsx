import React from "react";
import logoh from "../../public/img/logoh.png"
import Image from "next/image";
import Link from "next/link";


const LoginNarvbar = ()=>{

    return(
        <div className="flex justify-around w-full items-center h-20 bg-[#4BB5E9] text-white ">
            <div>
<Image src={logoh} alt=""/>
            </div>
            <div className="flex justify-around w-1/4">
                <div >
                    <Link href="/">Home</Link>
                    
                </div>
                <div>
                <Link href="/about">About us</Link>
                </div>
                <div>
                <Link href="/faq"> FAQ`s</Link>
                  
                </div>


            </div>
            <div className="flex justify-around items-center gap-4">
    
</div>


        </div>
    )

}

export default LoginNarvbar;