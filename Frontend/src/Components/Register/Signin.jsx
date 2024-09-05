import React from "react";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/Login");
  };
  return (
    <div className="w-screen flex justify-center items-center out">
      <div className="gap-3 font-bold text-2xl text-olive flex flex-col  p-6 rounded-md border-2 border-black shadow-lg shadow-black">
        <h2>Sign-In to TasteBudsTreats</h2>
        <h3 className="text-sm">Sign-Up to save and manage your account.</h3>
        <form className="flex flex-col gap-3">
          <TextField variant="outlined" label="Username" name="name" />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
          />
          <Button variant="contained">Sign-in</Button>
        </form>
        <button
          type="submit"
          className="text-sm text-blue-700 underline"
          onClick={login}
        >
          Already have an account? Login!
        </button>
      </div>
    </div>
  );
}

export default Signin;
