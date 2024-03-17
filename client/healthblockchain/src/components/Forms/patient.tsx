import React from "react";


const PatientForm =()=>{
    return(
        <div className="flex justify-center items-center ">
<div className="h-full w-full mt-10">
    <form>
        <label className="text-5xl">Patient Particulars</label>
        <div className="w-full  mb-5">
            <div className="flex ">
                <div className="flex items-center justify-around">
                    <label>Surname</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>


                </div>
                <div className="flex items-center justify-around">
                    <label>Firstname</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
                <div className="flex items-center justify-around">
                    <label>Age</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
                <div className="flex items-center justify-around">
                    <label className="text-sm">Membership No:</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center w-1/4 "/>

                </div>
               
            </div>

            {/* //second */}
            <div className="flex ">
                <div className="flex items-center justify-around">
                    <label>Employer</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
                <div className="flex items-center justify-around">
                    <label>Policy No</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
                <div className="flex items-center justify-around">
                    <label>ID/Passport</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
               
               
            </div>
            {/* //third */}
            <div className="flex ">
                <div className="flex items-center justify-around">
                    <label className="text-sm">Name of the Member <span className="text-sm">if a patient is dependable</span></label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center w-1/2 "/>

                </div>
                <div className="flex items-center justify-around">
                    <label className="text-sm">Patient Relationship with member/employee</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center w-1/2 "/>

                </div>
               
               
            </div>

            {/* //fourth */}
            <div className="flex ">
                <div className="flex items-center justify-around">
                    <label>Are you a memmber of Jitume Insurance?.</label>
                    <input type="checkbox" name="name" className=""/>
                    <label>Yes</label>
                    <input type="checkbox" name="name" className=""/>
                    <label>No</label>

                </div>
                
               
               
            </div>

        </div>

        <div className="w-full mb-4">
            <span className="text-2xl" >Consultation/Referrals to specialist and hospital admission</span>
        </div>
        <label className="text-black font-bold ">Details to be filed by attending doctor.</label>

        <div className="w-3/4 h-1/4 flex flex-col mb-4">
        <div className="flex items-start justify-between ">
                    <label>Nature of sickness/Aliment</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
                <div className="flex  items-start justify-between ">
                    <label>When it first occured</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>

                <div className="flex  items-start justify-between ">
                    <label>Nature of treatment</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>

        </div>

        <div className="w-full">
            <span className="text-2xl">Details of Medical Expense</span>
        </div>
        <div className="flex flex-col h-1/4 w-full">
            <table className="w-full">

            </table>

        </div>
        



    </form>

</div>


        </div>
    )

}

export default PatientForm;