// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/"><i className="fas fa-home icon"></i>Home</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/about"><i className="fas fa-user icon"></i>About</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/experience"><i className="fas fa-briefcase icon"></i> Experience</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/projects"><i className="fas fa-laptop-code icon"></i>Projects</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/contact"><i className="fas fa-envelope icon"></i>Contact</NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}}to="/blog"><i className="fas fa-blog icon"></i>Blog</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;