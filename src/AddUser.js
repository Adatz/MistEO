import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      first: first,
      last: last,
      email: email,
      balance: balance,
      created: new Date().toJSON().slice(0, 10),
      address: address,
    };
    console.log(obj, e.target);
    localStorage.setItem("obj", JSON.stringify(obj));
    navigate("/");
  };

  return (
    <div className="m-40 bg-[#FDEADD] p-4 shadow-lg">
      <div className="grid  grid-flow-col">
        <form onSubmit={submitHandler}>
          <div>
            <p className="font-bold">First Name</p>
            <input
              type="text"
              value={first}
              name="first"
              id="first"
              className="w-full"
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div>
            <p className="font-bold">Last Name</p>
            <input
              type="text"
              value={last}
              name="last"
              id="last"
              className="w-full"
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
          <div>
            <p className="font-bold">Email</p>
            <input
              type="text"
              value={email}
              name="email"
              id="email"
              className="w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="font-bold">address</p>
            <input
              type="text"
              value={address}
              name="address"
              id="address"
              className="w-full"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <p className="font-bold">balance</p>
            <input
              type="text"
              value={balance}
              name="balance"
              id="balance"
              className="w-full"
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>
          <div>
            <button className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current text-white bg-[#423AC9] m-2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
