import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Friends from "./pages/Friends";


import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkrvEqPGeNypXB4NiwqURGEb2-Z6D8B1k",
  authDomain: "shellhack1.firebaseapp.com",
  projectId: "shellhack1",
  storageBucket: "shellhack1.appspot.com",
  messagingSenderId: "875346018597",
  appId: "1:875346018597:web:7b2bb039b44b0eea855acc",
  measurementId: "G-W9ZV8LTE4N",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  </BrowserRouter>
);

export { auth, db };
