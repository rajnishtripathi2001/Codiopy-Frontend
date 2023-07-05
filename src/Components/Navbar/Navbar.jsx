import { React, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>C</span>odiopy
        </h2>
        
      </div>
      <div className={showMenu ? "topnav active" : "topnav"}>

        {/* //just adding a comment */}
        <div className="navbar">
          <ul>
            <li>
              <a href="#1">Home</a>
            </li>
            <li>
              <a href="#2">Our Services</a>
            </li>
            <li>
              <a href="#3">Our Team</a>
            </li>
            <li>
              <a href="#4">Blogs</a>
            </li>
            <li>
              <a href="#5">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hamburger-menu">
        <a href="#e" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
}

