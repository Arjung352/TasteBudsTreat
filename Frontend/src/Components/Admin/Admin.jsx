import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

function Admin() {
  const [username, setUserName] = useState("");
  useEffect(() => {
    setUserName(localStorage.getItem("UserName"));
  }, []);
  return (
    <div className="h-svh">
      <Navbar />
      {username == "TasteBudsTreat" ? (
        <div className="h-full flex justify-center items-center">
          <p className="font-Salsa text-3xl ">Welcome Admin!</p>
        </div>
      ) : (
        <div className="text-center h-full py-8 flex flex-col justify-center items-center">
          <img
            src="https://ps.w.org/admin-only-dashboard/assets/icon-256x256.png?rev=3074610"
            className="h-36 w-36 md:h-44 md:w-44 rounded-xl bg-blend-multiply"
            alt="Authorize person only image"
          />
        </div>
      )}
    </div>
  );
}

export default Admin;
