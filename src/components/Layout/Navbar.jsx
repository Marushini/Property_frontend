import React, { useState } from "react";
import LoginForm from "../../pages/LoginForm";
import RegisterForm from "../../pages/RegisterForm";
import "./Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">🏡 Property Portal</div>
      <div className="nav-links">
        <button onClick={() => { setShowLogin(true); setShowRegister(false); }}>Login</button>
        <button onClick={() => { setShowRegister(true); setShowLogin(false); }}>Register</button>
      </div>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}
    </nav>
  );
};

export default Navbar;
