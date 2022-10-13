import React from "react";
import me from "../assets/me.png";
import unnamed from '../assets/unnamed.png'

function Aboutme() {
  return (
    <div className="">
      <div className="py-11 m px-7 bg-white flex-1  align-middle md:grid grid-cols-2 grid-flow-row overflow-hidden place-items-center">
        

        <div className="border-2  py-11 px-9 max-w-lg  bg-white shadow-lg rounded-lg my-2  ">
          <p className="text-left text-4xl font-mono  ">
            About me
          </p>
          <p className="text-left text-base font-mono mt-2  ">
            Welcome to my website :-)
          </p>
          <p className="text-left text-base font-mono mt-2  ">
          We build decentralized software products on tablet devices , phones and desktop browsers 
          that are elegant in design and simple to use for our customers. 
          We identify needs and provide solutions.
          </p>
        </div>
        <img className=" min-w-300  px-9 md:max-w-2xl " src={unnamed} alt="My pic" />
      </div>
   
    </div>
  );
}

export default Aboutme;
