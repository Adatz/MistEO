import { useState, useEffect } from "react";
import Card from "./components/Card";

const Json = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = JSON.parse(localStorage.getItem('obj'));
        data = (data.concat(items)).reverse()
  

        setUsers(data);
        console.log(items)
        console.log(data)
      });

  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 m-16">
      <span className="w-60 h-60 border-black-2 shadow-lg p-4 bg-[#FDEADD] hover:scale-105 font-bold  place-items-center grid "><a href="/adduser" className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current text-white bg-[#423AC9] m-2">add user</a></span>
      
      {users?.map((users, index) => (
        <Card userData={users} key={index} />
      ))}
    </div>
  );
};

export default Json;
