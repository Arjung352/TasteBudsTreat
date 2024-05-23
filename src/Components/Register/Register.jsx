import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";

function Register() {
  const [mode, setMode] = useState("login");
  const [text, setText] = useState([
    "Log in to save and manage your work.",
    "Need an Account? Sign Up!",
  ]);

  const toggleMode = () => {
    if (mode === "login") {
      setMode("signup");
      setText([
        "Create an account to save and manage your work.",
        "Already have an Account? Log In!",
      ]);
    } else {
      setMode("login");
      setText([
        "Log in to save and manage your work.",
        "Need an Account? Sign Up!",
      ]);
    }
  };

  return (
    <div className="w-screen flex justify-center items-center out">
      <div className="gap-3 font-bold text-2xl text-olive flex flex-col w-3/12 p-6 rounded-md border border-black shadow-sm shadow-black">
        <h2>{mode === "login" ? "Log In" : "Sign Up"} to TasteBudsTreats</h2>
        <h3 className="text-sm">{text[0]}</h3>
        <form className="flex flex-col gap-3">
          <TextField variant="outlined" label="Username" />
          <TextField variant="outlined" label="Email" type="email" />
          <TextField variant="outlined" label="Password" type="password" />
          <Button variant="contained">
            {mode === "login" ? "Log In" : "Sign Up"}
          </Button>
        </form>
        <button
          className="text-sm text-blue-700 underline"
          onClick={toggleMode}
        >
          {text[1]}
        </button>
      </div>
    </div>
  );
}

export default Register;
