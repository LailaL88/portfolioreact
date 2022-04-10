import React from "react";
import { Link } from "react-scroll";
import logo from "../img/logo.png";
import menuIcon from "../img/menu.png";
import closeIcon from "../img/cancel.png";

function Nav() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const menuLinks = React.useRef(null);

  function openMobileMenu() {
    if (mobileMenu == false) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }

  const links = document.querySelectorAll(".nav-links h2");

  window.onscroll = function () {
    if (window.pageYOffset > 0) {
      document.querySelector(".nav").classList.add("fixed");
      for (let link of links) {
        link.classList.add("nav-links-fixed");
      }
    } else {
      document.querySelector(".nav").classList.remove("fixed");
      for (let link of links) {
        link.classList.remove("nav-links-fixed");
      }
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <img className="logo" src={logo} alt="site logo" />
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu-icon"
            onClick={openMobileMenu}
          />
          <div className="nav-links" ref={menuLinks}>
            <Link to="home" smooth={true} offset={-50}>
              <li>
                <h2>Home</h2>
              </li>
            </Link>
            <Link to="about" smooth={true} offset={-85}>
              <li>
                <h2>About</h2>
              </li>
            </Link>
            <Link to="skills" smooth={true} offset={-50}>
              <li>
                <h2>Skills</h2>
              </li>
            </Link>
            <Link to="portfolio" smooth={true} offset={-60}>
              <li>
                <h2>Portfolio</h2>
              </li>
            </Link>
            <Link to="contact" smooth={true} offset={50}>
              <li>
                <h2>Contact</h2>
              </li>
            </Link>
            <li>
              <a href="https://github.com/LailaL88" target="_blank">
                <h2>Github</h2>
              </a>
            </li>
          </div>
        </div>
      </nav>
      <nav className={mobileMenu ? "mobile-menu open" : "mobile-menu"}>
        <div className="container">
          <img className="logo" src={logo} alt="site logo" />
          <img
            className="menu-icon"
            src={closeIcon}
            alt="menu-icon"
            onClick={openMobileMenu}
          />
          <div className="mobile-nav-links" ref={menuLinks}>
            <Link to="home" smooth={true} offset={-50}>
              <li>
                <h2>Home</h2>
              </li>
            </Link>
            <Link to="about" smooth={true} offset={-85}>
              <li>
                <h2>About</h2>
              </li>
            </Link>
            <Link to="skills" smooth={true} offset={-50}>
              <li>
                <h2>Skills</h2>
              </li>
            </Link>
            <Link to="portfolio" smooth={true} offset={-60}>
              <li>
                <h2>Portfolio</h2>
              </li>
            </Link>
            <Link to="contact" smooth={true} offset={50}>
              <li>
                <h2>Contact</h2>
              </li>
            </Link>
            <li>
              <a href="https://github.com/LailaL88" target="_blank">
                <h2>Github</h2>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
