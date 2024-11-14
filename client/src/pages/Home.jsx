// src/pages/Home.js
import { Button } from "@mui/material";
import React from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token')
    navigate('/login')
  }

  return(
    <>
    <h1>Welcome to Home</h1>
    <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default Home;
