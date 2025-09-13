import React from "react";
import "./Layout.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Property Portal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
