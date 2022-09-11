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

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import IMAGE from "../assets/notepen-removebg-preview.png";
>>>>>>> frontend

export default function Login() {
  //const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  return (
    <div className="container">
      <img src={IMAGE} alt="a pen"></img>
      <div className="login">
        <div className="email-text">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onClick={(e) => {
            setEmail(e.target.value);
          }}
        />
        
        </div>
        <div className="password-text">
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ paddingBottom: "20px" }}
          onClick={(e) => {
            setPassword(e.target.value);
          }}
        />
        </div>
        <p className="signup-text">
          Don't have an account?&nbsp;&nbsp;
          <span>
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </p>
<<<<<<< HEAD
        <Button
          variant="contained"
          onClick={(e) => {
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                navigator("/dashboard");
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
                navigator("/dashboard");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Login with Google
        </Button>
=======
        <div className="login-email">
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
        </div>

        <div className="login-google">
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
>>>>>>> frontend
      </div>
      <footer>
        <small><a href="tel:9045767897">Terms</a></small>
        <small><a href="tel:9045767897">Privacy</a></small>
        <small><a href="tel:9045767897">Security</a></small>
        <small><a href="tel:9045767897">Contact</a></small>
      </footer>
    </div>
  );
}
