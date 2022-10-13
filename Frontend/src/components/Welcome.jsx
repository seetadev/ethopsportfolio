import React, { useState, useEffect } from "react";
import UAuth from "@uauth/js";
// import logo1 from "../assets/recycling.jpg";
import logo1 from "../assets/banner.jpg";
// import { TransactionContext } from "../context/TransactionContext";

const uauth = new UAuth({
  clientID: "65cc8acc-806a-4e4b-8150-9b4d8d8e421a",
  redirectUri: "https://sites.google.com/view/aspiring-road-safety/home",
  scope: "openid wallet",
});


const Welcome = () => {
  const [userWallet, setUserWallet] = useState(null);

  //useEffect model
  useEffect(() => {
    // setUserWallet("Login With Unstoppable")
    uauth
      .user()
      .then((user) => {
        setUserWallet(user.sub);
        // user exists
        console.log("User information:", user);
      })
      .catch((err) => {
        console.log(err);
        // user does not exist
      });
  }, []);

  // login button
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();
      uauth.user().then((user) => {
        setUserWallet(user.sub);
        // user exist
        console.log("User information:", user);
      });
      console.log(authorization);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await uauth.logout();
      setUserWallet(null);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex w-full mf:flex-row flex-col justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 ">
          <h1 className="text-5xl sm:text-7xl text-white py-1 font-semibold">
            RECYCLE <br />
          </h1>
          <br />
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-4xl ">
            Waste Recycling & Sustainability <br /> Help our Environment <br />{" "}
            and get rewarded
          </p>
          <br />
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-2xl">
            Connect your wallet, submit details of your <br /> enviromental
            waste, recyclers go to the <br /> marketplaceplace and recycle waste
            close to their location...
          </p>
          <br />
          {/** {!currentAccount && ( )} */}

          {userWallet ? (
            <>
              <button
                type="button"
                className="flex flex-row justify-center items-center my-5 bg-blue-300 p-3 rounded-full cursor-pointer hover:bg-blue-800 hover:text-white"
              >
                <p className="text-black text-3xl font-semibold py-3 px-10 mx-14 hover:text-white hover:text-white">
                  {userWallet}
                </p>
              </button>
              <button
                type="button"
                onClick={logout}
                className="flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
              >
                <p className="text-black text-3xl font-semibold py-3 px-10 mx-14 hover:text-white hover:text-white">
                  Logout
                </p>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={login}
              className="flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
            >
              <p className="text-black text-3xl font-semibold py-3 px-10 mx-14 hover:text-white hover:text-white">
                Login with unstoppable
              </p>
            </button>
          )}
        </div>
      </div>
      <div className="sm:flex-[0.9] lg:flex-[0.9]flex-initial justify-left items-center">
        <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default Welcome;
