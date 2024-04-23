import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left" style={{ fontFamily: 'CP-Light' }}>
        <a href="/" className="logo">
          <img src="logo.png" alt="" />
          <span style={{ fontFamily: 'CP-Bold' }}>Oceanic Design</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div className="right" style={{ fontFamily: 'CP-Light' }}>
        <a href="/" className="signin">Sign In</a>
        <a href="/" className="register">Sign Up</a>
        <div className="menuIcon">
          {!open ?
            <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} /> :
            <img src="/close.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          }
        </div>
        <div className={open ? "menu active" : "menu"} style={{ fontFamily: 'CP-Light' }}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
