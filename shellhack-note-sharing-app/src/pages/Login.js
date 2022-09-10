import React, { useState } from "react";
import "../components/Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../index";

export default function Login() {
  //const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //let navigate = useNavigate();

  return (
    <div className="container">
      <div className="login">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onClick={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ paddingBottom: "20px" }}
          onClick={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>
          Don't have an account?
          <span>
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </p>
        <Button
          variant="contained"
          onClick={(e) => {
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                //navigate("/dashboard", { replace: true });
                console.log(user);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Login
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
          Login with Google
        </Button>
      </div>
    </div>
  );
}
