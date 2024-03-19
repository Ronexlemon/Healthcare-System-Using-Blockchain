import React from "react";
import { data } from "@/constant/data/data";

const DisplayData = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap -mx-4">
        {data.map((item, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Patient ID: {item.patientId}</h2>
              <p className="text-gray-700 mb-2">Hospital ID: {item.hospitalID}</p>
              <p className="text-gray-700 mb-2">Name: {item.name}</p>
              <p className="text-gray-700 mb-2">Status: {item.status}</p>
              <p className="text-gray-700">Charges: ${item.charges}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
