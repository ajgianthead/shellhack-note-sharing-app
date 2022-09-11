import React, { useState } from "react";
import "../components/Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth, db, userID } from "../index";
import { doc, setDoc } from "firebase/firestore";

//const firebase = require("firebase");
require("firebase/firestore");

const provider = new GoogleAuthProvider();

//const auth = getAuth();

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");

  //const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onClick={(e) => {
            setFName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onClick={(e) => {
            setLName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onClick={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ paddingBottom: "20px" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>
          Already have an account?
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>

        <Button
          variant="contained"
          onClick={(e) => {
            createUserWithEmailAndPassword(auth, email, password)
              .then((cred) => {
                //userID = cred.user.uid;
                setDoc(doc(db, "users", cred.user.uid), {
                  id: cred.user.uid,
                  first: fName,
                  last: lName,
                  email: email,
                  username: username,
                  password: password,
                  friends: 0,
                  notes: [],
                });
              })
              .catch((error) => {
                console.log("Error adding document: ", error);
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
                userID = result.user.uid;
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
