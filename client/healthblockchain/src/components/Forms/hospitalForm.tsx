"use client"
import React, { useState } from "react";
import { useWriteContract} from "wagmi"
import abi from "../../../src/constant/abi/health.json"
import { HealthContract } from "@/constant/data/address/contract";
import { useAccount } from 'wagmi'
import { config } from "@/config";

const GeneralForm = () => {
  const account:any = useAccount({
    config, 
  })
  const { data: hash, writeContract } = useWriteContract() 
    const [formData, setFormData] = useState({
      caseNumber:"",
      patientName:"",
        userType: "", // This will store the selected option (hospital/patient)
        hospitalId: "",
        patientId: "",
        charges: "",
        time: "",
      });
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        
        //addClaim(uint256 _caseNumber,string memory _patientName,uint256 _charges,string memory _userType,uint256 _patientId,uint256 _hospitalId,string memory _time)
        try{
          writeContract({ 
            address: HealthContract, 
            abi, 
            functionName: 'addClaim', 
            args: [formData.caseNumber,formData.patientName,formData.charges,formData.userType,formData.patientId,formData.hospitalId,formData.time], 
          })
          if(hash){
            console.log("hash",hash)
             setFormData({
            caseNumber:"",
            patientName:"",
            userType: "",
            hospitalId: "",
            patientId: "",
            charges: "",
            time: "",
          });

          } 
         

        }catch(error){
          console.log("error",error)

        }
       
      };

  return (
    <div className="h-screen w-full">
        <div className="flex justify-center items-center w-full h-full">

       

   
    <form className="w-3/4 " onSubmit={handleSubmit}>
    
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="userType">
          User Type
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="">Select User Type</option>
          <option value="hospital">Hospital</option>
          <option value="patient">Patient</option>
        </select>
      </div>
      {/* Conditional rendering of fields based on selected user type */}
      
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="hospitalId">
            Hospital ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="hospitalId"
            type="text"
            placeholder="Hospital ID"
            name="hospitalId"
            value={formData.hospitalId}
            onChange={handleChange}
            required
          />
        </div>
        
        
      
      
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="patientId">
            Patient ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="patientId"
            type="text"
            placeholder="Patient ID"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
          />
        </div>
  
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="charges">
          Charges
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="charges"
          type="number"
          placeholder="Charges"
          name="charges"
          value={formData.charges}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="charges">
          Patient Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="patientName"
          type="text"
          placeholder="John Doe"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="hospitalId">
            Case Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="caseNumber"
            type="number"
            placeholder="114"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleChange}
            required
          />
        </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="time">
          Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="time"
          placeholder="Time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    
    </form>
    <h1>Hash is {hash}</h1>
    </div>
    </div>
  );
};

export default GeneralForm;
