import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./styles/home.css";

function Home() {
    const navigate = useNavigate();
  return (
    <div
      className="container"
      style={{
        backgroundImage:
          'url("https://media.discordapp.net/attachments/1200082704499232792/1295086747377733722/bg2.png?ex=670d5f06&is=670c0d86&hm=24c524f50a7f6b5b1f5d3faf27d114ab59160da7b98d5a0dbc40eef953cbbcee&=&format=webp&quality=lossless&width=1556&height=889")',
        width: "100vw",
        height: "100vh",
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
      }}
    >
        <div className="btn" onClick={() => navigate('/')}>
        </div>
    </div>
  );
}

export default Home;
