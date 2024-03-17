import React from "react";


const PatientForm =()=>{
    return(
        <div className="flex justify-center items-center h-screen">
<div className="h-full w-full">
    <form>
        <label>Patient Particulars</label>
        <div className="w-full h-1/4">
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
                    <label>Membership No:</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

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
                    <label>Name of the Member <span className="text-sm">if a patient is dependable</span></label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

                </div>
                <div className="flex items-center justify-around">
                    <label>Patient Relationship with member/employee</label>
                    <input type="text" name="name" className="border-b-2 border-black bg-transparent outline-none text-center "/>

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

        <div>
            <span>Consultation/Referrals to specialist and hospital admission</span>
        </div>
        <label className="text-black font-bold">Details to be filed by attending doctor.</label>

        <div className="w-3/4 h-1/4 flex flex-col">
        <div className="flex items-start justify-between ">
                    <label>Nature of sickness/Aliment</label>
                    <input type="text" name="name" className="border  border-b-2"/>

                </div>
                <div className="flex items-center justify-around">
                    <label>When it first occured</label>
                    <input type="text" name="name" className="border  border-b-2"/>

                </div>

                <div className="flex items-center justify-around">
                    <label>Nature of treatment</label>
                    <input type="text" name="name" className="border  border-b-2"/>

                </div>

        </div>

        <div>
            <span>Details of Medical expense</span>
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