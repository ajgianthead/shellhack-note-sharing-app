import React, { useState } from "react";
import "../components/Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../index";
import IMAGE from "../assets/gatorlogo.png"

const provider = new GoogleAuthProvider();

//const auth = getAuth();

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const navigate = useNavigate();

  return (
    <div className="container">
      <img src={IMAGE}></img>
      <div className="signup">
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ paddingBottom: "20px" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="login-text">
          Already have an account?&nbsp;&nbsp;
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>

        <Button
          variant="contained"
          onClick={(e) => {
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                //navigate("/dashboard", { replace: true });
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          onClick={(e) => {
            signInWithPopup(auth, provider)
              .then((result) => {
                const credential =
                  GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user, token);
                //navigate("/dashboard", { replace: true });
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Sign Up with Google
        </Button>
      </div>
    </div>
  );
}
