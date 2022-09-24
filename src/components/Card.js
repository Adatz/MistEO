import React from "react";
import { FiMapPin, FiDollarSign, FiCalendar } from "react-icons/fi";


const Card = ({ userData }) => {
  return (
    <div className="w-60 h-60 border-black-2 shadow-lg p-4 bg-[#FDEADD] hover:scale-105 ">
      <ul className="">
      <li className="font-bold rounded-full w-10 h-10 grid p-1 justify-items-center bg-[#423AC9] text-white">
          {userData.first[0]}{userData.last[0]}
        </li>
        <li className="font-bold">
          {userData.first} {userData.last}
        </li>
        <li className="text-blue-600 border-b-2 pb-2 ">{userData.email}</li>
        <li className="flex gap-4 pt-4 text-gray-600">
          <FiMapPin /> {userData.address}
        </li>
        <li className="flex gap-4 text-gray-600">
          <FiCalendar /> {userData.created}
        </li>
        <li className="flex gap-4 text-gray-600 italic">
          <FiDollarSign /> {userData.balance}
        </li>
      </ul>
    </div>
  );
};

export default Card;
