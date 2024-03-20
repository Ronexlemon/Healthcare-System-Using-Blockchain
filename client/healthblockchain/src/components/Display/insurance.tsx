"use client"
import React from "react";
import { data } from "@/constant/data/data";
import { useReadContract } from 'wagmi'
import { HealthContract } from "@/constant/data/address/contract";
import abi from "../../constant/abi/health.json"

const DisplayData = () => {
  const result = useReadContract({
    abi,
    address: HealthContract,
    functionName: 'getAllClaims',
  })

  const dataArray = Array.isArray(result.data) ? result.data : [];

//   caseNumber
// : 
// 2n
// charges
// : 
// 1000n
// claimIndex
// : 
// 1n
// hospitalId
// : 
// 987n
// patientId
// : 
// 1234n
// patientName
// : 
// "john doe"
// status
// : 
// 0
// time
// : 
// "08:19"
// userType
// : 
// "hospital"
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap -mx-4">
        {dataArray.map((item:any, index:any) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Patient ID: {Number(item.patientId)}</h2>
              <p className="text-gray-700 mb-2">Hospital ID: {Number(item.hospitalId)}</p>
              <p className="text-gray-700 mb-2">Name: {item.patientName}</p>
              <p className="text-gray-700 mb-2">Status: {item.status==0?`Waiting`:item.status==1?`Match`:`Issue`}</p>
              <p className="text-gray-700">case Number: {Number(item.caseNumber)}</p>
              <p className="text-gray-700">Charges: ${Number(item.charges)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
